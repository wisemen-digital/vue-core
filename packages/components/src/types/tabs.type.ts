import type { Routes } from '@/types/routes.type'

type BaseTabItem<TMeta = undefined> = {
  testId?: string
  label: string
} & (TMeta extends undefined ? object : TMeta)

export type TabItem<TMeta = undefined> = BaseTabItem<TMeta> & {
  isDisabled?: boolean
  value: string
}

export type RouteTabItem<TMeta = undefined> = BaseTabItem<TMeta> & {
  // @ts-expect-error no matching signature
  to: Routes[number]
}
