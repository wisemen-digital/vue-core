export function getFileAndDirectoryFromPath(path: string) {
  const splitPath = path.split('/')

  if (splitPath.length === 1) {
    return { directory: '.', fileName: path }
  }
  const fileName = splitPath[splitPath.length - 1]
  const directory = splitPath.slice(0, splitPath.length - 1).join('/')

  return { directory, fileName }
}
