<script setup lang="ts">
import { ref } from 'vue'

import Button from '@/components/button/default-button/Button.vue'

const isLoading = ref<boolean>(true)
</script>

<template>
  <Story title="Button">
    <Variant title="Primary">
      <Button
        label="Button"
        variant="primary"
        icon-left="plus"
      />

      <Button
        :is-disabled="true"
        label="Button"
        variant="primary"
        icon-left="plus"
      />
    </Variant>

    <Variant title="Secondary">
      <Button
        icon-left="plus"
        label="Button"
        variant="secondary"
      />

      <Button
        :is-disabled="true"
        icon-left="plus"
        label="Button"
        variant="secondary"
      />
    </Variant>

    <Variant title="Tertiary">
      <Button
        icon-left="plus"
        label="Button"
        variant="tertiary"
      />

      <Button
        :is-disabled="true"
        label="Button"
        variant="tertiary"
        icon-left="plus"
      />
    </Variant>

    <Variant title="Destructive Primary">
      <Button
        icon-left="plus"
        label="Button"
        variant="destructive-primary"
      />

      <Button
        :is-disabled="true"
        label="Button"
        variant="destructive-primary"
        icon-left="plus"
      />
    </Variant>

    <Variant title="Destructive Secondary">
      <Button
        icon-left="plus"
        label="Button"
        variant="destructive-secondary"
      />

      <Button
        :is-disabled="true"
        label="Button"
        variant="destructive-secondary"
        icon-left="plus"
      />
    </Variant>

    <Variant title="Destructive Tertiary">
      <Button
        icon-left="plus"
        label="Button"
        variant="destructive-tertiary"
      />

      <Button
        :is-disabled="true"
        label="Button"
        variant="destructive-tertiary"
        icon-left="plus"
      />
    </Variant>

    <Variant title="Sm">
      <Button
        icon-left="plus"
        label="Button"
        size="sm"
      />
    </Variant>

    <Variant title="Md">
      <Button
        icon-left="plus"
        label="Button"
        size="md"
      />
    </Variant>

    <Variant title="Lg">
      <Button
        icon-left="plus"
        label="Button"
        size="lg"
      />
    </Variant>

    <Variant title="Xl">
      <Button
        icon-left="plus"
        label="Button"
        size="xl"
      />
    </Variant>

    <Variant title="2xl">
      <Button
        icon-left="plus"
        label="Button"
        size="2xl"
      />
    </Variant>

    <Variant title="Loading">
      <input
        v-model="isLoading"
        type="checkbox"
      >

      <Button
        :is-loading="isLoading"
        icon-left="plus"
        label="Button"
        loading-label="Loading..."
      />
    </Variant>
  </Story>
</template>
