<script setup lang="ts">
import {
  DateRangePickerField,
  DateRangePickerInput,
  DateRangePickerTrigger,
} from 'radix-vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import { useComponentAttrs } from '@/composables/componentAttrs.composable'

const props = defineProps<{
  isDisabled?: boolean
  isInvalid?: boolean
}>()

const { classAttr } = useComponentAttrs()
</script>

<template>
  <DateRangePickerField
    v-slot="{ segments }"
    :class="[
      classAttr,
      {
        'border-input-border [&:has(:focus-visible)]:ring-ring': !props.isInvalid,
        'border-destructive [&:has(:focus-visible)]:border-input-border [&:has(:focus-visible)]:ring-destructive': props.isInvalid,
        'cursor-not-allowed opacity-50': props.isDisabled,
      },
    ]"
    class="relative flex h-10 w-full items-center rounded-input border border-solid bg-input pl-3 pr-1 text-sm text-input-foreground outline-none ring-offset-background duration-200 [&:has(:focus-visible)]:ring-2"
  >
    <template
      v-for="item in segments.start"
      :key="item.part"
    >
      <DateRangePickerInput
        v-if="item.part === 'literal'"
        :part="item.part"
        type="start"
      >
        {{ item.value }}
      </DateRangePickerInput>
      <DateRangePickerInput
        v-else
        :part="item.part"
        class="data-[placeholder]:text-green9 rounded-md p-0.5 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
        type="start"
      >
        {{ item.value }}
      </DateRangePickerInput>
    </template>
    <span class="mx-2">
      -
    </span>
    <template
      v-for="item in segments.end"
      :key="item.part"
    >
      <DateRangePickerInput
        v-if="item.part === 'literal'"
        :part="item.part"
        type="end"
      >
        {{ item.value }}
      </DateRangePickerInput>
      <DateRangePickerInput
        v-else
        :part="item.part"
        class="data-[placeholder]:text-green9 rounded-md p-0.5 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
        type="end"
      >
        {{ item.value }}
      </DateRangePickerInput>
    </template>

    <DateRangePickerTrigger class="ml-4 focus:shadow-[0_0_0_2px] focus:shadow-black">
      <AppIcon icon="calendar" />
    </DateRangePickerTrigger>
  </DateRangePickerField>
</template>
