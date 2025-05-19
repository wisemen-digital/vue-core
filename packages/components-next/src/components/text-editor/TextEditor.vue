<script setup lang="ts">
import StarterKit from '@tiptap/starter-kit'
import {
  EditorContent,
  useEditor,
} from '@tiptap/vue-3'
// @ts-expect-error import broken
import { BubbleMenu } from '@tiptap/vue-3/menus'
import { Toggle } from 'reka-ui'
import { computed } from 'vue'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import type { Icon } from '@/icons/icons'

interface HTMLElement {
  isActive: boolean
  icon: Icon
  label: string
  onClick: () => void
}

const editor = useEditor({
  content: '',
  editorProps: { attributes: { class: 'prose-sm focus:outline-none border border-solid border-primary rounded-md w-140 p-lg min-h-40 prose-ul:list-disc' } },
  extensions: [
    StarterKit.configure({}),
    BubbleMenu,
  ],
})

const htmlElements = computed<HTMLElement[]>(() => [
  {
    isActive: editor.value?.isActive('paragraph') ?? false,
    icon: 'pilcrow',
    label: 'Paragraph',
    onClick: (): void => {
      editor.value?.chain().focus().setParagraph().run()
    },
  },
  {
    isActive: editor.value?.isActive('heading', { level: 1 }) ?? false,
    icon: 'heading1',
    label: 'Heading 1',
    onClick: (): void => {
      editor.value?.chain().focus().toggleHeading({ level: 1 }).run()
    },
  },
  {
    isActive: editor.value?.isActive('heading', { level: 2 }) ?? false,
    icon: 'heading2',
    label: 'Heading 2',
    onClick: (): void => {
      editor.value?.chain().focus().toggleHeading({ level: 2 }).run()
    },
  },
  {
    isActive: editor.value?.isActive('heading', { level: 3 }) ?? false,
    icon: 'heading3',
    label: 'Heading 3',
    onClick: (): void => {
      editor.value?.chain().focus().toggleHeading({ level: 3 }).run()
    },
  },
  {
    isActive: editor.value?.isActive('bulletList') ?? false,
    icon: 'list',
    label: 'Bullet list',
    onClick: (): void => {
      editor.value?.chain().focus().toggleBulletList().run()
    },
  },
  {
    isActive: editor.value?.isActive('orderedList') ?? false,
    icon: 'orderedList',
    label: 'Numbered list',
    onClick: (): void => {
      editor.value?.chain().focus().toggleOrderedList().run()
    },
  },
  {
    isActive: editor.value?.isActive('blockquote') ?? false,
    icon: 'quote',
    label: 'Quote',
    onClick: (): void => {
      editor.value?.chain().focus().toggleBlockquote().run()
    },
  },
])
</script>

<template>
  <div>
    <ul class="gap-xxs flex">
      <li
        v-for="htmlElement of htmlElements"
        :key="htmlElement.label"
      >
        <Toggle
          :as-child="true"
          :model-value="htmlElement.isActive"
        >
          <IconButton
            :icon="htmlElement.icon"
            :label="htmlElement.label"
            :class-config="{
              root: `rounded-sm size-7 ${htmlElement.isActive ? 'bg-quaternary data-[loading=false]:not-disabled:hover:bg-quaternary' : ''}`,
            }"
            size="sm"
            variant="tertiary"
            @click="htmlElement.onClick()"
          />
        </toggle>
      </li>
    </ul>

    <EditorContent :editor="editor" />
  </div>
</template>
