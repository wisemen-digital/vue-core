import type { Component } from 'vue'

export type BadgeColor = 'brand' | 'error' | 'gray' | 'pink' | 'purple' | 'success' | 'warning'

export interface BadgeProps {
  hasDot?: boolean
  ariaLabel?: string | null
  color?: BadgeColor
  dotColor?: BadgeColor | null
  icon?: Component | null
  label?: string | null
  rounded?: 'default' | 'full'
  size?: 'lg' | 'md' | 'sm'
  variant?: 'outline' | 'solid' | 'translucent'
}
