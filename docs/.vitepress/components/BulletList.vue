<script setup lang="ts">

import { VcIcon, VcThemeProvider } from '@wisemen/vue-core';
const props = defineProps<{
  items: {
    description: string
    variant: 'good' | 'bad'
    link?: {
      label: string
      href: string
    }
  }[]
}>()
</script>

<template>
 <VcThemeProvider theme="default">
    <ul class="!pl-0">
      <li v-for="item of props.items" :key:="item.description" class="text-sm flex items-center">
        <div
          :class="{
            'bg-success-primary dark:bg-success-secondary': item.variant === 'good',
            'bg-error-primary dark:bg-error-secondary': item.variant === 'bad',
          }" 
          class="mr-2 rounded-full p-1"
        >
          <VcIcon 
            v-if="item.variant === 'good'" 
            icon="check"
            class="size-3.5 text-success-primary"
          />
          
          <VcIcon 
            v-if="item.variant === 'bad'" 
            icon="close" 
            class="size-3.5 text-error-primary"
          />
        </div>

        <span>
          {{ item.description }}
        </span>

        <span v-if="item.link" class="ml-1">
          See
          <a :href="item.link.href">
            {{ item.link.label }}.
          </a>
        </span>
      </li>
    </ul>
 </VcThemeProvider>
</template>