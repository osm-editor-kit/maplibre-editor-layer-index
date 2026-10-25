#!/usr/bin/env bun
/**
 * Fail the build if the always-loaded locator (or total published dist) grows past budget.
 * Run after `bun run build` from the package root.
 */
import { readdir, readFile, stat } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')
const LOCATOR_SRC = join(ROOT, 'src', 'data', 'locator.json')

/**
 * Always-loaded locator, measured as shipped: tsup emits it as compact JSON, so
 * the pretty-printed source (indentation of nested arrays) does not count.
 */
const LOCATOR_BUDGET_BYTES = 600 * 1024
/** Unpacked dist (all shards) — soft ceiling; adjust if ELI grows. */
const DIST_BUDGET_BYTES = 20 * 1024 * 1024

async function dirSize(path: string): Promise<number> {
  let total = 0
  for (const entry of await readdir(path, { withFileTypes: true })) {
    const full = join(path, entry.name)
    if (entry.isDirectory()) total += await dirSize(full)
    else total += (await stat(full)).size
  }
  return total
}

const locatorBytes = Buffer.byteLength(
  JSON.stringify(JSON.parse(await readFile(LOCATOR_SRC, 'utf8'))),
)
const distBytes = await dirSize(DIST)

const fmt = (n: number) => `${(n / 1024).toFixed(0)} KB`

let failed = false
if (locatorBytes > LOCATOR_BUDGET_BYTES) {
  console.error(`locator.json ${fmt(locatorBytes)} exceeds budget ${fmt(LOCATOR_BUDGET_BYTES)}`)
  failed = true
} else {
  console.log(`locator.json ${fmt(locatorBytes)} (budget ${fmt(LOCATOR_BUDGET_BYTES)})`)
}

if (distBytes > DIST_BUDGET_BYTES) {
  console.error(`dist/ ${fmt(distBytes)} exceeds budget ${fmt(DIST_BUDGET_BYTES)}`)
  failed = true
} else {
  console.log(`dist/ ${fmt(distBytes)} (budget ${fmt(DIST_BUDGET_BYTES)})`)
}

if (failed) process.exit(1)
