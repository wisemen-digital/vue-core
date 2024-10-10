<script setup lang="ts">
import AppButton from '@/components/button/button/AppButton.vue'
import AppIconButton from '@/components/button/icon-button/AppIconButton.vue'
</script>

<template>
  <div class="grid grid-cols-3 gap-12">
    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        variant="secondary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        variant="secondary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        variant="secondary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        variant="secondary-color"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        variant="secondary-color"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        variant="secondary-color"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        variant="tertiary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        variant="tertiary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        variant="tertiary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        variant="tertiary-color"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        variant="tertiary-color"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        variant="tertiary-color"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        variant="destructive-primary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        variant="destructive-primary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        variant="destructive-primary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        variant="destructive-secondary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        variant="destructive-secondary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        variant="destructive-secondary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="false"
        size="sm"
        variant="destructive-tertiary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-disabled="true"
        variant="destructive-tertiary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppButton
        :is-loading="true"
        size="lg"
        variant="destructive-tertiary"
        icon-left="translate01"
      >
        Button CTA
      </AppButton>
    </div>

    <div>
      <AppIconButton
        :is-disabled="false"
        size="sm"
        label="Button CTA"
        icon="translate01"
      />
    </div>

    <div>
      <AppIconButton
        :is-disabled="true"
        label="Button CTA"
        icon="translate01"
      />
    </div>

    <div>
      <AppIconButton
        :is-loading="true"
        label="Button CTA"
        icon="translate01"
        size="lg"
      />
    </div>
  </div>
</template>

<style>
body {
  font-family: 'Inter Variable', sans-serif;
}
</style>
