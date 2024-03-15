<script setup lang="ts">
import type { Icon } from '@/icons/icons'

import AppIcon from '../icon/AppIcon.vue'
import AppText from '../text/AppText.vue'

const props = withDefaults(defineProps<{
  description?: null | string
  icon: Icon
  title: string
}>(), {
  description: null,
})

const emit = defineEmits<{
  closeToast: []
}>()

function onClose(): void {
  emit('closeToast')
}
</script>

<template>
  <div class="relative w-80 rounded-popover border border-solid border-neutral-100 bg-popover p-4 shadow-toast-shadow">
    <div class="absolute right-0 top-0 -translate-y-1/3 translate-x-1/3">
      <button
        type="button"
        class="flex size-5 items-center justify-center rounded-full border border-solid border-neutral-100 bg-background p-1"
        @click="onClose"
      >
        <AppIcon
          icon="close"
          size="full"
          class="text-muted-foreground"
        />
      </button>
    </div>

    <div class="flex items-start gap-x-4">
      <div class="mt-1 line-clamp-2  flex size-4 shrink-0 items-center justify-center rounded-full bg-foreground">
        <AppIcon
          :icon="props.icon"
          size="sm"
          class="p-px text-background"
        />
      </div>

      <div class="pr-4">
        <AppText
          variant="body"
          class="font-medium"
        >
          {{ props.title }}
        </AppText>

        <AppText
          v-if="props.description !== null"
          variant="subtext"
          class="mt-1"
        >
          {{ props.description }}
        </AppText>
      </div>
    </div>
  </div>
</template>
