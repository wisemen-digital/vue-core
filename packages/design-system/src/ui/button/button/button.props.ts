import type { Component } from 'vue'

export interface ButtonProps {
  /**
   * Disables the button, preventing user interaction.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Shows a loading state and disables interaction.
   * @default false
   */
  isLoading?: boolean
  /**
   * Provides a reason why the button is disabled,
   * when provided a tooltip will be shown on hover with the provided text.
   * @default null
   */
  disabledReason?: string | null
  /**
   * The form ID the button is associated with.
   * @default null
   */
  form?: string | null
  /**
   * Icon displayed before the button label.
   * @default null
   */
  iconLeft?: Component | null
  /**
   * Icon displayed after the button label.
   * @default null
   */
  iconRight?: Component | null
  /**
   * Visual representation of a keyboard shortcut (e.g. "⌘K", "Ctrl+S").
   *
   * This is purely presentational and does not implement or bind
   * any keyboard shortcut behavior.
   *
   * @default null
   */
  keyboardShortcut?: string | null
  /**
   * Text label displayed inside the button.
   */
  label: string
  /**
   * Controls the button size.
   * @default 'md'
   */
  size?: 'lg' | 'md' | 'sm' | 'xs'
  /**
   * Tooltip text shown on hover or focus.
   * @default null
   */
  tooltipLabel?: string | null
  /**
   * Position of the tooltip relative to the button.
   * @default 'top'
   */
  tooltipSide?: 'bottom' | 'left' | 'right' | 'top'
  /**
   * Native button type attribute.
   *
   * @default 'button'
   */
  type?: 'button' | 'reset' | 'submit'
  /**
   * Visual style variant of the button.
   * @default 'primary'
   */
  variant?: 'destructive-primary' | 'destructive-tertiary' | 'minimal-color' | 'primary' | 'secondary' | 'tertiary'
}
