import type { Readable } from 'stream'

export abstract class FileStorage {
  abstract createTemporaryUploadUrl (
    key: string,
    mimeType: string,
    expiresInSeconds?: number,
    isPublic?: boolean
  ): Promise<string>

  abstract createTemporaryDownloadUrl (
    key: string,
    name: string,
    mimeType?: string,
    expiresInSeconds?: number
  ): Promise<string>

  abstract getPublicUrl (
    key: string
  ): string

  abstract upload (
    key: string,
    content: Buffer,
    isPublic?: boolean
  ): Promise<void>

  abstract download (
    key: string
  ): Promise<Buffer>

  abstract uploadStream (
    key: string,
    stream: Readable,
    isPublic?: boolean
  ): Promise<void>

  abstract delete (
    key: string
  ): Promise<void>
}
