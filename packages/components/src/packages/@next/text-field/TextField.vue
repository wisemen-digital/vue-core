<script setup lang="ts">
import TextFieldIconLeft from '@/packages/@next/text-field/parts/TextFieldIconLeft.vue'
import TextFieldIconRight from '@/packages/@next/text-field/parts/TextFieldIconRight.vue'
import TextFieldInput from '@/packages/@next/text-field/parts/TextFieldInput.vue'
import TextFieldLoader from '@/packages/@next/text-field/parts/TextFieldLoader.vue'
import TextFieldRoot from '@/packages/@next/text-field/parts/TextFieldRoot.vue'
</script>

<template>
  <TextFieldRoot :model-value="null">
    <TextFieldIconLeft />
    <TextFieldInput />
    <TextFieldLoader />
    <TextFieldIconRight />
  </TextFieldRoot>
</template>
