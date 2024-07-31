<script setup lang="ts">
import { AppDialog, AppText } from '@wisemen/vue-core'

const props = defineProps<{
  title: string
  animateFromTrigger?: boolean
  hideCloseButton?: boolean
  shouldPreventClickOutside?: boolean
}>()
</script>

<template>
  <AppDialog
    :animate-from-trigger="props.animateFromTrigger"
    :hide-close-button="props.hideCloseButton"
    :should-prevent-click-outside="props.shouldPreventClickOutside"
  >
    <div class="p-40">
      <AppText variant="title">
        {{ props.title }}
      </AppText>
    </div>
  </AppDialog>
</template>
