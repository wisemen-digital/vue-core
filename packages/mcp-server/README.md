# @wisemen/mcp-server

This is a custom MCP server for the Wisemen Vue component library. It exposes structured context for your AI agent, including:

- **Components**: Markdown docs from `docs/components`
- **Composables**: Markdown docs from `docs/composables`
- **Migrations**: Changelog from `packages/components/CHANGELOG.md`

## Setup

1. Install dependencies:
   ```sh
   pnpm install
   ```
2. Build the server:
   ```sh
   pnpm build
   ```
3. Start the server (dev):
   ```sh
   pnpm start
   ```

## Usage

Configure your MCP-aware AI agent to connect to this server. Example config for Claude Desktop:

```json
{
  "mcpServers": {
    "vue-library": {
      "command": "pnpm",
      "args": ["start"],
      "cwd": "./packages/mcp-server"
    }
  }
}
```

## Notes
- Ensure `docs/components` and `docs/composables` exist and contain Markdown files for your components and composables.
- The server reads the changelog from `packages/components/CHANGELOG.md`.
- You can extend the server to add more resources or MCP tools as needed.

---
MIT License

