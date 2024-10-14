<script setup lang="ts">
import type { SelectItem } from '@wisemen/vue-core'
import { AppSelect } from '@wisemen/vue-core'
import { ref } from 'vue'

interface User {
  id: number
  firstName: string
  lastName: string
}

const value = ref<User | null>(null)

const items: SelectItem<User>[] = [
  {
    type: 'option',
    value: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    },
  },
  {
    type: 'option',
    value: {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
    },
  },
]

function displayFn(user: User): string {
  return `${user.firstName} ${user.lastName}`
}
</script>

<template>
  <div class="vp-raw">
    <AppSelect
      v-model="value"
      :items="items"
      :display-fn="displayFn"
    />
  </div>
</template>
