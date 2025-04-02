<script setup lang="ts">
import { AvatarRoot as RekavaAvatarRoot } from 'reka-ui'
import { computed } from 'vue'

import { useProvideAvatarContext } from '@/components/avatar/avatar.context'
import type { AvatarProps } from '@/components/avatar/avatar.props'
import type { CreateAvatarStyle } from '@/components/avatar/avatar.style'
import { createAvatarStyle } from '@/components/avatar/avatar.style'
import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<AvatarProps>(), {
  id: null,
  testId: null,
  src: null,
})

const avatarStyle = computed<CreateAvatarStyle>(
  () => createAvatarStyle({ variant: props.variant ?? undefined }),
)

const customClassConfig = useComponentClassConfig('avatar', { variant: props.variant ?? undefined })

useProvideAvatarContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: avatarStyle,
})
</script>

<template>
  <RekavaAvatarRoot
    :class="avatarStyle.root({
      class: mergeClasses(customClassConfig.root, props.classConfig?.root),
    })"
  >
    <slot />
  </RekavaAvatarRoot>
</template>
