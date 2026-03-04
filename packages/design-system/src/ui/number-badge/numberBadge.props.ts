export type NumberBadgeColor = 'blue-light' | 'brand' | 'error' | 'gray' | 'purple' | 'success' | 'warning'

export interface NumberBadgeProps {
  /**
   * Accessible label for screen readers. When null, the badge value is used.
   */
  ariaLabel?: string | null
  /**
   * The color of the badge.
   * @default 'gray'
   */
  color?: NumberBadgeColor
  /**
   * The size of the badge.
   * @default 'md'
   */
  size?: 'lg' | 'md' | 'sm'
  /**
   * The numeric value displayed in the badge.
   */
  value: number
  /**
   * The visual style variant of the badge.
   * @default 'translucent'
   */
  variant?: 'outline' | 'solid' | 'translucent'
}
