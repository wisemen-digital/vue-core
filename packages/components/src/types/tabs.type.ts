export type TabItem<TMeta = undefined> = {
  testId?: string
  isDisabled?: boolean
  label: string
  value: string
} & (TMeta extends undefined ? Record<string, never> : { meta: TMeta })
