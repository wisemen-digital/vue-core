import express from "express";
import fs from "fs";
import path from "path";
import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// --- Path Root ---
const ROOT = path.resolve(__dirname, '../../..');

// --- Utility functions ---
function componentToDir(component: string) {
  // VcCheckbox -> checkbox
  const withoutPrefix = (component || "").replace(/^Vc/, "");
  return withoutPrefix.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
}

function tryReadFile(fp: string) {
  try {
    return fs.readFileSync(fp, "utf8");
  } catch (e) {
    return null;
  }
}

// --- MCP Server Setup ---
const server = new McpServer({
  name: "vue-core-mcp",
  version: "0.1.0",
});

// --- Tool 1: List all vue-core component names ---
server.registerTool(
  "listComponentNames",
  {
    title: "List Vue Core Component Names",
    description: "Lists all available vue-core component names (e.g., VcCheckbox)",
    inputSchema: {},
  },
  (_args: any, _extra?: any): any => {
    const indexPath = path.resolve(ROOT, "packages/components-next/src/components/index.ts");
    if (!fs.existsSync(indexPath)) {
      return { content: [{ type: "text", text: `index.ts not found at ${indexPath}` }] } as any;
    }
    const indexContent = tryReadFile(indexPath) || "";
    const exportMatches = [...indexContent.matchAll(/export\s+\*\s+from\s+['\"](.*?)['\"]/g)];
    const componentNames = new Set<string>();
    for (const m of exportMatches) {
      const rel = m[1];
      let importPath = rel.replace(/^@\//, "packages/components-next/src/");
      if (!/(\.ts|\.js|\.tsx|\.jsx)$/.test(importPath)) importPath = path.join(importPath, "index.ts");
      const abs = path.resolve(ROOT, importPath);
      if (!fs.existsSync(abs)) continue;
      const content = tryReadFile(abs) || "";
      // export { default as VcCheckbox, ... }
      for (const ex of content.matchAll(/export\s*\{([^}]*)\}/g)) {
        const inner = ex[1];
        if (!inner) continue;
        const parts = inner.split(",").map(p => p.trim());
        for (const p of parts) {
          const asMatch = p.match(/as\s+(Vc[A-Za-z0-9_]+)/);
          if (asMatch) {
            componentNames.add(asMatch[1]);
            continue;
          }
          const nameMatch = p.match(/^(Vc[A-Za-z0-9_]+)/);
          if (nameMatch) componentNames.add(nameMatch[1]);
        }
      }
      // export const VcName = ...
      for (const d of content.matchAll(/export\s+(?:const|let|var|function|class)\s+(Vc[A-Za-z0-9_]+)/g)) {
        if (d[1]) componentNames.add(d[1]);
      }
    }
    return { content: [{ type: "text", text: JSON.stringify([...componentNames].sort(), null, 2) }] } as any;
  }
);

// --- Tool 2: Fetch documentation markdown for a given component ---
server.registerTool(
  "fetchComponentDocs",
  {
    title: "Fetch Component Documentation",
    description: "Fetches the documentation markdown for a given component name (e.g., VcCheckbox)",
    inputSchema: { component: z.string().min(1) },
  },
  (args: any, _extra?: any): any => {
    const component = args?.component;
    if (!component) return { content: [{ type: "text", text: "component argument missing" }] } as any;
    const dir = componentToDir(component);
    const docsRoot = path.resolve(ROOT, "docs/packages/components-next/components");
    const subDir = path.join(docsRoot, dir);
    const found: { file: string; content: string }[] = [];
    function walk(d: string) {
      if (!fs.existsSync(d)) return;
      for (const entry of fs.readdirSync(d)) {
        const full = path.join(d, entry);
        if (fs.statSync(full).isDirectory()) walk(full);
        else if (/\.md$/i.test(entry)) {
          const c = tryReadFile(full);
          if (c !== null) found.push({ file: path.basename(full), content: c });
        }
      }
    }
    if (fs.existsSync(subDir) && fs.statSync(subDir).isDirectory()) walk(subDir);
    if (found.length === 0) {
      const candidates = [
        path.join(docsRoot, `${dir}.md`),
        path.join(docsRoot, `${dir}-meta.md`),
        path.join(docsRoot, `${dir}-meta.MD`),
      ];
      for (const c of candidates) {
        if (fs.existsSync(c)) {
          const cont = tryReadFile(c);
          if (cont !== null) found.push({ file: path.basename(c), content: cont });
        }
      }
    }
    if (found.length === 0) return { content: [{ type: "text", text: `No documentation found for ${component}` }] } as any;
    return { content: found.map(f => ({ type: "text", text: `# ${f.file}\n\n${f.content}` })) } as any;
  }
);

// --- Tool 3: Fetch example/demo .vue files for a given component ---
server.registerTool(
  "fetchComponentExamples",
  {
    title: "Fetch Component Example Code",
    description: "Fetches example/demo .vue files for a given component name (e.g., VcCheckbox)",
    inputSchema: { component: z.string().min(1) },
  },
  (args: any, _extra?: any): any => {
    const component = args?.component;
    if (!component) return { content: [{ type: "text", text: "component argument missing" }] } as any;
    const dir = componentToDir(component);
    const srcRoot = path.resolve(ROOT, "packages/components-next/src/components");
    const componentDir = path.join(srcRoot, dir);
    const docsExamplesDir = path.join(path.resolve(ROOT, "docs/packages/components-next/components"), dir, "examples");
    const docsV1DemosDir = path.join(path.resolve(ROOT, "docs/packages/components-v1/component-demos"), dir);
    const all: string[] = [];
    function walkVue(d: string) {
      if (!fs.existsSync(d)) return;
      for (const entry of fs.readdirSync(d)) {
        const full = path.join(d, entry);
        if (fs.statSync(full).isDirectory()) walkVue(full);
        else if (/\.vue$/i.test(entry)) all.push(full);
      }
    }
    walkVue(componentDir);
    walkVue(docsExamplesDir);
    walkVue(docsV1DemosDir);
    const demoFiles = all.filter(f => /(?:^|[\\\/])demo\.vue$/i.test(f) ||
      /\.demo\.vue$/i.test(f) || /\.story\.vue$/i.test(f) || /Demo\.vue$/i.test(f));
    if (demoFiles.length === 0) return { content: [{ type: "text", text: `No demo/example files found for ${component}` }] } as any;
    const results = demoFiles.map(f => ({ type: "text", text: `# ${f}\n\n${tryReadFile(f) ?? ""}` }));
    return { content: results } as any;
  }
);

// Log recommended MCP client config on startup
const recommendedConfig = {
  mcpServers: {
    "vue-core": {
      command: "pnpm",
      args: ["start"],
      cwd: ROOT // always monorepo root
    }
  }
};
console.log("\n=== MCP Client Config Example ===\nCopy this into your MCP-aware client config (e.g. Claude Desktop):\n");
console.log(JSON.stringify(recommendedConfig, null, 2));
console.log("\n===============================\n");

const transport = new StdioServerTransport();
server.connect(transport);

const app = express();
const HTTP_PORT = process.env.MCP_HTTP_PORT || 3000;
app.use(express.json());
app.get("/health", (_req, res) => res.json({ ok: true }));
app.listen(HTTP_PORT, () => console.log(`MCP server running on port ${HTTP_PORT}`));
