import type { CallToolResult, ListResourcesResult, ReadResourceResult } from '@modelcontextprotocol/sdk/types.js'
import { promises as fs } from 'node:fs'
import { join } from 'node:path'
import {
  getComponentDocumentation,
  getDocumentationFile,
  getPackageDocumentation,
  listComponentDocs,
} from '../lib/documentation.js'
import { getGitDiff, getGitLog, getGitStatus } from '../lib/git.js'
import { getPackages, listFiles, readFile } from '../lib/packages.js'
import { listMarkdownFiles, searchDocumentation, searchFiles } from '../lib/search.js'

/**
 * Handle tool call requests
 */
export async function handleToolCall(name: string, args: Record<string, unknown> | undefined): Promise<CallToolResult> {
  try {
    switch (name) {
      case 'list_packages': {
        const packages = await getPackages()
        const packageList = packages.map((p) => {
          let info = `${p.name} (${p.path})`
          if (p.docsPath) {
            info += ` [has docs]`
          }
          return info
        }).join('\n')

        return {
          content: [
            {
              type: 'text',
              text: packageList,
            },
          ],
        }
      }

      case 'get_package_documentation': {
        const packageName = args?.package as string
        const docs = await getPackageDocumentation(packageName)

        return {
          content: [
            {
              type: 'text',
              text: docs,
            },
          ],
        }
      }

      case 'list_component_docs': {
        const packageName = args?.package as string
        const components = await listComponentDocs(packageName)

        if (components.length === 0) {
          return {
            content: [
              {
                type: 'text',
                text: `No component documentation found for package "${packageName}"`,
              },
            ],
          }
        }

        return {
          content: [
            {
              type: 'text',
              text: `Available components in ${packageName}:\n\n${components.map(c => `- ${c}`).join('\n')}`,
            },
          ],
        }
      }

      case 'get_component_documentation': {
        const packageName = args?.package as string
        const componentName = args?.component as string
        const docs = await getComponentDocumentation(packageName, componentName)

        return {
          content: [
            {
              type: 'text',
              text: docs,
            },
          ],
        }
      }

      case 'get_documentation_file': {
        const packageName = args?.package as string
        const filePath = args?.file as string
        const content = await getDocumentationFile(packageName, filePath)

        return {
          content: [
            {
              type: 'text',
              text: content,
            },
          ],
        }
      }

      case 'search_documentation': {
        const packageName = args?.package as string
        const query = args?.query as string
        const results = await searchDocumentation(packageName, query)

        return {
          content: [
            {
              type: 'text',
              text: results.join('\n\n'),
            },
          ],
        }
      }

      case 'list_files': {
        const packageName = args?.package as string
        const packages = await getPackages()
        const pkg = packages.find(p => p.name === packageName)

        if (!pkg) {
          throw new Error(`Package "${packageName}" not found`)
        }

        const files = await listFiles(pkg.path)
        return {
          content: [
            {
              type: 'text',
              text: files.join('\n'),
            },
          ],
        }
      }

      case 'read_file': {
        const packageName = args?.package as string
        const filePath = args?.file as string
        const content = await readFile(packageName, filePath)

        return {
          content: [
            {
              type: 'text',
              text: content,
            },
          ],
        }
      }

      case 'search_code': {
        const packageName = args?.package as string
        const query = args?.query as string
        const results = await searchFiles(packageName, query)

        return {
          content: [
            {
              type: 'text',
              text: results.length > 0 ? results.join('\n\n') : 'No results found',
            },
          ],
        }
      }

      case 'git_log': {
        const packageName = args?.package as string
        const maxCount = (args?.max_count as number) || 10
        const log = await getGitLog(packageName, maxCount)

        return {
          content: [
            {
              type: 'text',
              text: log,
            },
          ],
        }
      }

      case 'git_diff': {
        const packageName = args?.package as string
        const ref1 = args?.ref1 as string | undefined
        const ref2 = args?.ref2 as string | undefined
        const diff = await getGitDiff(packageName, ref1, ref2)

        return {
          content: [
            {
              type: 'text',
              text: diff || 'No differences',
            },
          ],
        }
      }

      case 'git_status': {
        const packageName = args?.package as string
        const status = await getGitStatus(packageName)

        return {
          content: [
            {
              type: 'text',
              text: status,
            },
          ],
        }
      }

      default:
        throw new Error(`Unknown tool: ${name}`)
    }
  }
  catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    return {
      content: [
        {
          type: 'text',
          text: `Error: ${errorMessage}`,
        },
      ],
      isError: true,
    }
  }
}

/**
 * Handle list resources request
 */
export async function handleListResources(): Promise<ListResourcesResult> {
  const packages = await getPackages()

  return {
    resources: packages.map(pkg => ({
      uri: `package://${pkg.name}`,
      name: pkg.name,
      description: `Package: ${pkg.name}`,
      mimeType: 'application/json',
    })),
  }
}

/**
 * Handle read resource request
 */
export async function handleReadResource(uri: string): Promise<ReadResourceResult> {
  const match = uri.match(/^package:\/\/(.+)$/)

  if (!match) {
    throw new Error(`Invalid resource URI: ${uri}`)
  }

  const packageName = match[1]
  const packages = await getPackages()
  const pkg = packages.find(p => p.name === packageName)

  if (!pkg) {
    throw new Error(`Package "${packageName}" not found`)
  }

  // Read package.json
  const packageJson = JSON.parse(
    await fs.readFile(join(pkg.path, 'package.json'), 'utf-8'),
  )

  // List files
  const files = await listFiles(pkg.path)

  // Get documentation info
  let docFiles: string[] = []
  let componentDocs: string[] = []

  if (pkg.docsPath) {
    try {
      docFiles = await listMarkdownFiles(pkg.docsPath)
      componentDocs = await listComponentDocs(packageName)
    }
    catch {
      // Docs not accessible
    }
  }

  return {
    contents: [
      {
        uri,
        mimeType: 'application/json',
        text: JSON.stringify({
          name: pkg.name,
          path: pkg.path,
          docsPath: pkg.docsPath,
          packageJson,
          files: files.slice(0, 100), // Limit to first 100 files
          documentation: {
            hasDocumentation: !!pkg.docsPath,
            docFiles: docFiles.slice(0, 50), // Limit to first 50 doc files
            components: componentDocs,
          },
        }, null, 2),
      },
    ],
  }
}
