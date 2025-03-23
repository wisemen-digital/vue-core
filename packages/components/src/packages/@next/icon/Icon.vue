<script setup lang="ts">
import { useAttrs } from 'vue'

import AsyncIcon from '@/components/icon/AsyncIcon.vue'
import type { IconProps } from '@/components/icon/icon.props'

const props = defineProps<IconProps>()

const attrs = useAttrs()
</script>

<template>
  <div>
    <Suspense>
      <AsyncIcon
        :icon="props.icon"
        v-bind="attrs"
      />
    </Suspense>
  </div>
</template>
