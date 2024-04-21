<script setup lang="ts">
import AppButton from '../../components/src/components/button/AppButton.vue'
import AppKeyboardShortcutProvider from '../../components/src/components/keyboard/AppKeyboardShortcutProvider.vue'

function onClick(): void {
  console.log('Button clicked')
}
</script>

<template>
  <div class="p-24">
    <div class="flex gap-4 p-8">
      <AppKeyboardShortcutProvider :keys="['n']">
        <AppButton
          :keyboard-shortcut-keys="['n']"
          @click="onClick"
        >
          App Button
        </AppButton>
      </AppKeyboardShortcutProvider>
    </div>
  </div>
</template>
