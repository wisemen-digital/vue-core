export type NumberBadgeColor = 'blue' | 'brand' | 'error' | 'gray' | 'pink' | 'pink' | 'purple' | 'success' | 'warning'

export interface NumberBadgeProps {
  ariaLabel?: string | null
  color?: NumberBadgeColor
  size?: 'lg' | 'md' | 'sm'
  /*
    * The number to display inside the badge. always use a formatted string here (e.g. 1.400, 4,5)
  */
  value: string
  variant?: 'outline' | 'solid' | 'translucent'
}
