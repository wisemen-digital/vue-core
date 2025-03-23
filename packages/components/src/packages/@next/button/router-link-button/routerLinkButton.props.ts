import type { TextButtonProps } from '@/packages/@next/button/shared/textButton.props'

export interface RouterLinkButtonProps extends Omit<TextButtonProps, 'isDisabled' | 'isLoading' | 'loadingLabel'> {
  /**
   * The route to navigate to when the button is clicked.
   */
  // @ts-expect-error no matching signature
  to: Routes[number]
}
