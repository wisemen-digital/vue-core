<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue'

import { useProvideFileUploadContext } from '@/components/file-upload/fileUpload.context'
import type { FileUploadProps } from '@/components/file-upload/fileUpload.props'
import type {
  FileInfo,
  FileUploadItem,
} from '@/components/file-upload/fileUpload.type'
import { FileUploadStatus } from '@/components/file-upload/fileUpload.type'
import {
  mapFileInfoToFileUploadItem,
  mapFileToUploadItem,
} from '@/components/file-upload/fileUpload.util'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<FileUploadProps>(), {
  isDisabled: false,
  isValidFile: null,
  maxFileSizeInMb: null,
})

const modelValue = defineModel<FileInfo[] | (FileInfo | null)>({ required: true })

const isMultiple = computed<boolean>(() => Array.isArray(modelValue.value))

// For simplicity and consistency, the modelValue will always be normalized to an array.
const delegatedModelValue = computed<FileUploadItem[]>({
  get: () => {
    if (Array.isArray(modelValue.value)) {
      return (modelValue.value as FileInfo[]).map(
        (fileInfo) => mapFileInfoToFileUploadItem(fileInfo, FileUploadStatus.SUCCESS),
      )
    }

    return modelValue.value === null
      ? []
      : [
          mapFileInfoToFileUploadItem(modelValue.value, FileUploadStatus.SUCCESS),
        ]
  },
  set: (newValue: FileUploadItem[]) => {
    if (isMultiple.value) {
      modelValue.value = newValue
    }
    else {
      modelValue.value = newValue[0] ?? null
    }
  },
})

// Internal state to hold the files to make sure there's no layout shift
const internalFiles = ref<FileUploadItem[]>([])

const sortedFileUploadItems = computed<FileUploadItem[]>(() => {
  return [
    ...delegatedModelValue.value.filter((item) => !item.isSyncedWithModelValue),
    ...internalFiles.value,
  ].toSorted((a, b) => a.order - b.order)
})

function onFilesSelected(files: File[]): void {
  const validFiles = props.isValidFile === null
    ? files
    : files.filter((file) => props.isValidFile!(file))

  internalFiles.value.push(...validFiles.map((file, fileIndex) => {
    return mapFileToUploadItem(file, fileIndex + delegatedModelValue.value.length)
  }))
}

function updateInternalFileUploadItem(
  key: string,
  updatedItem: Partial<FileUploadItem>,
): void {
  internalFiles.value = internalFiles.value.map((item) => {
    if (item.key === key) {
      return {
        ...item,
        ...updatedItem,
      } as FileUploadItem
    }

    return item
  })
}

function onStartUpload(item: FileUploadItem, uuid: string): void {
  updateInternalFileUploadItem(item.key, {
    uuid,
    progress: 0,
    status: FileUploadStatus.UPLOADING,
  })
}

function onUpdateProgress(item: FileUploadItem, progress: number): void {
  updateInternalFileUploadItem(item.key, {
    progress,
    status: FileUploadStatus.UPLOADING,
  })
}

function onSuccess(item: FileUploadItem): void {
  const updatedItem = {
    ...item,
    isSyncedWithModelValue: true,
    status: FileUploadStatus.SUCCESS,
  } as FileUploadItem

  updateInternalFileUploadItem(item.key, updatedItem)

  delegatedModelValue.value = [
    ...delegatedModelValue.value.filter((file) => file.uuid !== item.uuid),
    updatedItem,
  ]
}

function onError(item: FileUploadItem, errorMessage: string): void {
  updateInternalFileUploadItem(item.key, {
    errorMessage,
    status: FileUploadStatus.ERROR,
  })
}

function onRemoveFileUploadItem(item: FileUploadItem): void {
  internalFiles.value = internalFiles.value.filter((file) => file.key !== item.key)
  delegatedModelValue.value = delegatedModelValue.value.filter(
    (file) => file.uuid === item.uuid,
  )
}

function onReplaceFileUploadItem(item: FileUploadItem, file: File): void {
  delegatedModelValue.value = delegatedModelValue.value.filter((file) => file.uuid !== item.uuid)

  const fileExistsInInternalFiles = internalFiles.value.some((file) => file.key === item.key)

  if (fileExistsInInternalFiles) {
    updateInternalFileUploadItem(item.key, mapFileToUploadItem(file, item.order))
  }
  else {
    internalFiles.value = [
      ...internalFiles.value,
      mapFileToUploadItem(file, item.order),
    ]
  }
}

useProvideFileUploadContext({
  ...toComputedRefs(props),
  isMultiple,
  onError,
  onFilesSelected,
  onRemoveFileUploadItem,
  onReplaceFileUploadItem,
  onStartUpload,
  onSuccess,
  onUpdateProgress,
})
</script>

<template>
  <slot :items="sortedFileUploadItems" />
</template>
