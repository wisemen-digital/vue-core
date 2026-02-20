/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Generator from '@asyncapi/generator'

export async function generateAsyncAPIHTML (
  yaml: string,
  outputPath: string,
  fileName: string
): Promise<void> {
  const generator = new Generator(
    '@asyncapi/html-template',
    outputPath,
    {
      forceWrite: true,
      templateParams: {
        singleFile: true,
        outFilename: fileName
      }
    }
  )

  await generator.generateFromString(yaml, 'yaml')
}
