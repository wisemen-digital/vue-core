<script setup lang="ts" generic="TItem extends AcceptableValue">
import FormLabel from '@components/components/form-label/FormLabel.vue'
import { FormSwitch } from '@components/index'
import type {
  AcceptableValue,
} from '@components/types/selectItem.type'

interface Props {

  label: string
}

const props = defineProps<Props>()

const model = defineModel<boolean>({
  required: true,
})
</script>

<template>
  <div class="flex items-center gap-2">
    <FormSwitch
      v-model="model"
      :is-touched="false"
      :label="props.label"
      :errors="{ _errors: [] }"
    />
    <FormLabel
      :label="props.label"
      for=""
    />
  </div>
</template>
