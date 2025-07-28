<script setup lang="ts">
import { useInjectFileUploadContext } from '@/components/file-upload/fileUpload.context'
import type {
  FileInfo,
  FileUploadItem,
  FileUploadItemPending,
} from '@/components/file-upload/fileUpload.type'
import { FileUploadStatus } from '@/components/file-upload/fileUpload.type'
import { useProvideFileUploadItemContext } from '@/components/file-upload/fileUploadItem.context'

const props = defineProps<{
  item: FileUploadItem
}>()

const {
  getFileInfo,
  onError,
  onRemoveFileUploadItem,
  onReplaceFileUploadItem,
  onStartUpload,
  onSuccess,
  onUpdateProgress,
} = useInjectFileUploadContext()

async function getFileInfoData(): Promise<Pick<FileInfo, 'url' | 'uuid'> | null> {
  const {
    name, mimeType,
  } = props.item

  try {
    return await getFileInfo(name, mimeType)
  }
  catch {
    onError(props.item, 'Failed to fetch file info')
  }

  return null
}

function uploadToS3(uuid: string, url: string, file: File): void {
  onStartUpload(props.item, uuid)

  const xhr = new XMLHttpRequest()
  const blob = new Blob([
    file,
  ])

  xhr.upload.addEventListener('progress', (event: ProgressEvent): void => {
    if (event.lengthComputable) {
      const progress = Math.round((event.loaded / event.total) * 100)

      onUpdateProgress(props.item, progress)
    }
  })

  xhr.onload = (): void => {
    if (xhr.status === 200) {
      onSuccess(props.item)
    }
    else {
      onError(props.item, 'Failed to upload file to S3')
    }
  }

  xhr.onerror = (): void => {
    onError(props.item, 'Failed to upload file to S3')
  }

  xhr.open('PUT', url, true)
  xhr.setRequestHeader('Content-Type', file.type)
  xhr.send(blob)
}

async function uploadFile(): Promise<void> {
  const fileInfo = await getFileInfoData()

  if (fileInfo === null) {
    return
  }

  const {
    uuid, url,
  } = fileInfo
  const {
    file,
  } = props.item as FileUploadItemPending

  uploadToS3(uuid, url, file)
}

function onCancel(): void {}

if (props.item.status === FileUploadStatus.PENDING) {
  void uploadFile()
}

useProvideFileUploadItemContext({
  onCancel,
  onRemove: () => onRemoveFileUploadItem(props.item),
  onReplace: (file) => onReplaceFileUploadItem(props.item, file),
})
</script>

<template>
  <slot />
</template>
