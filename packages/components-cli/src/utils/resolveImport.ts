export function resolveImport(
  importPath: string,
  rootDirectory: string,
) {
  return importPath.replaceAll('@/', `${rootDirectory}/`)
}

export function unresolveImport(importPath: string, rootDirectory: string) {
  return importPath.replaceAll(`${rootDirectory}/`, '@/')
}
