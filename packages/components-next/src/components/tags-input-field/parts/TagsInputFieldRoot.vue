<script setup lang="ts">
import { TagsInputRoot } from 'reka-ui'
import type { ComponentPublicInstance } from 'vue'
import {
  computed,
  ref,
} from 'vue'

import type { CustomComponentVariant } from '@/class-variant/classVariant.type'
import {
  getCustomComponentVariant,
  mergeClasses,
} from '@/class-variant/customClassVariants'
import { useProvideTagsInputFieldContext } from '@/components/tags-input-field/tagsInputField.context'
import type {
  TagsInputFieldEmits,
  TagsInputFieldProps,
} from '@/components/tags-input-field/tagsInputField.props'
import type { CreateTagsInputFieldStyle } from '@/components/tags-input-field/tagsInputField.style'
import { createTagsInputFieldStyle } from '@/components/tags-input-field/tagsInputField.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<TagsInputFieldProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isRequired: false,
  isSpellCheckEnabled: false,
  isTouched: false,
  autocomplete: 'off',
  classConfig: null,
  errorMessage: null,
  hint: null,
  label: null,
  variant: null,
})

const emit = defineEmits<TagsInputFieldEmits>()

const modelValue = defineModel<string[]>({
  required: true,
})

const {
  theme,
} = injectThemeProviderContext()

const tagsInputFieldStyle = computed<CreateTagsInputFieldStyle>(() => createTagsInputFieldStyle({
  variant: props.variant ?? undefined,
}))

const customClassConfig = computed<CustomComponentVariant<'textarea'>>(
  () => getCustomComponentVariant('tagsInputField', theme.value, {
    variant: props.variant,
  }),
)

function onBlur(event: FocusEvent): void {
  emit('blur', event)
}

function onFocus(event: FocusEvent): void {
  emit('focus', event)
}

useProvideTagsInputFieldContext({
  ...toComputedRefs(props),
  customClassConfig,
  modelValue,
  style: tagsInputFieldStyle,
  onBlur,
  onFocus,
})

const tagsInputFieldRootRef = ref<ComponentPublicInstance | null>(null)
</script>

<template>
  <TagsInputRoot
    :id="`tags-input-${props.placeholder}`"
    ref="tagsInputFieldRootRef"
    v-model="modelValue"
    :add-on-blur="true"
    :add-on-paste="true"
    :class="tagsInputFieldStyle.root({
      class: mergeClasses(customClassConfig.root, props.classConfig?.root),
    })"
    :data-empty="modelValue.length === 0 || undefined"
    delimiter=";"
  >
    <slot />
  </TagsInputRoot>
</template>
