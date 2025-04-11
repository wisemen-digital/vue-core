import { useContext } from '@/composables/context/context.composable'

interface FileUploadItemContext {
  onCancel: () => void
  onRemove: () => void
  onReplace: (file: File) => void
}

export const [
  useProvideFileUploadItemContext,
  useInjectFileUploadItemContext,
] = useContext<FileUploadItemContext>('fileUploadItemContext')
