import type { Icon } from '@/icons/icons'
import type { PublicProps } from '@/types/props.type'

export interface IconProps {
  /**
   * The icon to display
   */
  icon: Icon
}

export type IconPublicProps = PublicProps<IconProps>
