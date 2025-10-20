# Vue Core MCP Server

A comprehensive Model Context Protocol (MCP) server for the Vue Core monorepo. This tool provides AI assistants with full access to package documentation, source code, git history, and intelligent search capabilities - enabling accurate, context-aware development assistance.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Available Tools](#available-tools)
- [Usage Examples](#usage-examples)
- [Architecture](#architecture)
- [Development](#development)
- [Testing](#testing)

## Overview

This MCP server enables AI agents to:
- 📚 Access comprehensive package and component documentation
- 🔍 Search across docs and source code
- 📦 Browse package structure and read files
- 🔄 Track changes via git integration
- 🎯 Get component-specific information for Vue libraries

## Features

### 📚 Documentation Access

**Package-Level Documentation**
- Fetch complete package documentation including README and available docs
- List all documentation files in a package
- Read specific documentation files
- Search across all documentation

**Component-Level Documentation** (for component packages like components-next)
- List all documented components
- Get detailed component documentation with:
  - Component description and anatomy
  - Props, events, and API reference
  - Usage examples
  - Related files

### 💻 Code Operations

- **Package Discovery**: List all packages in the monorepo
- **File Browsing**: List all source files in a package
- **File Reading**: Read any source file
- **Code Search**: Search for text across source code files

### 🔄 Git Integration

- **Commit History**: View package-specific commit history
- **Diffs**: See changes for specific packages
- **Status**: Check current working state for packages

### 🎯 MCP Resources

Each package is exposed as a resource (`package://{name}`) providing:
- Package metadata from package.json
- Source file listings
- Documentation availability and structure
- Component listings (for component packages)

## Installation

```bash
cd packages/mcp
pnpm install
pnpm build
```

## Configuration

### Claude Desktop

Add to your Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
  "mcpServers": {
    "vue-core": {
      "command": "node",
      "args": ["/absolute/path/to/vue-core/packages/mcp/dist/index.mjs"]
    }
  }
}
```

### Cursor

In your Cursor MCP settings:

```json
{
  "mcp": {
    "servers": {
      "vue-core": {
        "command": "node",
        "args": ["/absolute/path/to/vue-core/packages/mcp/dist/index.mjs"]
      }
    }
  }
}
```

### Other MCP Clients

Configure to run:
```bash
node /absolute/path/to/vue-core/packages/mcp/dist/index.mjs
```

## Available Tools

### Documentation Tools

#### 1. `get_package_documentation`
**USE THIS FIRST** - Get comprehensive package overview

```json
{ "package": "components-next" }
```

**Returns:**
- Package README
- List of all documentation files
- Package.json metadata
- Overview information

#### 2. `list_component_docs`
List all documented components in a package

```json
{ "package": "components-next" }
```

**Returns:** Array of component names (e.g., button, autocomplete, dialog)

#### 3. `get_component_documentation`
Get complete documentation for a specific component

```json
{
  "package": "components-next",
  "component": "button"
}
```

**Returns:**
- Component description
- Anatomy/structure
- Props and events
- API reference
- Usage examples
- Available example files

#### 4. `search_documentation`
Search for text within documentation files

```json
{
  "package": "components-next",
  "query": "validation"
}
```

**Returns:** Matching files with line numbers and context

#### 5. `get_documentation_file`
Read a specific documentation file

```json
{
  "package": "components-next",
  "file": "components/button/button.md"
}
```

### Code Tools

#### 6. `list_packages`
List all packages in the monorepo

```json
{}
```

**Returns:** List of packages with paths and documentation status

#### 7. `list_files`
List all source files in a package

```json
{ "package": "components-next" }
```

**Returns:** Array of file paths relative to package root

#### 8. `read_file`
Read a source code file

```json
{
  "package": "components-next",
  "file": "src/components/button/Button.vue"
}
```

#### 9. `search_code`
Search for text in source code files

```json
{
  "package": "auth",
  "query": "useAuth"
}
```

**Returns:** Matching files with line numbers

### Git Tools

#### 10. `git_log`
Get commit history for a package

```json
{
  "package": "auth",
  "max_count": 10
}
```

#### 11. `git_diff`
Get git diff for a package

```json
{
  "package": "auth",
  "ref1": "HEAD~1",
  "ref2": "HEAD"
}
```

#### 12. `git_status`
Get current git status for a package

```json
{ "package": "auth" }
```

## Usage Examples

### For AI Assistants

**Query: "How do I use the autocomplete component?"**

Optimal flow:
1. `get_package_documentation("components-next")` → Understand what's available
2. `list_component_docs("components-next")` → See autocomplete is available
3. `get_component_documentation("components-next", "autocomplete")` → Get full docs
4. Provide accurate answer based on actual documentation

**Query: "Find validation features in components-next"**

Flow:
1. `search_documentation("components-next", "validation")` → Find relevant docs
2. `get_documentation_file(...)` → Read specific files if needed

**Query: "What changed in the auth package recently?"**

Flow:
1. `git_status("auth")` → See current changes
2. `git_log("auth", 5)` → View recent commits
3. `git_diff("auth")` → See actual changes

### Manual Testing

```bash
# List all tools
echo '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | \
  node dist/index.mjs 2>/dev/null | jq

# Get package documentation
echo '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_package_documentation","arguments":{"package":"components-next"}}}' | \
  node dist/index.mjs 2>/dev/null | jq -r '.result.content[0].text'

# List components
echo '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"list_component_docs","arguments":{"package":"components-next"}}}' | \
  node dist/index.mjs 2>/dev/null | jq -r '.result.content[0].text'

# Get component documentation
echo '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_component_documentation","arguments":{"package":"components-next","component":"button"}}}' | \
  node dist/index.mjs 2>/dev/null | jq -r '.result.content[0].text'
```

## Architecture

### Directory Structure

The server understands this monorepo structure:

```
vue-core/
├── packages/              # Source packages
│   ├── components-next/
│   ├── auth/
│   ├── mcp/              # ← This MCP server
│   └── ...
└── docs/                 # Documentation
    └── packages/
        ├── components-next/
        │   └── components/
        │       ├── button/
        │       │   ├── button.md       # Main docs
        │       │   ├── button-meta.md  # API reference
        │       │   └── examples/       # Examples
        │       └── ...
        └── components-v1/              # Versioned docs support
```

### Implementation Highlights

**Package Discovery:**
```typescript
interface PackageInfo {
  name: string
  path: string
  docsPath?: string // Auto-discovered from /docs/packages/
}
```

**Documentation Resolution:**
1. Check `/docs/packages/{package-name}/`
2. Check `/docs/packages/{package-name}-v1/` (versioned)
3. Index all Markdown files recursively
4. Track component documentation structure

**Component Documentation Pattern:**
- Main doc: `{component}.md` - Description, usage, examples
- Meta doc: `{component}-meta.md` - Props, events, API
- Examples: `examples/` directory

### Design Philosophy (Inspired by git-mcp)

1. **Documentation-First**: Always provide overview before details
2. **Granular Access**: Enable specific queries for components/files
3. **Search for Discovery**: Find information when path is unknown
4. **Consistent Structure**: Predictable response formats
5. **Error Handling**: Graceful degradation when docs unavailable

### Key Differences from git-mcp

**git-mcp (Remote):**
- Fetches from GitHub API and Pages
- Looks for `llms.txt` files
- Converts HTML to Markdown
- Semantic search via embeddings
- Public repositories

**Our Implementation (Local):**
- Direct file system access
- Structured `/docs/packages/` directory
- Native Markdown support
- Text-based search
- Private monorepo optimization
- Source code access

### Advantages

1. **No Network Latency**: Instant file access
2. **Private Code**: Works with any local monorepo
3. **Real-time**: Always current with local changes
4. **Source Access**: Read implementation, not just docs
5. **Custom Structure**: Optimized for Vue Core

## Development

```bash
# Install dependencies
pnpm install

# Build (uses unbuild, consistent with auth & telemetry packages)
pnpm build

# Watch mode for development
pnpm dev

# Run the server
pnpm start

# Run unit tests
pnpm test

# Lint code
pnpm lint

# Type check
pnpm type-check
```

### Project Structure

```
packages/mcp/
├── src/
│   ├── index.ts              # Entry point + MCP server setup
│   ├── constants.ts          # Shared constants
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   ├── lib/
│   │   ├── packages.ts       # Package discovery & file operations
│   │   ├── packages.spec.ts  # Unit tests
│   │   ├── documentation.ts  # Documentation functions
│   │   ├── documentation.spec.ts # Unit tests
│   │   ├── git.ts           # Git operations
│   │   └── search.ts        # Search functionality
│   └── server/
│       ├── tools.ts         # Tool definitions
│       └── handlers.ts      # MCP request handlers
├── test/
│   └── test-client.js       # Integration test client
├── dist/                    # Built output
├── build.config.ts          # unbuild configuration
├── vitest.config.ts         # Test configuration
├── package.json
├── tsconfig.json
└── README.md
```

### Architecture

The codebase is organized into logical modules:

- **lib/** - Core functionality (packages, documentation, git, search)
- **server/** - MCP server implementation (tools definitions, request handlers)
- **types/** - Shared TypeScript types
- **constants.ts** - Shared constants (paths, etc.)

Each module has a single responsibility and can be tested independently.

## Testing

### Run Test Suite

```bash
cd packages/mcp
node test/test-client.js
```

**Test Coverage:**
- ✅ Tool listing and availability
- ✅ Package discovery with docs flags
- ✅ Package documentation fetching
- ✅ Component listing
- ✅ Component documentation access
- ✅ Documentation search
- ✅ Resource metadata
- ✅ Full MCP protocol compliance

### Expected Output

```
🧪 Testing Vue Core MCP Server (Enhanced with Documentation)

1️⃣  Listing tools...
   ✅ Found 12 tools
   📚 Documentation tools: get_package_documentation, list_component_docs...

2️⃣  Listing packages...
   ✅ Found 12 packages
   📚 2 have documentation

3️⃣  Getting components-next documentation...
   ✅ Retrieved documentation (4131 chars)
   📄 Contains doc files list

4️⃣  Listing component documentation...
   ✅ Found 34 documented components

5️⃣  Getting Button component documentation...
   ✅ Retrieved button docs (3416 chars)
   ✅ Has Anatomy section
   ✅ Has Examples section
   ✅ Has API Reference

✨ All tests passed!
```

## Best Practices for AI Agents

1. **Start with package overview**: Always call `get_package_documentation` first
2. **Use component-specific tools**: For component libraries, use `get_component_documentation`
3. **Search when unsure**: Use `search_documentation` to discover functionality
4. **Check git for context**: Use git tools when debugging or understanding changes
5. **Combine tools effectively**: Start broad (package) → narrow (component) → specific (file)

## Common Workflows

### Understanding a Component
```
1. get_package_documentation("components-next")    # Overview
2. list_component_docs("components-next")          # Find component
3. get_component_documentation(..., "button")      # Get details
```

### Finding a Feature
```
1. search_documentation("components-next", "validation")  # Search
2. get_documentation_file(...)                            # Read file
```

### Code Investigation
```
1. list_files("package-name")                      # Browse
2. read_file("package-name", "path/to/file")      # Read
3. search_code("package-name", "functionName")    # Find usage
```

### Change Tracking
```
1. git_status("package-name")      # Current state
2. git_log("package-name", 5)      # Recent history
3. git_diff("package-name")        # See changes
```
