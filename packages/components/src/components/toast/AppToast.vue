<script setup lang="ts">
import { toValue } from 'vue'

import type { Icon } from '../../icons/icons'
import type { ToastAction, ToastType } from '../../types/toast.type'
import AppUnstyledButton from '../button/AppUnstyledButton.vue'
import AppIcon from '../icon/AppIcon.vue'
import AppLoader from '../loader/AppLoader.vue'
import AppText from '../text/AppText.vue'

const props = withDefaults(defineProps<{
  action?: ToastAction | null
  description?: null | string
  icon: Icon
  title: string
  type: ToastType
}>(), {
  action: null,
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
  <div class="pointer-events-auto relative z-above-everything w-[22rem] rounded-popover border border-solid border-neutral-100 bg-popover p-4 shadow-toast-shadow">
    <div class="absolute right-0 top-0 -translate-y-1/3 translate-x-1/3">
      <button
        type="button"
        class="flex size-5 items-center justify-center rounded-full border border-solid border-neutral-100 bg-background p-1"
        @click.stop="onClose"
      >
        <AppIcon
          icon="close"
          size="full"
          class="text-muted-foreground"
        />
      </button>
    </div>

    <div class="flex shrink-0 items-start gap-x-4">
      <AppIcon
        :icon="props.icon"
        :class="{
          'text-destructive': props.type === 'error',
          'text-success': props.type === 'success',
          'text-primary': props.type === 'info',
        }"
        size="lg"
        class="mt-[3px]"
      />

      <div class="w-full pr-4">
        <div>
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

        <div
          v-if="props.action !== null"
          class="mt-4"
        >
          <AppLoader
            v-if="props.action.isLoading?.value ?? false"
            class="size-5 text-muted-foreground"
          />

          <AppUnstyledButton
            v-else
            class="h-5"
            @click="props.action.onClick(onClose)"
          >
            <AppText
              variant="subtext"
              as="span"
              class="font-medium text-muted-foreground"
            >
              {{ toValue(props.action.label) }}
            </AppText>
          </AppUnstyledButton>
        </div>
      </div>
    </div>
  </div>
</template>
