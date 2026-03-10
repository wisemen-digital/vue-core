export type AvatarStatus = 'away' | 'busy' | 'offline' | 'online'

export interface AvatarProps {
  /**
   * The name used to generate fallback initials.
   */
  name: string
  logo?: string | null
  logoAlt?: string | null
  /**
   * The size of the avatar.
   * @default 'md'
   */
  size?: '2xl' | 'lg' | 'md' | 'sm' | 'xl' | 'xs'
  /**
   * The image source URL for the avatar.
   * Falls back to initials when not provided.
   * @default null
   */
  src?: string | null

  /**
   * The online status indicator shown at the bottom-right of the avatar.
   * @default null
   */
  status?: AvatarStatus | null
}

export const AVATAR_DEFAULTS: AvatarProps = {
  name: '',
  logo: null,
  logoAlt: null,
  size: 'md',
  src: null,
  status: null,
}
