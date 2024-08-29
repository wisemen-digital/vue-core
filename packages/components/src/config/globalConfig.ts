export interface Config {
  googleMapsApiKey?: string
}

let globalConfig: Config = {}

export function getGlobalConfig(key: keyof Config): null | string {
  return globalConfig[key] ?? null
}

export function defineConfig(config: Config): void {
  globalConfig = config
}
