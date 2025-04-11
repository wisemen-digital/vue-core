import type {
  FileInfo,
  FileUploadItem,
} from '@/components/file-upload/fileUpload.type'
import type { InteractableElement } from '@/utils/props.util'

export interface FileUploadProps extends InteractableElement {
  /**
   * A unique file type specifier is a string that describes a type of file that may be selected by the user
   *
   * A valid case-insensitive filename extension, starting with a period (".") character.
   * For example: .jpg, .pdf, or .doc.
   *
   * A valid MIME type string, with no extensions.
   * The string audio/* meaning "any audio file".
   * The string video/* meaning "any video file".
   * The string image/* meaning "any image file".
   */
  accept: string[]
  /**
   * Prepares a file for upload by retrieving upload metadata from the backend.
   *
   * This function is typically used before uploading a file to an external storage service
   * like Amazon S3. It returns the necessary information such as a pre-signed upload URL,
   * file UUID, and MIME type.
   *
   * @param name - The name of the file to be uploaded.
   * @param mimeType - The MIME type of the file to be uploaded.
   * @returns A promise that resolves to a `FileInfo` object containing upload metadata.
   */
  getFileInfo: (name: string, mimeType: string) => Promise<FileInfo>
  /**
   * The maximum allowed file size in megabytes (MB).
   *
   * If provided, files larger than this limit will be rejected during selection.
   * Useful for enforcing client-side validation before attempting an upload.
   *
   * @default null (no limit)
   */
  maxFileSizeInMb?: number | null
}

export interface FileUploadItemProps {
  item: FileUploadItem
}
