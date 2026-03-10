<script setup lang="ts">
import { PlusIcon } from '@wisemen/vue-core-icons'
import { computed } from 'vue'

import type { AvatarGroupAddButtonProps } from '@/ui/avatar/avatar-group/avatarGroupAddButton.props'
import { AVATAR_GROUP_ADD_BUTTON_DEFAULTS } from '@/ui/avatar/avatar-group/avatarGroupAddButton.props'
import type { AvatarGroupAddButtonStyle } from '@/ui/avatar/avatar-group/avatarGroupAddButton.style'
import { createAvatarGroupAddButtonStyle } from '@/ui/avatar/avatar-group/avatarGroupAddButton.style'
import ClickableElement from '@/ui/clickable-element/ClickableElement.vue'

const props = withDefaults(defineProps<AvatarGroupAddButtonProps>(), {
  ...AVATAR_GROUP_ADD_BUTTON_DEFAULTS,
})

const emit = defineEmits<{
  click: []
}>()

const avatarGroupAddButtonStyle = computed<AvatarGroupAddButtonStyle>(
  () => createAvatarGroupAddButtonStyle({
    size: props.size,
  }),
)

function onClick(): void {
  emit('click')
}
</script>

<template>
  <ClickableElement>
    <button
      :class="avatarGroupAddButtonStyle.root()"
      type="button"
      @click="onClick"
    >
      <PlusIcon :class="avatarGroupAddButtonStyle.icon()" />
    </button>
  </ClickableElement>
</template>
