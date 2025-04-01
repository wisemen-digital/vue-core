<script setup lang="ts">
import { TimeFieldInput as RekaTimeFieldInput } from 'reka-ui'

import type { DateFieldSegment } from '@/components/date-field/dateField.type'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import { useInjectTimeFieldContext } from '@/components/time-field/timeField.context'
import { mergeClasses } from '@/customClassVariants'

const props = defineProps<{
  segments: DateFieldSegment[]
}>()

const {
  id,
  testId,
  classConfig,
  customClassConfig,
  style,
  onBlur,
  onFocus,
} = useInjectTimeFieldContext()
</script>

<template>
  <PrimitiveElement
    :id="id"
    :test-id="testId"
  >
    <div
      :class="style.inputs({
        class: mergeClasses(customClassConfig.inputs, classConfig?.inputs),
      })"
    >
      <template
        v-for="item in props.segments"
        :key="item.part"
      >
        <RekaTimeFieldInput
          v-if="item.part === 'literal'"
          :part="item.part"
          :class="style.input({
            class: mergeClasses(customClassConfig.input, classConfig?.input),
          })"
        >
          {{ item.value }}
        </RekaTimeFieldInput>

        <RekaTimeFieldInput
          v-else
          :part="item.part"
          :class="style.input({
            class: mergeClasses(customClassConfig.input, classConfig?.input),
          })"
          @focus="onFocus"
          @blur="onBlur"
        >
          {{ item.value }}
        </RekaTimeFieldInput>
      </template>
    </div>
  </PrimitiveElement>
</template>
