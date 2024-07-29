<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from 'radix-vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppText from '@/components/text/AppText.vue'
import AppCollapseTransition from '@/components/transitions/AppCollapseTransition.vue'
import type { Accordion } from '@/types/accordionItem.type'

const props = withDefaults(
  defineProps<{
    /**
     * When type is "single", allows closing content when clicking trigger for an open item.
     */
    collapsible: boolean
    /**
     * Content of the accordion.
     */
    items: Accordion[]
    /**
     * Determines whether "single" or "multiple" items can be pressed at a time.
     */
    type: 'multiple' | 'single'
  }>(),
  {
    collapsible: true,
    type: 'single',
  },
)

defineSlots<{
  /** Override the rendering of the accordion tab's title */
  title: (props: {
    title: string
    subtitle: string | undefined
  }) => any
  /** Override the rendering of the accordion tab's content */
  content: (props: {
    content: string
  }) => any
}>()
</script>

<template>
  <AccordionRoot
    :type="props.type"
    :collapsible="props.collapsible"
    class="rounded-popover shadow-popover-shadow"
  >
    <template
      v-for="item in props.items"
      :key="item.value"
    >
      <AccordionItem
        :value="item.value"
        class="overflow-hidden first:mt-0 first:rounded-t-popover last:rounded-b-popover"
      >
        <AccordionHeader class="flex">
          <AccordionTrigger class="group flex flex-1 cursor-pointer items-center justify-between gap-10 border-t border-solid border-primary/10 bg-white px-3 py-2 text-black outline-none hover:bg-muted-background">
            <slot
              :title="item.title"
              :subtitle="item.subtitle"
              name="title"
            >
              <div class="flex flex-col items-start">
                <AppText variant="subtext">
                  {{ item.title }}
                </AppText>
                <AppText variant="caption">
                  {{ item.subtitle }}
                </AppText>
              </div>
            </slot>
            <AppIcon
              icon="chevronDown"
              class="text-primary transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
            />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="overflow-hidden bg-white text-black data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
          <AppCollapseTransition>
            <slot
              :content="item.content"
              name="content"
            >
              <div class="px-3 py-2 text-subtext">
                {{ item.content }}
              </div>
            </slot>
          </AppCollapseTransition>
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>
