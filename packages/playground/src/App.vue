<script setup lang="ts">
import AppButton from '../../components/src/components/button/AppButton.vue'
import AppDropdownMenu from '../../components/src/components/dropdown-menu/AppDropdownMenu.vue'
</script>

<template>
  <div class="p-24">
    <div class="flex gap-4 p-8">
      <AppDropdownMenu
        :enable-global-keyboard-shortcuts="true"
        :items="[
          {
            type: 'group',
            items: [
              {
                type: 'option',
                label: 'Open project',
                keyboardShortcutKeys: ['ctrl', 'o'],
                onSelect: () => console.log('Option 1 selected'),
              },
            ],
          },
          {
            type: 'divider',
          },
          {
            type: 'group',
            items: [
              {
                type: 'option',
                label: 'Project lead',
                keyboardShortcutKeys: ['p', 'l'],
                onSelect: () => console.log('Option 2 selected'),
              },
            ],
          },
        ]"
      >
<AppButton
  :keyboardShortcut="{
    keys: ['n'],
    preventDefault: false, // optional
    stopPropagation: false, // optional
  }"
>
  Button
</AppButton>
      </AppDropdownMenu>
    </div>
  </div>
</template>
