export interface Config {
  googleMapsApiKey?: string
}

let globalConfig: Config = {}

export function getGlobalConfig<TKey extends keyof Config>(key: TKey): NonNullable<Config[TKey]> | null {
  return globalConfig[key] as Config[TKey] ?? null
}

export function defineConfig(config: Config): void {
  globalConfig = config
}
