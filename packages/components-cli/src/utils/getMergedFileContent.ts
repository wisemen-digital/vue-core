import { promises as fs } from 'node:fs'

import { execa } from 'execa'

export async function getMergedFileContent({
  localContent,
  registeryContent,
}: {
  localContent: string
  registeryContent: string
}) {
  await fs.writeFile('registeryFile', registeryContent, 'utf8')
  await fs.writeFile('localFile', localContent, 'utf8')
  await fs.writeFile('emptyFile', '', 'utf8')

  try {
    await execa('git', [
      'merge-file',
      'localFile',
      'emptyFile',
      'registeryFile',
    ])
  }
  catch {

  }

  const mergedFile = fs.readFile('localFile', 'utf8')

  await fs.rm('registeryFile')
  await fs.rm('localFile')
  await fs.rm('emptyFile')

  return mergedFile
}
