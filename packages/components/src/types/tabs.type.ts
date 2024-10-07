export interface TabItem<TMeta = never> {
  id: string
  testId?: string
  isDisabled?: boolean
  label: string
  meta?: TMeta
}
