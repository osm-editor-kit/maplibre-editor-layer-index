/** GitHub helpers for Editor Layer Index provenance and release notes. */

import { gunzipSync } from 'node:zlib'

export const ELI_REPO = 'osmlab/editor-layer-index'
export const ELI_REPO_URL = `https://github.com/${ELI_REPO}`
/** ELI publishes the imagery index from this branch (also the default branch). */
export const ELI_REF = 'gh-pages'

const DEPLOY_SHA_RE = /Deploying to gh-pages from @ osmlab\/editor-layer-index@([0-9a-f]{40})/i
const PR_RE = /#(\d+)/g

export type EliGithubCommit = {
  sha: string
  message: string
  htmlUrl: string
  /** Pull request numbers referenced in the commit subject/body. */
  prNumbers: number[]
}

export type EliGithubCompare = {
  htmlUrl: string
  commits: EliGithubCommit[]
  /** Source GeoJSON paths under `sources/` touched in the compare range. */
  sourceFiles: { path: string; status: string }[]
}

function githubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN
  if (token) headers.Authorization = `Bearer ${token}`
  return headers
}

async function githubJson<T>(path: string): Promise<T> {
  const response = await fetch(`https://api.github.com${path}`, { headers: githubHeaders() })
  if (!response.ok) {
    throw new Error(`GitHub API ${path}: ${response.status} ${response.statusText}`)
  }
  return (await response.json()) as T
}

/** Prefer the pre-deploy content SHA from Pages deploy commits; else the tip SHA. */
export function resolveEliSourceCommit(tipSha: string, commitMessage: string): string {
  const match = commitMessage.match(DEPLOY_SHA_RE)
  return match?.[1] ?? tipSha
}

export function extractPrNumbers(message: string): number[] {
  const found = new Set<number>()
  for (const match of message.matchAll(PR_RE)) {
    found.add(Number(match[1]))
  }
  return [...found]
}

/** Resolve the ELI content commit currently behind published `imagery.geojson`. */
export async function fetchEliSourceCommit(ref: string = ELI_REF): Promise<string> {
  const tip = await githubJson<{ sha: string; commit: { message: string } }>(
    `/repos/${ELI_REPO}/commits/${encodeURIComponent(ref)}`,
  )
  return resolveEliSourceCommit(tip.sha, tip.commit.message)
}

export async function fetchEliCompare(
  base: string,
  head: string,
): Promise<EliGithubCompare | null> {
  if (base === head) {
    return { htmlUrl: `${ELI_REPO_URL}/compare/${base}...${head}`, commits: [], sourceFiles: [] }
  }
  try {
    const data = await githubJson<{
      html_url: string
      commits: { sha: string; html_url: string; commit: { message: string } }[]
      files?: { filename: string; status: string }[]
    }>(`/repos/${ELI_REPO}/compare/${base}...${head}`)

    return {
      htmlUrl: data.html_url,
      commits: data.commits.map((c) => ({
        sha: c.sha,
        message: c.commit.message,
        htmlUrl: c.html_url,
        prNumbers: extractPrNumbers(c.commit.message),
      })),
      sourceFiles: (data.files ?? [])
        .filter((f) => /^sources\/.+\.geojson$/i.test(f.filename))
        .map((f) => ({ path: f.filename, status: f.status })),
    }
  } catch (error) {
    console.warn(`ELI compare ${base}...${head} unavailable:`, error)
    return null
  }
}

/** Map ELI source file paths → layer id by reading raw GeoJSON at base/head. */
export async function mapSourceFilesToLayerIds(
  files: { path: string; status: string }[],
  base: string,
  head: string,
): Promise<Map<string, { path: string; status: string }>> {
  const byId = new Map<string, { path: string; status: string }>()
  await Promise.all(
    files.map(async (file) => {
      const ref = file.status === 'removed' ? base : head
      const url = `https://raw.githubusercontent.com/${ELI_REPO}/${ref}/${file.path}`
      try {
        const response = await fetch(url, { headers: { Accept: 'application/json' } })
        if (!response.ok) return
        const geo = (await response.json()) as { properties?: { id?: string } }
        const id = geo.properties?.id
        if (id) byId.set(id, file)
      } catch {
        // Layer still listed without a source-file link.
      }
    }),
  )
  return byId
}

/** Read the 512-byte-block ustar archive GitHub serves, calling `onFile` per regular file. */
function readTar(bytes: Uint8Array, onFile: (path: string, contents: Uint8Array) => void): void {
  const decoder = new TextDecoder()
  // Header fields are NUL-terminated within their fixed width.
  const field = (offset: number, length: number) => {
    const raw = bytes.subarray(offset, offset + length)
    const end = raw.indexOf(0)
    return decoder.decode(end === -1 ? raw : raw.subarray(0, end))
  }
  let offset = 0
  while (offset + 512 <= bytes.length) {
    const name = field(offset, 100)
    if (!name) break
    const size = Number.parseInt(field(offset + 124, 12).trim() || '0', 8)
    const type = field(offset + 156, 1)
    const prefix = field(offset + 345, 155)
    const start = offset + 512
    if (type === '0' || type === '') {
      onFile(prefix ? `${prefix}/${name}` : name, bytes.subarray(start, start + size))
    }
    offset = start + Math.ceil(size / 512) * 512
  }
}

/**
 * Map layer id → path of its source file in ELI (`sources/…/<file>.geojson`).
 * The published imagery.geojson drops the path, so read it from the repo archive.
 */
export async function fetchEliSourcePaths(ref: string = ELI_REF): Promise<Map<string, string>> {
  const url = `https://codeload.github.com/${ELI_REPO}/tar.gz/${encodeURIComponent(ref)}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`ELI archive ${url}: ${response.status} ${response.statusText}`)
  }
  const tar = gunzipSync(new Uint8Array(await response.arrayBuffer()))
  const decoder = new TextDecoder()
  const byId = new Map<string, string>()
  readTar(tar, (archivePath, contents) => {
    // Archive paths start with an `<repo>-<ref>/` folder.
    const path = archivePath.slice(archivePath.indexOf('/') + 1)
    if (!/^sources\/.+\.geojson$/i.test(path)) return
    try {
      const geo = JSON.parse(decoder.decode(contents)) as { properties?: { id?: string } }
      const id = geo.properties?.id
      if (id) byId.set(id, path)
    } catch {
      // Not parseable — that layer just gets no source link.
    }
  })
  return byId
}

export function shortSha(sha: string): string {
  return sha.slice(0, 7)
}

export function commitSubject(message: string): string {
  return message.split('\n', 1)[0]?.trim() ?? message
}

export function formatCommitLine(commit: EliGithubCommit): string {
  const subject = commitSubject(commit.message)
    // Drop a trailing " (#123)" — we link PRs separately when present.
    .replace(/\s*\(#\d+\)\s*$/, '')
  const shaLink = `[\`${shortSha(commit.sha)}\`](${commit.htmlUrl})`
  const prLinks = commit.prNumbers.map((n) => `([#${n}](${ELI_REPO_URL}/pull/${n}))`).join(' ')
  return `- ${shaLink} ${subject}${prLinks ? ` ${prLinks}` : ''}`
}
