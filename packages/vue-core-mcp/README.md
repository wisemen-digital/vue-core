# @wisemen/vue-core-mcp

Vue Core MCP server that exposes the component catalogue, props metadata, style tokens, and changelog history to Model Context Protocol clients.

## Overview

- Auto-indexes Vue components under `packages/components/src` using `vue-docgen-api`
- Generates JSON artifacts in `dist/mcp/**` for components, styles, stories, and changelog data
- Ships MCP tools for discovery (`listComponents`, `getComponent`, `searchProps`, `getStyles`, `getChangelog`, `diffComponent`)
- Runs fully off generated artifacts at runtime—no repository access required

## Prerequisites

- Node.js 20
- pnpm 10.7+
- Git history available if you want cross-version diffs via `diffComponent`

## Scripts

```bash
pnpm mcp:index            # Generate artifacts into dist/mcp
pnpm mcp:index:watch      # Regenerate artifacts on file changes (esno watch)
pnpm dev                  # Start the MCP server over stdio in dev mode
pnpm start                # Start the built server (requires pnpm build first)
pnpm build                # Compile TypeScript sources with tsdown
pnpm typecheck            # Run `tsc --noEmit`
pnpm test                 # Execute vitest suite
```

## MCP Tools

| Tool | Description | Input |
| ---- | ----------- | ----- |
| `listComponents` | Lists all indexed components with summary metadata | none |
| `getComponent` | Returns detailed documentation for a component (props, events, slots, usage) | `{ name: string }` |
| `searchProps` | Fuzzy search across component props | `{ q: string, limit?: number }` |
| `getStyles` | Returns CSS variables, classes, and design tokens for a component | `{ name: string }` |
| `getChangelog` | Returns changelog entries filtered by component or version range | `{ name?: string, from?: string, to?: string }` |
| `diffComponent` | Diffs prop surfaces between two versions (snapshots or git) | `{ name: string, from: string, to: string }` |

All tool inputs are validated with Zod. Tool invocations are logged with structured metadata for easy debugging.

## Indexer

The indexer CLI scans the component source tree and writes artifacts to `dist/mcp` with content hashes.

```bash
pnpm mcp:index -- --components-root packages/components/src
```

Artifacts written:

- `components.json` – component summaries, detailed docs, prop search index
- `styles.json` – style tokens, CSS variables, template classes
- `stories.json` – demo/story references (if detected)
- `changelog.json` – parsed changelog entries derived from CHANGELOG.md or git
- `manifest.json` – hash manifest for incremental builds
- `history/<version>-components.json` – optional component snapshots for diffs

## Development Workflow

1. Run `pnpm mcp:index` after component changes to regenerate artifacts
2. Start the server with `pnpm dev`
3. Point your MCP-aware client (e.g. Claude Desktop) at `pnpm --filter @wisemen/vue-core-mcp dev`
4. Execute the provided tools to explore component metadata

## Testing

The vitest suite covers:
- Indexer behaviour against local fixtures
- Schema validation round-trips
- Tool logic using seeded artifacts
- MCP server smoke tests to ensure tool registration works

Run tests in watch mode with `pnpm test:watch` or once via `pnpm test`.

## Deployment Notes

- Production servers should only require the `dist` bundle and generated JSON artifacts
- Regenerate artifacts in CI before deploying (`pnpm mcp:index`)
- Nightly job (`.github/workflows/mcp-nightly.yml`) refreshes artifacts to capture post-tag git changes
