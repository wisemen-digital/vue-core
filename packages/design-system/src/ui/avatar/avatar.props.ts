export interface AvatarProps {
  /**
   * The name used to generate fallback initials.
   */
  name: string
  /**
   * The image source URL for the avatar.
   * Falls back to initials when not provided.
   * @default null
   */
  src?: string | null
}
