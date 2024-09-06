<!-- eslint-disable no-alert -->
<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import {
  AppEditable,
  AppEditableArea,
  AppEditableCancel,
  AppEditableSubmit,
  AppEditableTrigger,
  AppIconButton,
  AppText,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  placeholder: {
    default: 'Type here...',
    label: 'Placeholder',
    cols: 2,
    type: 'text',
  },
  maxLength: {
    default: '25',
    label: 'Maximum length',
    cols: 2,
    type: 'text',
  },
  isDisabled: {
    default: false,
    label: 'Is disabled',
    type: 'switch',
  },
})

const model = ref<string>('Start value')
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="flex gap-3">
        <div class="flex flex-col gap-3">
          <AppText variant="subtext">
            {{ 'Default styling:' }}
          </AppText>
          <AppEditable
            v-bind="values"
            v-model="model"
            :max-length="+values.maxLength"
          />
        </div>
        <div class="flex flex-col gap-3">
          <AppText variant="subtext">
            {{ 'With slots and custom styling:' }}
          </AppText>
          <AppEditable
            v-bind="values"
            v-model="model"
            :max-length="+values.maxLength"
          >
            <template #editableArea>
              <div class="flex gap-2 rounded-md bg-gray-100 p-2">
                <AppEditableArea />
              </div>
            </template>
            <template #trigger>
              <div class="absolute right-0 top-1">
                <AppEditableTrigger>
                  <AppIconButton
                    icon="chevronRight"
                    label="button"
                    size="sm"
                    variant="ghost"
                  />
                </AppEditableTrigger>
              </div>
            </template>
            <template #submit>
              <div class="absolute right-8 top-1">
                <AppEditableSubmit>
                  <AppIconButton
                    icon="checkmark"
                    label="button"
                    size="sm"
                    variant="ghost"
                  />
                </AppEditableSubmit>
              </div>
            </template>
            <template #cancel>
              <div class="absolute right-0 top-1">
                <AppEditableCancel>
                  <AppIconButton
                    icon="close"
                    label="button"
                    size="sm"
                    variant="ghost"
                  />
                </AppEditableCancel>
              </div>
            </template>
          </AppEditable>
        </div>
      </div>
    </template>
  </ComponentPlayground>
</template>
