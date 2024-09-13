import { HttpsProxyAgent } from 'https-proxy-agent'
import fetch from 'node-fetch'
import * as z from 'zod'

import { baseUrl } from './staticVariables'

const agent = process.env.https_proxy === null
  ? new HttpsProxyAgent(process.env.https_proxy)
  : undefined

export const fileTypeSchema = z.enum([
  'components',
  'composables',
  'utils',
  'icons',
  'config',
  'root',
  'styles',
  'libs',
  'root',
  'types',
])

export const fileSchema = z.object({
  name: z.string(),
  content: z.string(),
  dir: z.string(),
  localPath: z.string().optional(),
  type: fileTypeSchema,
})

const componentSchema = z.object({
  dependencies: z.array(z.string()).optional(),
  files: z.array(fileSchema),
  internalDependencies: z.array(z.string()).optional(),
  component: z.string(),
})

export type Component = z.infer<typeof componentSchema>
export type FileType = z.infer<typeof fileTypeSchema>
const componentsSchema = z.array(componentSchema)

export async function getAvailableComponents() {
  try {
    const response = await fetch(`${baseUrl}/components.json`, { agent })
    const components = await response.json()

    return componentsSchema.parse(components)
  }
  catch {
    throw new Error(
      `Failed to fetch components from ${baseUrl}/components.json.`,
    )
  }
}

export async function getGlobalConfig() {
  try {
    const response = await fetch(`${baseUrl}/globalConfig.json`, { agent })

    const components = await response.json()

    return componentsSchema.parse(components)
  }
  catch {
    throw new Error(
      `Failed to fetch config from ${baseUrl}/globalConfig.json.`,
    )
  }
}

export async function getGlobalComponents() {
  try {
    const response = await fetch(`${baseUrl}/globalComponents.json`, { agent })
    const components = await response.json()

    return componentsSchema.parse(components)
  }
  catch {
    throw new Error(
      `Failed to fetch components from ${baseUrl}/globalComponents.json.`,
    )
  }
}
