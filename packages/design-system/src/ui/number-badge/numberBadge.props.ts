export type NumberBadgeColor = 'blue' | 'brand' | 'error' | 'gray' | 'pink' | 'pink' | 'purple' | 'success' | 'warning'

export interface NumberBadgeProps {
  ariaLabel?: string | null
  color?: NumberBadgeColor
  size?: 'lg' | 'md' | 'sm'
  value: number
  variant?: 'outline' | 'solid' | 'translucent'
}
