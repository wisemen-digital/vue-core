---
sidebar: auto
---


# FormSwitch

<!-- @include: ./form-switch-meta.md -->

## Code

::: code-group

```vue [Usage]

<script setup lang="ts">
  import {FormSwitch} from '@wisemen/vue-core'
  import {ref} from "vue";

  const switchState = ref<boolean>(false);
</script>

<template>
  <FormSwitch v-model:checked="switchState"/>
</template>

```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/switch/FormSwitch.vue).
