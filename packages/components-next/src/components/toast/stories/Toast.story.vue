<script setup lang="ts">
import { h } from 'vue'

import TestImage from '@/components/toast/stories/TestImage.vue'
import Toast from '@/components/toast/Toast.vue'
</script>

<template>
  <Story title="Toast">
    <ul>
      <Toast
        :actions="[
          {
            label: 'Spread ashes',
            onClick: () => {
              //
            },
            variant: 'secondary',
          },
        ]"
        :preview="h(TestImage)"
        title="This person has died"
        description="Sadly, this person has died. We are very sad about this. Please respect their memory."
        type="info"
        icon="stars"
      />
    </ul>
  </Story>
</template>
