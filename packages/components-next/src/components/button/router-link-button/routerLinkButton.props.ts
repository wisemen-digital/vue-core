import type { TextButtonProps } from '@/components/button/shared/textButton.props'

export interface RouterLinkButtonProps extends Omit<TextButtonProps, 'isDisabled' | 'isLoading' | 'loadingLabel' | 'type'> {
  /**
   * The route to navigate to when the button is clicked.
   */
  // @ts-expect-error no matching signature
  to: Routes[number]
}
