import type { VariantProps } from 'tailwind-variants'

import { createTextButtonStyle } from '@/packages/@next/button/shared/textButton.style'

export const createRouterLinkButtonStyle = createTextButtonStyle

export type RouterLinkButtonStyle = VariantProps<typeof createRouterLinkButtonStyle>
export type CreateRouterLinkButtonStyle = ReturnType<typeof createRouterLinkButtonStyle>
