---
sidebar: auto
---


# AppToast

<!-- @include: ./app-toast-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppButton, AppToastContainer, useToast } from '@wisemen/vue-core'

// Only use the composable from vue-core to display the toast
const toast = useToast()

const onButtonClick = () => {
  toast.show({
    title: "Title",
    description: "Description",
  })
}
</script>
  
<template>
  <!-- Import the container to render the toast, preferably in your App.vue -->
  <AppToastContainer />

  <!-- Event triggering the toast -->
  <AppButton @click="onButtonClick()">
    Click to show toast
  </AppButton>
</template>

```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/text/AppText.vue).