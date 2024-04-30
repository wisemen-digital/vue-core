<script setup lang="ts">
import AppText from '@/components/text/AppText.vue';
import AppTextarea from '@/components/textarea/AppTextarea.vue';
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { ref } from 'vue';

const controls = createControls({
  id: {
    default: 'text-area-id',
    cols: 2,
    label: 'Id',
    type: 'text',
  }, 
  heightClass: {
    default: 'h-32',
    cols: 2,
    label: 'Height class',
    type: 'text',
  },
  placeholder: {
    default: 'Type your text here...',
    cols: 2,
    label: 'Placeholder',
    type: 'text',
  },
  resize: {
    default: 'none',
    cols: 2,
    items: [
      'both',
      'horizontal',
      'none',
      'vertical',
    ],
    label: 'Resize',
    type: 'select',
  },
  isDisabled: {
    default: false,
    label: 'Is disabled',
    type: 'switch',
  },
  isInvalid: {
    default: false,
    label: 'Is invalid',
    type: 'switch',
  }, 
})

const model = ref<string | null>(null)
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div>
        <AppTextarea 
          class="mb-3"
          v-bind="values" 
          v-model="model"
        />

        <AppText variant="caption">
          Model value: {{ model }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
