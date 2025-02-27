<script setup lang="ts">
import type { Format } from '@number-flow/vue'
// @ts-expect-error - Weird issue where the compiler whines about the continuous export not being found
import NumberFlow, { continuous } from '@number-flow/vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = withDefaults(defineProps<{
  /**
   * The format of the number
   * @default null
   */
  format?: Format | null
  /**
   * Defaults to `i18n.locale`
   * @default null
   */
  locale?: string | null
  /**
   * The prefix of the number
   * @default null
   */
  prefix?: string | null
  /**
   * The suffix of the number
   * @default null
   */
  suffix?: string | null
  value: number
}>(), {
  format: null,
  locale: null,
  prefix: null,
  suffix: null,
})

const i18n = useI18n()

const locale = computed<string>(() => props.locale ?? i18n.locale.value)
</script>

<template>
  <NumberFlow
    :value="value"
    :format="format ?? undefined"
    :locales="locale"
    :prefix="prefix ?? undefined"
    :suffix="suffix ?? undefined"
    :plugins="[continuous]"
  />
</template>
