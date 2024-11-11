import type { ComponentStyleConfigRegistry } from '@/types/style.type'

export interface Stylable<TComponent extends keyof ComponentStyleConfigRegistry> {
  /**
   * The style config of the component.
   * @default null
   */
  styleConfig?: Partial<ComponentStyleConfigRegistry[TComponent]> | null
}
