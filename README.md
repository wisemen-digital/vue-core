<a href="https://www.npmjs.com/package/@wisemen/vue-core" alt="Npm version">
<img src="https://img.shields.io/npm/v/%40wisemen%2Fvue-core" /></a>

# @wisemen/vue-core

Welcome to the Vue Core repository! This repository is a collection of Vue components that are used across multiple projects. The components are designed to be reusable and easy to use. The components are built using Vue 3 Composition API, Radix and are written in TypeScript.

## Table of Contents

- [wisemen/vue-core](#@wisemen/vue-core)
  - [Table of Contents](#table-of-contents)
  - [Getting started](#getting-started)
  - [Customize your icons](#customize-your-icons)
  - [Documentation](#documentation)


## Getting started

1. Install the library
```bash
pnpm i @wisemen/vue-core
```

2. Import the base styling in `main.ts`
```ts
import '@wisemen/vue-core/style.css'
```

3. Import and use components
```ts
<script setup lang="ts">
import { AppButton } from '@wisemen/vue-core'
</script>
  
<template>
  <Button>
    Button Text      
  </AppButton>
</template>
```

## Customize your icons

If you want to use custom icons, extend them as follows:

```ts
import { extendIcons } from '@wisemen/vue-core'
import type { Component } from 'vue'

export const icons = {
  // your custom icons
} satisfies Record<string, Component>

extendIcons(icons)

type CustomIcons = {
  [K in keyof typeof icons]: Component
}

declare module '@wisemen/vue-core' {
  interface Icons extends CustomIcons {}
}

```
## Add your Google Api Key

If you want to use some components such as the AddressAutocomplete, please add your Google maps API Key in the library configuration 

```ts
import type { Config } from '@wisemen/vue-core'
import { defineConfig } from '@wisemen/vue-core'

const config: Config = {
  googleMapsApiKey: 'your-api-key',
}

defineConfig(config)
```

## Documentation

The docs are available at [https://wisemen-digital.github.io/vue-core/](https://wisemen-digital.github.io/vue-core/)