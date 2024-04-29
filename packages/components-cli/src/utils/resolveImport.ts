export function resolveImport(
  importPath: string,
) {
  return importPath.replaceAll('@/', './src/')
}

export function unresolveImport(importPath: string) {
  return importPath.replaceAll('./src/', '@/')
}
