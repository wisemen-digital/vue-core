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
  'transitions',
  'config',
  'styles',
  'types',
])
const componentSchema = z.object({
  component: z.string(),
  dependencies: z.array(z.string()).optional(),
  files: z.array(
    z.object({
      content: z.string(),
      dir: z.string(),
      name: z.string(),
      placementDir: z.string(),
      type: fileTypeSchema,
    }),
  ),
  internalDependencies: z.array(z.string()).optional(),
  name: z.string(),
})

export type Component = z.infer<typeof componentSchema>
export type FileType = z.infer<typeof fileTypeSchema>
const componentsSchema = z.array(componentSchema)

export async function getAvailableComponents() {
  try {
    const response = await fetch(`${baseUrl}/api/components.json`, { agent })
    const components = await response.json()

    return componentsSchema.parse(components)
  }
  catch (error) {
    throw new Error(
      `Failed to fetch components from ${baseUrl}/api/components.json.`,
    )
  }
}

export async function getGlobalConfig() {
  try {
    const response = await fetch(`${baseUrl}/api/globalConfig.json`, { agent })

    const components = await response.json()
    return componentsSchema.parse(components)
  }
  catch (error) {
    throw new Error(
      `Failed to fetch config from ${baseUrl}/api/globalConfig.json.`,
    )
  }
}

export async function getGlobalComponents() {
  try {
    const response = await fetch(`${baseUrl}/api/globalComponents.json`, { agent })
    const components = await response.json()

    return componentsSchema.parse(components)
  }
  catch (error) {
    throw new Error(
      `Failed to fetch components from ${baseUrl}/api/globalComponents.json.`,
    )
  }
}
