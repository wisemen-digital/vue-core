export type NumberBadgeColor = 'blue-light' | 'brand' | 'error' | 'gray' | 'purple' | 'success' | 'warning'

export interface NumberBadgeProps {
  ariaLabel?: string | null
  color?: NumberBadgeColor
  size?: 'lg' | 'md' | 'sm'
  value: number
  variant?: 'outline' | 'solid' | 'translucent'
}
