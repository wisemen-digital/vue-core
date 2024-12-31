<script setup lang="ts">
import {
  VcIcon,
  VcThemeProvider,
} from '@wisemen/vue-core'

const props = defineProps<{
  items: {
    description: string
    link?: {
      href: string
      label: string
    }
    variant: 'bad' | 'good'
  }[]
}>()
</script>

<template>
  <VcThemeProvider theme="default">
    <ul class="!pl-0">
      <li
        v-for="item of props.items"
        :key="item.description"
        class="text-sm list-none"
      >
        <div
          :class="{
            'bg-success-primary dark:bg-success-900 text-success-primary dark:text-success-200': item.variant === 'good',
            'bg-error-primary dark:bg-error-900 text-error-primary dark:text-error-200': item.variant === 'bad',
          }"
          class="mr-2 rounded-full p-1 inline-block translate-y-1.5"
        >
          <VcIcon
            v-if="item.variant === 'good'"
            icon="check"
            class="size-3.5"
          />

          <VcIcon
            v-if="item.variant === 'bad'"
            icon="close"
            class="size-3.5"
          />
        </div>

        {{ item.description }}

        <span
          v-if="item.link"
          class="ml-1"
        >
          See
          <a :href="item.link.href">
            {{ item.link.label }}.
          </a>
        </span>
      </li>
    </ul>
  </VcThemeProvider>
</template>
