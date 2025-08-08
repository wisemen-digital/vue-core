<script setup lang="ts">
import type {
  FileInfo,
  FileUploadInfo,
} from '@wisemen/vue-core-components'
import {
  VcButton,
  VcFileUploadItem,
  VcFileUploadItemRemove,
  VcFileUploadRoot,
  VcFileUploadTrigger,
  VcIconButton,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

const files = ref<FileInfo[]>([])

function fakeGetFileInfo(): Promise<FileUploadInfo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        uuid: `${Math.random()}`,
        uploadUrl: 'https://example.com/upload',
      })
    }, 200)
  })
}

function fakeConfirmUpload(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 200)
  })
}
</script>

<template>
  <VcFileUploadRoot
    v-slot="{ items }"
    v-model="files"
    :accept="['image/*']"
    :get-file-info="fakeGetFileInfo"
    :confirm-upload="fakeConfirmUpload"
  >
    <div class="flex flex-col gap-2">
      <VcFileUploadTrigger>
        <VcButton
          icon-right="plus"
          variant="tertiary"
        >
          Add an image
        </VcButton>
      </VcFileUploadTrigger>

      <VcFileUploadItem
        v-for="item in items"
        :key="item.key"
        :item="item"
        class="flex items-center justify-center gap-2"
      >
        <div
          class="
            relative flex size-40 flex-col items-center justify-between gap-2
            overflow-hidden
          "
        >
          <img
            v-if="item.url"
            :src="item.url"
            alt="Alternative text"
            class=""
          >

          <VcFileUploadItemRemove>
            <VcIconButton
              icon="close"
              label="Remove file"
              variant="destructive-tertiary"
              size="sm"
              class="!absolute top-1 right-1"
            />
          </VcFileUploadItemRemove>
        </div>
      </VcFileUploadItem>
    </div>
  </VcFileUploadRoot>
</template>
