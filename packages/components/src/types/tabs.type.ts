import type { RouteLocationNamedRaw } from 'vue-router'

type BaseTabItem<TMeta = undefined> = {
  testId?: string
  label: string
} & (TMeta extends undefined ? object : { meta: TMeta })

export type TabItem<TMeta = undefined> = BaseTabItem<TMeta> & {
  isDisabled?: boolean
  value: string
}

export type RouteTabItem<TMeta = undefined> = BaseTabItem<TMeta> & {
  to: RouteLocationNamedRaw
}
