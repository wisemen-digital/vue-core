<script setup lang="ts">
import { RadioGroupItem as RekaRadioGroupItem } from 'reka-ui'
import { computed } from 'vue'

import ColumnLayout from '@/ui/column-layout/ColumnLayout.vue'
import { useProvideRadioGroupItemContext } from '@/ui/radio-group/base/baseRadioGroup.context'
import type { BaseRadioGroupItemProps } from '@/ui/radio-group/base/baseRadioGroup.props'
import type { BaseRadioGroupStyle } from '@/ui/radio-group/base/baseRadioGroup.style'
import { createBaseRadioGroupStyle } from '@/ui/radio-group/base/baseRadioGroup.style'
import RadioGroupIndicator from '@/ui/radio-group/RadioGroupIndicator.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import { UIText } from '@/ui/text/index'

const props = withDefaults(defineProps<BaseRadioGroupItemProps>(), {
  isDisabled: false,
  description: null,
})

const emit = defineEmits<{
  blur: []
  focus: []
}>()

const radioGroupStyle = computed<BaseRadioGroupStyle>(() => createBaseRadioGroupStyle())

useProvideRadioGroupItemContext({
  radioGroupStyle,
})
</script>

<template>
  <RekaRadioGroupItem
    :disabled="props.isDisabled"
    :value="props.value"
    :class="radioGroupStyle.root()"
    class="gap-x-sm"
    @blur="emit('blur')"
    @focus="emit('focus')"
  >
    <RowLayout
      align="start"
    >
      <div :class="radioGroupStyle.control()">
        <RadioGroupIndicator />
      </div>

      <ColumnLayout
        gap="none"
      >
        <UIText
          :text="props.label"
          class="text-xs font-medium text-primary"
        />

        <UIText
          v-if="props.description"
          :text="props.description"
          class="text-xs text-tertiary"
        />
      </ColumnLayout>
    </RowLayout>
  </RekaRadioGroupItem>
</template>
