export interface Config {
  googleMapsApiKey?: string
}

// eslint-disable-next-line import/no-mutable-exports
export let globalConfig: Config = {}

export function defineConfig(config: Config): void {
  globalConfig = config
}
