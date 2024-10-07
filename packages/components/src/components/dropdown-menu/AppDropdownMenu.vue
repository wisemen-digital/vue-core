<script setup lang="ts">
import {
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from 'reka-ui'
import { computed } from 'vue'

import AppDropdownMenuItem from '@/components/dropdown-menu/AppDropdownMenuItem.vue'
import AppDropdownMenuSubTrigger from '@/components/dropdown-menu/AppDropdownMenuSubTrigger.vue'
import { dropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style.js'

const style = dropdownMenuStyle()

const dropdownClasses = computed<string>(() => style.dropdown())
const groupClasses = computed<string>(() => style.group())
const groupLabelClasses = computed<string>(() => style.groupLabel())
const itemClasses = computed<string>(() => style.item())
const separatorClasses = computed<string>(() => style.separator())
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        :class="dropdownClasses"
        position="popper"
      >
        <slot name="top" />

        <AppDropdownMenuItem
          :item="{
            label: 'Unit system',
            type: 'option',
            icon: 'tool02',
            onSelect: () => {},
          }"
        />

        <DropdownMenuSeparator :class="separatorClasses" />

        <!-- <DropdownMenuGroup :class="groupClasses">
          <DropdownMenuLabel :class="groupLabelClasses">
            Group
          </DropdownMenuLabel>

          <AppDropdownMenuItem />
          <AppDropdownMenuItem />
        </DropdownMenuGroup> -->

        <DropdownMenuCheckboxItem v-if="false">
          Checkbox
          <DropdownMenuItemIndicator>X</DropdownMenuItemIndicator>
        </DropdownMenuCheckboxItem>

        <DropdownMenuRadioGroup v-if="false">
          <DropdownMenuRadioItem>
            Radio
            <DropdownMenuItemIndicator>O</DropdownMenuItemIndicator>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuSub>
          <AppDropdownMenuSubTrigger
            :item="{
              label: 'Language',
              icon: 'translate01',
              items: [],
              type: 'subMenu',
            }"
          />

          <DropdownMenuPortal>
            <DropdownMenuSubContent
              :class="dropdownClasses"
              :side-offset="10"
            >
              <DropdownMenuItem :class="itemClasses">
                Nederlands
              </DropdownMenuItem>

              <DropdownMenuItem :class="itemClasses">
                English
              </DropdownMenuItem>

              <DropdownMenuItem :class="itemClasses">
                Français
              </DropdownMenuItem>

              <DropdownMenuItem :class="itemClasses">
                Deutsch
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSeparator />
        <DropdownMenuArrow />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
