---
sidebar: auto
---

# ProgressBar

<script setup>
import AppProgressBar from "./AppProgressBarPlayground.vue";
</script>

<AppProgressBar /> 



## Props

| Prop              | Type                | Description                                                | Default      |
| ----------------- | ------------------- | ---------------------------------------------------------- | ------------ |
| `progress`        | `number`            | The progress percentage                                    | `0`          |
| `showPercentage`  | `boolean`           | Whether to show the percentage text                        | `false`      |
| `percentagePosition` | `'inside' | 'outside'` | The position of the percentage text (inside or outside)     | `'outside'`  |


## Slots

| Slot name | Type   | Description |
| --------- | ------ | ----------- |
| -         | -      | -           |


## v-model

| Model | Type | Description |
| ----- | ---- | ----------- |
| -     | -    | -           |


## Events

| Event name | Type | Description |
| ---------- | ---- | ----------- |
| -          | -    | -           |


## Code

::: code-group
```vue [Usage]
<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Vue Progress Bar Example</h1>
    <ProgressBar :progress="progress" :showPercentage="true" percentagePosition="inside" />
    <ProgressBar :progress="progress" :showPercentage="true" percentagePosition="outside" />
    <button @click="increaseProgress" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Increase Progress</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProgressBar from './components/ProgressBar.vue';

const progress = ref(0);

function increaseProgress() {
  if (progress.value < 100) {
    progress.value += 10;
  }
}
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
