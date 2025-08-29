# @wisemen/mcp-server

This is a custom MCP server for the Wisemen Vue component library. It exposes structured context for your AI agent, including:

- **Components**: Markdown docs from `docs/packages/components-next/components`
- **Composables**: Markdown docs from component source files
- **Migrations**: Changelog from `packages/components/CHANGELOG.md`

## Setup

1. Install dependencies (from project root):
   ```sh
   cd /Users/jordyblocken/vue-core
   pnpm install
   ```

2. Build the server:
   ```sh
   cd packages/mcp-server
   pnpm build
   ```

## Claude Desktop Configuration

Add this configuration to your Claude Desktop settings file:

### macOS
File location: `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "vue-core": {
      "command": "pnpm",
      "args": ["start"],
      "cwd": "/Users/jordyblocken/vue-core/packages/mcp-server"
    }
  }
}
```

### Windows
File location: `%APPDATA%\Claude\claude_desktop_config.json`

### Linux
File location: `~/.config/Claude/claude_desktop_config.json`

### After Configuration
1. Save the config file
2. Restart Claude Desktop completely
3. Look for the MCP connection indicator in Claude Desktop
4. Test with: "What components are available?" or "List available documentation"

## Testing the Server

You can test the server manually:
```sh
cd packages/mcp-server
pnpm start
# Server will show connection info and wait for MCP client
```

## Available Resources

- **Components**: Access component documentation via `components://component-name`
- **Tools**:
  - `ping`: Health check tool
  - `fetchDoc`: Fetch specific component or composable documentation
  - `listDocNames`: List all available documentation names

---
MIT License

