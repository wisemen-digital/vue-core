export interface AvatarGroupAddButtonProps {
  /**
   * The size of the add button. Should match the avatar group size.
   * @default 'sm'
   */
  size?: 'md' | 'sm' | 'xs'
}

export const AVATAR_GROUP_ADD_BUTTON_DEFAULTS: AvatarGroupAddButtonProps = {
  size: 'sm',
}
