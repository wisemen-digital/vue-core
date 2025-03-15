import type { ButtonProps } from '@/packages/@next/button/shared/button.props'
import type { Routes } from '@/types'

export interface RouterLinkButtonProps extends Omit<ButtonProps, 'isDisabled' | 'isLoading'> {
  /**
   * The route to navigate to when the button is clicked.
   */
  // @ts-expect-error no matching signature
  to: Routes[number]
}
