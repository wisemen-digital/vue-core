<script setup lang="ts">
import { DateRangeFieldInput as RekaRangeDateFieldInput } from 'reka-ui'
import { computed } from 'vue'

import { mergeClasses } from '@/class-variant/customClassVariants'
import { useInjectConfigContext } from '@/components/config-provider/config.context'
import { useInjectDateRangeFieldContext } from '@/components/date-range-field/dateRangeField.context'
import type { DateRangeFieldSegment } from '@/components/date-range-field/dateRangeField.type'
import TestIdProvider from '@/components/shared/TestIdProvider.vue'
import { formatDateFieldSegments } from '@/utils/date-field-format/dateFieldFormat.util.ts'

const props = defineProps<{
  segments: DateRangeFieldSegment
}>()

const {
  testId,
  classConfig,
  customClassConfig,
  style,
  onBlur,
  onFocus,
} = useInjectDateRangeFieldContext()

const {
  dateFieldFormat,
} = useInjectConfigContext()

const formattedSegments = computed<DateRangeFieldSegment>(() => ({
  end: formatDateFieldSegments(props.segments.end, dateFieldFormat.value),
  start: formatDateFieldSegments(props.segments.start, dateFieldFormat.value),
}))
</script>

<template>
  <TestIdProvider :test-id="testId">
    <div
      :class="style.inputs({
        class: mergeClasses(customClassConfig.inputs, classConfig?.inputs),
      })"
    >
      <template
        v-for="item in formattedSegments.start"
        :key="item.part"
      >
        <RekaRangeDateFieldInput
          v-if="item.part === 'literal'"
          :part="item.part"
          :class="style.input({
            class: mergeClasses(customClassConfig.input, classConfig?.input),
          })"
          type="start"
        >
          {{ item.value }}
        </RekaRangeDateFieldInput>

        <RekaRangeDateFieldInput
          v-else
          :part="item.part"
          :class="style.input({
            class: mergeClasses(customClassConfig.input, classConfig?.input),
          })"
          type="start"
          @focus="onFocus"
          @blur="onBlur"
        >
          {{ item.value }}
        </RekaRangeDateFieldInput>
      </template>

      <span
        :class="style.separator({
          class: mergeClasses(customClassConfig.separator, classConfig?.separator),
        })"
      >
        -
      </span>

      <template
        v-for="item in formattedSegments.end"
        :key="item.part"
      >
        <RekaRangeDateFieldInput
          v-if="item.part === 'literal'"
          :part="item.part"
          :class="style.input({
            class: mergeClasses(customClassConfig.input, classConfig?.input),
          })"
          type="end"
        >
          {{ item.value }}
        </RekaRangeDateFieldInput>

        <RekaRangeDateFieldInput
          v-else
          :part="item.part"
          :class="style.input({
            class: mergeClasses(customClassConfig.input, classConfig?.input),
          })"
          type="end"
          @focus="onFocus"
          @blur="onBlur"
        >
          {{ item.value }}
        </RekaRangeDateFieldInput>
      </template>
    </div>
  </TestIdProvider>
</template>
