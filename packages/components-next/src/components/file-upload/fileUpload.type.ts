export interface FileInfo {
  uuid: string
  name: string
  mimeType: string
  order: number
  url: string
}

export enum FileUploadStatus {
  ERROR = 'ERROR', // Upload failed
  PENDING = 'PENDING', // Awaiting `getFileInfo` response
  SUCCESS = 'SUCCESS', // Upload finished successfully
  UPLOADING = 'UPLOADING', // Upload in progress
}

interface BaseFileUploadItem extends FileInfo {
  isSyncedWithModelValue: boolean
  // We need a stable key since the uuid can change after `getFileInfo`
  key: string
  url: string
}

export interface FileUploadItemPending extends BaseFileUploadItem {
  file: File
  status: FileUploadStatus.PENDING
}

export interface FileUploadItemUploading extends BaseFileUploadItem {
  file: File
  progress: number
  status: FileUploadStatus.UPLOADING
}

export interface FileUploadItemSuccess extends BaseFileUploadItem {
  status: FileUploadStatus.SUCCESS
}

export interface FileUploadItemError extends BaseFileUploadItem {
  errorMessage: string
  status: FileUploadStatus.ERROR
}

export type FileUploadItem
  = | FileUploadItemError
    | FileUploadItemPending
    | FileUploadItemSuccess
    | FileUploadItemUploading
