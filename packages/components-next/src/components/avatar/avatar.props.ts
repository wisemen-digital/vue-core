import type { GetComponentPropCustomValues } from '@/customClassVariants'
import type {
  CustomizableElement,
  TestId,
} from '@/utils/props.util'

export interface AvatarProps extends TestId, CustomizableElement<'avatar'> {
  /**
   * The name of the user or entity represented by the avatar.
   * This is used for accessibility and as a fallback if no image is provided.
   */
  name: string
  /**
   * The URL of the image to be displayed as the avatar.
   * @default null
   */
  src?: string | null
  /**
   *
   */
  variant?: GetComponentPropCustomValues<'avatar', 'variant'> | null
}
