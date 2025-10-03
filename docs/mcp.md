# Vue Core MCP Server

The MCP server surfaces the Vue Core component catalogue to Model Context Protocol clients so that design system knowledge stays fresh without manual curation.

## Architecture

```
packages/vue-core-mcp
├─ src/indexer         # CLI that scans components, stories, styles, changelog
├─ src/tools           # MCP tool handlers; read dist/mcp artifacts
├─ src/utils           # Shared helpers (fs, git, caching, logging)
├─ dist/mcp            # Generated JSON artifacts consumed at runtime
└─ src/server.ts       # STDIO bootstrap for @modelcontextprotocol/sdk
```

1. **Indexer** (`pnpm mcp:index`) walks `packages/components/src/**` with `vue-docgen-api`, extracts props/events/slots, parses `<style>` blocks, merges tokens, and reads the component changelog. Artifacts are written to `dist/mcp` with content hashes and optional history snapshots (tag or git SHA).
2. **Server** (`pnpm dev` or `pnpm start`) boots an MCP stdio transport, loads artifacts lazily, and registers the tool set. Runtime I/O is read-only—no repo access is required after artifacts exist.
3. **CI** (`.github/workflows/mcp-server-ci.yml`) builds the core library, regenerates artifacts, runs type checks/tests, and uploads `dist/mcp`. A nightly workflow reruns the indexer to keep changelog/tag drift in sync.

## Available Tools

| Tool | What it answers |
| ---- | ---------------- |
| `listComponents` | "What components are available?" |
| `getComponent` | "Give me full documentation for `VcDateRangePicker`" |
| `searchProps` | "Which components expose a `density` prop?" |
| `getStyles` | "Show CSS vars and tokens used by `VcModal`" |
| `getChangelog` | "What changed for `VcTabs` between 1.0.0 and 1.2.0?" |
| `diffComponent` | "How did the props of `VcTable` change between tags?" |

Each tool validates input/output via Zod and provides structured logs per invocation (`[tool:<name>]`).

### Example Client Prompts

- *"Find a date-range picker that supports compact density and show the import statement."*
- *"List all components exposing a `v-model` prop with boolean type."*
- *"Show the latest changelog note for `VcTabs` and list the deprecated props."*
- *"Diff `VcButton` between `1.0.0-alpha.32` and `1.1.0` and highlight new props."*

## Usage

```bash
pnpm mcp:index                       # Generate dist/mcp artifacts
pnpm --filter @wisemen/vue-core-mcp dev   # Start MCP stdio server (hot reload via esno)
```

Add the server to your MCP client configuration:

```json
{
  "mcpServers": {
    "vue-core": {
      "command": "pnpm",
      "args": ["--filter", "@wisemen/vue-core-mcp", "dev"],
      "cwd": "/path/to/vue-core"
    }
  }
}
```

## Maintenance Checklist

- Keep component JSDoc up to date—indexer reads `@since`, `@deprecated`, and `@example`
- Use Conventional Commits so changelog derivation stays accurate
- Run `pnpm mcp:index` after component/styling changes; CI enforces this
- Commit relevant snapshots under `dist/mcp/history` if you want richer diffs for long-lived branches

## Nightly Index Job

The `MCP Nightly Index` workflow runs at 02:00 UTC. It regenerates artifacts and uploads them as a build artifact so downstream tools stay current even if a release tag was added after the last CI run.
