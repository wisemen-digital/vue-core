---
sidebar: auto
---


# AppDialog

<!-- @include: ./app-dialog-meta.md -->


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppButton, AppDialogContainer, useDialog } from '@wisemen/vue-core'

// Only use the composable from vue-core to display the toast
const dialog = useDialog({
  component: () => import('./AppDialogExample.vue'),
})

function onButtonClick(): void {
  void dialog.open({
    title: 'This is a dialog',
  })
}
</script>
  
<template>
  <!-- Import the container to render the dialog, preferably in your App.vue -->
  <AppDialogContainer />

  <!-- Event triggering the dialog -->
  <AppButton @click="onButtonClick()">
    Click to show dialog
  </AppButton>
</template>
```

```vue [AppDialogExample]
<script setup lang="ts">
import { AppDialog, AppText } from '@wisemen/vue-core'

const props = defineProps<{
  title: string
}>()
</script>

<template>
  <AppDialog>
    <AppText variant="title">
      {{ props.title }}
    </AppText>
  </AppDialog>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/dialog/AppDialog.vue).