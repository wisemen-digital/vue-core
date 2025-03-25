<script setup lang="ts" generic="TValue extends SelectValueType">
import { useId } from 'vue'

import FormField from '@/packages/@next/form-field/FormField.vue'
import SelectBase from '@/packages/@next/select/parts/SelectBase.vue'
import SelectContent from '@/packages/@next/select/parts/SelectContent.vue'
import SelectDropdownSearchInput from '@/packages/@next/select/parts/SelectDropdownSearchInput.vue'
import SelectEmpty from '@/packages/@next/select/parts/SelectEmpty.vue'
import SelectIconLeft from '@/packages/@next/select/parts/SelectIconLeft.vue'
import SelectIconRight from '@/packages/@next/select/parts/SelectIconRight.vue'
import SelectLoader from '@/packages/@next/select/parts/SelectLoader.vue'
import SelectPopover from '@/packages/@next/select/parts/SelectPopover.vue'
import SelectRoot from '@/packages/@next/select/parts/SelectRoot.vue'
import SelectVirtualList from '@/packages/@next/select/parts/SelectVirtualList.vue'
import type { SelectEmits } from '@/packages/@next/select/select.emits'
import type { SelectProps, SelectValue as SelectValueType } from '@/packages/@next/select/select.props'
import type { FormElement } from '@/utils/props.util'

const props = withDefaults(defineProps<SelectProps<TValue> & FormElement>(), {
  // Vue automatically defaults boolean props to false, even if no value is provided
  remainOpenOnValueChange: null,
})

const emit = defineEmits<SelectEmits>()

const modelValue = defineModel<TValue>({
  required: true,
})

const searchTerm = defineModel<string>('searchTerm', {
  required: false,
})

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
  required: false,
})

const id = props.id ?? useId()
</script>

<template>
  <FormField
    :errors="props.errors"
    :hint="props.hint"
    :is-required="props.isRequired"
    :is-touched="props.isTouched"
    :label="props.label"
    :for="id"
  >
    <SelectRoot
      v-bind="props"
      :id="id"
      v-model="modelValue"
      v-model:search-term="searchTerm"
      v-model:is-open="isOpen"
      @blur="emit('blur')"
      @focus="emit('focus')"
    >
      <SelectPopover>
        <template #trigger>
          <slot name="left" />

          <slot name="icon-left">
            <SelectIconLeft />
          </slot>

          <slot name="base">
            <SelectBase />
          </slot>

          <slot name="icon-right">
            <SelectIconRight />
          </slot>

          <slot name="loader">
            <SelectLoader />
          </slot>

          <slot name="right" />
        </template>

        <template #content>
          <SelectDropdownSearchInput />

          <SelectContent>
            <SelectVirtualList />

            <slot />

            <SelectEmpty />
          </SelectContent>
        </template>
      </SelectPopover>
    </SelectRoot>
  </FormField>
</template>
