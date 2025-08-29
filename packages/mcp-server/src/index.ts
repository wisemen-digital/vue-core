import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import fs from "fs";
import path from "path";
import { z } from "zod";

const server = new McpServer({
  name: "vue-library-mcp",
  version: "0.1.0"
});

// Utility: Recursively find all .md files and return their absolute path and logical name
function findMarkdownFilesRecursively(rootDir: string): { filePath: string; logicalName: string }[] {
  const results: { filePath: string; logicalName: string }[] = [];
  function walk(currentDir: string, relPath: string = "") {
    for (const entry of fs.readdirSync(currentDir)) {
      const fullPath = path.join(currentDir, entry);
      const relEntryPath = relPath ? path.join(relPath, entry) : entry;
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath, relEntryPath);
      } else if (entry.endsWith(".md")) {
        // Remove .md extension for logical name, and normalize to posix
        const logicalName = relEntryPath.replace(/\.md$/, "").split(path.sep).join("/");
        results.push({ filePath: fullPath, logicalName });
      }
    }
  }
  walk(rootDir);
  return results;
}

// Utility: Recursively find all .md and .vue files in docs for components
function findComponentDocsRecursively(rootDir: string): { filePath: string; logicalName: string }[] {
  const results: { filePath: string; logicalName: string }[] = [];
  function walk(currentDir: string, relPath: string = "") {
    for (const entry of fs.readdirSync(currentDir)) {
      const fullPath = path.join(currentDir, entry);
      const relEntryPath = relPath ? path.join(relPath, entry) : entry;
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath, relEntryPath);
      } else if (entry.endsWith(".md") || entry.endsWith(".vue")) {
        // Strip .md or .vue extension for logical name
        let logicalName = relEntryPath;
        if (logicalName.endsWith(".md")) logicalName = logicalName.slice(0, -3);
        else if (logicalName.endsWith(".vue")) logicalName = logicalName.slice(0, -4);
        logicalName = logicalName.split(path.sep).join("/");
        results.push({ filePath: fullPath, logicalName });
      }
    }
  }
  walk(rootDir);
  return results;
}

// Register components resource (docs, not source)
server.resource(
  "components",
  "components://{name}",
  async (uri, params) => {
    const docsRoot = path.resolve(__dirname, "../../../docs/packages/components-next/components");
    const files = findComponentDocsRecursively(docsRoot);
    // Extract logical name from URI (e.g. components://address-autocomplete/meta)
    const logicalName = uri.pathname.replace(/^\//, "");
    const match = files.find(f => f.logicalName === logicalName);
    if (!match) return { contents: [] };
    return {
      contents: [{
        uri: uri.href,
        mimeType: match.filePath.endsWith(".md") ? "text/markdown" : "text/x-vue",
        text: fs.readFileSync(match.filePath, "utf8")
      }]
    };
  }
);

// Register composables resource
defaultResource(
  "composables",
  "composables://{name}",
  "../../components-next/src/composables",
  "Composable documentation"
);
// Register migrations resource
server.registerResource(
  "migrations",
  new ResourceTemplate("migrations://changelog", { list: undefined }),
  {
    title: "Migrations Changelog",
    description: "Changelog for component migrations"
  },
  async (uri) => {
    const changelogPath = path.resolve(__dirname, "../../packages/components/CHANGELOG.md");
    if (!fs.existsSync(changelogPath)) return { contents: [] };
    const changelog = fs.readFileSync(changelogPath, "utf8");
    return {
      contents: [{
        uri: uri.href,
        text: changelog,
        title: "Changelog",
        mimeType: "text/markdown"
      }]
    };
  }
);

function defaultResource(resourceName: string, uriPattern: string, relDocsPath: string, description: string) {
  server.registerResource(
    resourceName,
    new ResourceTemplate(uriPattern, { list: undefined }),
    {
      title: `${resourceName.charAt(0).toUpperCase() + resourceName.slice(1)}`,
      description
    },
    async (uri, params) => {
      const docsPath = path.resolve(__dirname, relDocsPath);
      if (!fs.existsSync(docsPath)) return { contents: [] };
      const mdFiles = findMarkdownFilesRecursively(docsPath);
      // Handle list request (e.g. components://list)
      if (params && params.list !== undefined) {
        return {
          contents: mdFiles.map(({ logicalName }) => ({
            uri: `${resourceName}://${logicalName}`,
            title: logicalName,
            text: "",
            mimeType: "text/markdown"
          }))
        };
      }
      // If a specific name is requested, return that file (match logicalName)
      if (params && params.name) {
        const match = mdFiles.find(f => f.logicalName === params.name);
        if (match) {
          return {
            contents: [{
              uri: uri.href,
              text: fs.readFileSync(match.filePath, "utf8"),
              title: params.name,
              mimeType: "text/markdown"
            }]
          };
        }
        return { contents: [] };
      }
      // Otherwise, list all files (legacy fallback)
      return {
        contents: mdFiles.map(({ logicalName, filePath }) => ({
          uri: `${resourceName}://${logicalName}`,
          text: fs.readFileSync(filePath, "utf8"),
          title: logicalName,
          mimeType: "text/markdown"
        }))
      };
    }
  );
}

// Register a dummy tool to ensure MCP tools endpoint is present
server.registerTool(
  "ping",
  {
    title: "Ping Tool",
    description: "Returns 'pong' for health checks.",
    inputSchema: {},
  },
  async () => ({
    content: [{ type: "text", text: "pong" }]
  })
);

// Register a tool to fetch docs for a given component/composable
server.registerTool(
  "fetchDoc",
  {
    title: "Fetch Documentation",
    description: "Fetches the Markdown documentation for a given component or composable by logical name.",
    inputSchema: {
      resource: z.enum(["components", "composables"]),
      name: z.string().min(1)
    }
  },
  async ({ resource, name }) => {
    // Use correct docs path for each resource
    const relDocsPath = resource === "components"
      ? "../../../docs/packages/components-next/components"
      : "../../components-next/src/composables";
    const docsPath = path.resolve(__dirname, relDocsPath);
    if (!fs.existsSync(docsPath)) {
      return { content: [{ type: "text", text: `Docs folder not found for resource: ${resource}` }] };
    }
    const mdFiles = findComponentDocsRecursively(docsPath);
    const match = mdFiles.find(f => f.logicalName === name);
    if (!match) {
      return { content: [{ type: "text", text: `No documentation found for ${resource} '${name}'.` }] };
    }
    const docText = fs.readFileSync(match.filePath, "utf8");
    return { content: [{ type: "text", text: docText }] };
  }
);

// Register a tool to list all doc logical names for a given resource
server.registerTool(
  "listDocNames",
  {
    title: "List Documentation Names",
    description: "Lists all logical names for documentation in the given resource (components or composables).",
    inputSchema: {
      resource: z.enum(["components", "composables"])
    }
  },
  async ({ resource }) => {
    const relDocsPath = resource === "components"
      ? "../../../docs/packages/components-next/components"
      : "../../components-next/src/composables";
    const docsPath = path.resolve(__dirname, relDocsPath);
    if (!fs.existsSync(docsPath)) {
      return { content: [{ type: "text", text: `Docs folder not found for resource: ${resource}` }] };
    }
    // Use the correct finder for each resource
    const mdFiles = resource === "components"
      ? findComponentDocsRecursively(docsPath)
      : findMarkdownFilesRecursively(docsPath);
    const names = mdFiles.map(f => f.logicalName);
    return { content: [{ type: "text", text: names.join("\n") }] };
  }
);

// Log recommended MCP client config on startup
const recommendedConfig = {
  mcpServers: {
    "vue-core": {
      command: "pnpm",
      args: ["start"],
      cwd: process.cwd()
    }
  }
};
console.log("\n=== MCP Client Config Example ===\nCopy this into your MCP-aware client config (e.g. Claude Desktop):\n");
console.log(JSON.stringify(recommendedConfig, null, 2));
console.log("\n===============================\n");

const transport = new StdioServerTransport();
server.connect(transport);
