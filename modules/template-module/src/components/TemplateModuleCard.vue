<script setup lang="ts">
import { useTemplateModuleData } from 'src/composables/useTemplateModuleData.composable'

/**
 * TemplateModuleCard - Example component from the Template Module
 * Demonstrates how to use module context and composables in components
 */
defineProps<{
  title?: string
}>()

const {
  apiUrl, config,
} = useTemplateModuleData()
</script>

<template>
  <!-- eslint-disable better-tailwindcss/no-unregistered-classes -->
  <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
  <div class="template-module-card">
    <h3
      v-if="title"
      class="title"
    >
      {{ title }}
    </h3>
    <div class="content">
      <div class="info-row">
        <span class="label">API URL:</span>
        <span class="value">{{ apiUrl }}</span>
      </div>
      <div class="info-row">
        <span class="label">Debug Mode:</span>
        <span
          :class="{ active: config?.debug }"
          class="badge"
        >
          {{ config?.debug ? '🟢 ON' : '🔴 OFF' }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.template-module-card {
  background: white;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #333;
}

.content {
  display: grid;
  gap: 8px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.info-row:last-child {
  border-bottom: none;
}

.label {
  font-weight: 600;
  color: #666;
  font-size: 14px;
}

.value {
  color: #667eea;
  font-family: 'Courier New', monospace;
  font-size: 14px;
}

.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
}

.badge.active {
  background: #d4edda;
  color: #155724;
}

.badge:not(.active) {
  background: #f8d7da;
  color: #721c24;
}
</style>
