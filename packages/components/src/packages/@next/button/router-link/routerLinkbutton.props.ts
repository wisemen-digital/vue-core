import type { RouteLocationNamedRaw } from 'vue-router'

import type { ButtonProps } from '@/packages/@next/button/shared/button.props'

export interface RouterLinkButtonProps extends Omit<ButtonProps, 'isDisabled' | 'isLoading'> {
  /**
   * The route to navigate to when the button is clicked.
   */
  to: RouteLocationNamedRaw
}
