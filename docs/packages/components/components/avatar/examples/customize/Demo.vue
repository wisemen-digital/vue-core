<script setup lang="ts">
import {
  VcAvatar,
  VcTooltip,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcTooltip>
    <template #trigger>
      <VcAvatar
        :class-config="{
          root: 'size-24',
        }"
        src="https://thispersondoesnotexist.com/"
        name="John Doe"
      />
    </template>
    <template #content>
      <div class="p-xl max-w-100 text-sm">
        John Doe is our employee of the month. He has shown exceptional performance and dedication to his work.
      </div>
    </template>
  </VcTooltip>
</template>
