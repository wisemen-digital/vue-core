---
sidebar: auto
---


# FormSwitch
<script setup>
import FormSwitchPlayground from './FormSwitchPlayground.vue';
</script>

<FormSwitchPlayground />


## Props

| Prop       | Type             | Description                            | Default |
|------------|------------------|----------------------------------------|---------|
| id         | `string \| null` | The ID of the item.                    | null    |
| isDisabled | `boolean`        | Whether the switch is disabled or not. | false   |
| isInvalid  | `boolean`        | Whether the switch is invalid or not.  | false   |



## v-model

| Model           | Type    | Description                     |
|-----------------|---------|---------------------------------|
| v-model:checked | boolean | The checked state of the switch |


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
