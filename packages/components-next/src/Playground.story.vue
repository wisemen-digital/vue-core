<script setup lang="ts">
import FormFieldLabel from '@/components/form-field/parts/FormFieldLabel.vue'
import Icon from '@/components/icon/Icon.vue'
import TextField from '@/components/text-field/TextField.vue'
</script>

<template>
  <Story title="Playground">
    <TextField
      :model-value="null"
      label="Example"
    >
      <template #label>
        <FormFieldLabel>
          <template #label-trailing>
            <Icon
              icon="search"
              class="size-4"
            />
          </template>
        </FormFieldLabel>
      </template>
    </TextField>
  </Story>
</template>
