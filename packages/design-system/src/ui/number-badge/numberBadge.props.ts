export type NumberBadgeColor = 'brand' | 'error' | 'gray' | 'pink' | 'purple' | 'success' | 'warning'

export interface NumberBadgeProps {
  ariaLabel?: string | null
  color?: NumberBadgeColor
  size?: 'lg' | 'md' | 'sm'
  value: number
  variant?: 'outline' | 'solid' | 'translucent'
}
