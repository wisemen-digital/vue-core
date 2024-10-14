---
sidebar: auto
---

# AppSelect

## Description

Displays a list of options for the user to pick from, triggered by a button. Optionally, other content can be displayed in the dropdown.

## Examples

### Basic usage
The most basic usage of the select component is to display a list of options for the user to pick from.

```vue
<template>
  <Test 
    prop="value" 
  >
    <!-- Optional content for slots -->
  </Test>
</template>
```

<script setup>
import SelectExampleBasic from './examples/SelectExampleBasic.vue'
</script>

<SelectExampleBasic />

<!-- @include: ./app-select-meta.md -->