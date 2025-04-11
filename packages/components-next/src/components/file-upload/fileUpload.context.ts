import type { ComputedRef } from 'vue'

import type { FileUploadProps } from '@/components/file-upload/fileUpload.props'
import type { FileUploadItem } from '@/components/file-upload/fileUpload.type'
import { useContext } from '@/composables/context/context.composable'
import type { PropsToComputed } from '@/utils/props.util'

interface FileUploadContext extends PropsToComputed<FileUploadProps> {
  isMultiple: ComputedRef<boolean>
  onError: (fileUploadItem: FileUploadItem, errorMessage: string) => void
  onFilesSelected: (files: File[]) => void
  onRemoveFileUploadItem: (fileUploadItem: FileUploadItem) => void
  onReplaceFileUploadItem: (fileUploadItem: FileUploadItem, file: File) => void
  onStartUpload: (fileUploadItem: FileUploadItem, uuid: string) => void
  onSuccess: (fileUploadItem: FileUploadItem) => void
  onUpdateProgress: (fileUploadItem: FileUploadItem, progress: number) => void
}

export const [
  useProvideFileUploadContext,
  useInjectFileUploadContext,
] = useContext<FileUploadContext>('fileUploadContext')
