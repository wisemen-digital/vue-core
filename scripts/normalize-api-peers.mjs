import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const apiRoot = path.join(root, 'packages', 'api');
const workspacePath = path.join(root, 'pnpm-workspace.yaml');

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    let st;
    try {
      st = fs.lstatSync(p);
    }
    catch {
      continue;
    }

    if (st.isSymbolicLink()) {
      continue;
    }

    if (st.isDirectory()) {
      if (name === 'node_modules') {
        continue;
      }
      walk(p, out);
      continue;
    }

    if (name === 'package.json') {
      out.push(p);
    }
  }
  return out;
}

function minFromSpec(spec, backendVersion) {
  if (backendVersion) {
    return `>=${backendVersion.replace(/^>=/, '').replace(/^\^/, '').replace(/^~/, '')}`;
  }

  if (!spec || typeof spec !== 'string') {
    return '>=0.0.0';
  }

  const trimmed = spec.trim();
  if (trimmed.startsWith('>=')) {
    return trimmed;
  }

  const firstVersion = trimmed.match(/\d+\.\d+\.\d+/)?.[0];
  if (firstVersion) {
    return `>=${firstVersion}`;
  }

  return '>=0.0.0';
}

function parseCatalogBlock(yamlText, catalogName) {
  const lines = yamlText.split('\n');
  const start = lines.findIndex((line) => line === `  ${catalogName}:`);
  if (start === -1) return {};

  const out = {};
  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (line.startsWith('  ') && !line.startsWith('    ')) {
      break;
    }
    const match = line.match(/^    "([^"]+)":\s*"([^"]+)"\s*$/);
    if (match) {
      out[match[1]] = match[2];
    }
  }

  return out;
}

function upsertBackendPeer(yamlText, additions) {
  const lines = yamlText.split('\n');
  const catalogIdx = lines.findIndex((line) => line === 'catalogs:');
  if (catalogIdx === -1) {
    throw new Error('Could not find catalogs: in pnpm-workspace.yaml');
  }

  let start = lines.findIndex((line) => line === '  backend-peer:');
  if (start === -1) {
    let backendEnd = lines.length;
    const backendStart = lines.findIndex((line) => line === '  backend:');
    if (backendStart !== -1) {
      backendEnd = lines.length;
      for (let i = backendStart + 1; i < lines.length; i += 1) {
        if (lines[i].startsWith('  ') && !lines[i].startsWith('    ')) {
          backendEnd = i;
          break;
        }
      }
    }

    const newBlock = ['  backend-peer:'];
    for (const [k, v] of Object.entries(additions)) {
      newBlock.push(`    "${k}": "${v}"`);
    }

    const insertAt = backendEnd;
    lines.splice(insertAt, 0, ...newBlock);
    return `${lines.join('\n').replace(/\n+$/,'')}\n`;
  }

  let end = lines.length;
  for (let i = start + 1; i < lines.length; i += 1) {
    if (lines[i].startsWith('  ') && !lines[i].startsWith('    ')) {
      end = i;
      break;
    }
  }

  const existing = parseCatalogBlock(yamlText, 'backend-peer');
  for (const [k, v] of Object.entries(additions)) {
    existing[k] = v;
  }

  const sortedEntries = Object.entries(existing).sort((a, b) => a[0].localeCompare(b[0]));
  const newBlock = ['  backend-peer:', ...sortedEntries.map(([k, v]) => `    "${k}": "${v}"`)];

  lines.splice(start, end - start, ...newBlock);
  return `${lines.join('\n').replace(/\n+$/, '')}\n`;
}

const wsRaw = fs.readFileSync(workspacePath, 'utf8');
const backendCatalog = parseCatalogBlock(wsRaw, 'backend');
const backendPeerCatalog = parseCatalogBlock(wsRaw, 'backend-peer');

const report = {
  changedFiles: [],
  movedInternalCount: 0,
  removedDevCount: 0,
  optionalPeersKept: {},
  backendPeerAdditions: {},
};

const isInternal = (name) => name.startsWith('@wisemen/') || name.startsWith('@appwise/');
const nonOptionalExternalSpecs = new Map();

for (const file of walk(apiRoot).sort()) {
  const raw = fs.readFileSync(file, 'utf8');
  const pkg = JSON.parse(raw);

  const deps = pkg.dependencies ? { ...pkg.dependencies } : {};
  const devDeps = pkg.devDependencies ? { ...pkg.devDependencies } : {};
  const peers = pkg.peerDependencies ? { ...pkg.peerDependencies } : {};
  const peerMeta = pkg.peerDependenciesMeta ? { ...pkg.peerDependenciesMeta } : {};

  let changed = false;

  for (const [name, spec] of Object.entries(peers)) {
    if (isInternal(name)) {
      deps[name] = spec;
      delete peers[name];
      report.movedInternalCount += 1;
      changed = true;

      if (name in devDeps) {
        delete devDeps[name];
        report.removedDevCount += 1;
      }

      continue;
    }

    const optional = Boolean(peerMeta[name] && peerMeta[name].optional === true);
    if (optional) {
      const rel = path.relative(root, file);
      if (!report.optionalPeersKept[rel]) report.optionalPeersKept[rel] = [];
      report.optionalPeersKept[rel].push(name);
      continue;
    }

    nonOptionalExternalSpecs.set(name, spec);

    if (peers[name] !== 'catalog:backend-peer') {
      peers[name] = 'catalog:backend-peer';
      changed = true;
    }
  }

  // Cleanup pass: if an internal dependency exists in runtime deps, keep it there only.
  for (const name of Object.keys(devDeps)) {
    if (isInternal(name) && name in deps) {
      delete devDeps[name];
      report.removedDevCount += 1;
      changed = true;
    }
  }

  if (Object.keys(deps).length) pkg.dependencies = deps;
  else delete pkg.dependencies;

  if (Object.keys(devDeps).length) pkg.devDependencies = devDeps;
  else delete pkg.devDependencies;

  if (Object.keys(peers).length) pkg.peerDependencies = peers;
  else delete pkg.peerDependencies;

  const next = `${JSON.stringify(pkg, null, 2)}\n`;
  if (next !== raw) {
    fs.writeFileSync(file, next, 'utf8');
    report.changedFiles.push(path.relative(root, file));
  }
}

for (const [name, spec] of nonOptionalExternalSpecs.entries()) {
  if (backendPeerCatalog[name]) {
    continue;
  }

  let backendVersion;
  if (spec.startsWith('catalog:')) {
    const sourceCatalog = spec.slice('catalog:'.length);
    if (sourceCatalog === 'backend') {
      backendVersion = backendCatalog[name];
    }
  }
  else {
    backendVersion = backendCatalog[name];
  }

  report.backendPeerAdditions[name] = minFromSpec(spec, backendVersion);
}

const updatedWorkspace = upsertBackendPeer(wsRaw, report.backendPeerAdditions);
if (updatedWorkspace !== wsRaw) {
  fs.writeFileSync(workspacePath, updatedWorkspace, 'utf8');
}

const reportPath = path.join(root, '.tmp-api-peer-report.json');
fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

console.log(`Changed package.json files: ${report.changedFiles.length}`);
console.log(`Moved internal peers: ${report.movedInternalCount}`);
console.log(`Removed moved deps from devDependencies: ${report.removedDevCount}`);
console.log(`backend-peer additions: ${Object.keys(report.backendPeerAdditions).length}`);
console.log(`Report written: ${reportPath}`);
