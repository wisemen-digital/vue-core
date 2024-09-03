interface ResolveImportOptions {
  importPath: string
  rootAlias: string
  rootDirectory: string
}
export function resolveImport({
  importPath,
  rootAlias,
  rootDirectory,
}: ResolveImportOptions) {
  if (importPath.startsWith(rootAlias)) {
    return importPath.replaceAll(`${rootAlias}/`, `${rootDirectory}/`)
  }

  return `${rootDirectory}/${importPath}`
}

export function unresolveImport({
  importPath,
  rootAlias,
  rootDirectory,
}: ResolveImportOptions) {
  if (importPath.startsWith(rootDirectory)) {
    return importPath.replaceAll(`${rootDirectory}/`, `${rootAlias}/`)
  }

  return `${rootAlias}/${importPath}`
}
