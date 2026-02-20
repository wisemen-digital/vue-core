import { Readable } from 'node:stream'
import { Injectable } from '@nestjs/common'
import { FileStorage } from '#src/providers/file-storage-provider.js'

@Injectable()
export class TestFileStorage extends FileStorage {
  createTemporaryUploadUrl (
    _key: string,
    _mimeType: string,
    _expiresInSeconds?: number
  ): Promise<string> {
    return Promise.resolve('https://local.test/upload-url')
  }

  createTemporaryDownloadUrl (
    _key: string,
    _name: string,
    _mimeType?: string,
    _expiresInSeconds?: number
  ): Promise<string> {
    return Promise.resolve('https://local.test/download-url')
  }

  getPublicUrl (
    _key: string
  ): string {
    return 'https://local.test/public-url'
  }

  upload (_key: string, _content: Buffer): Promise<void> {
    return Promise.resolve()
  }

  download (_key: string): Promise<Buffer> {
    return Promise.resolve(Buffer.from('test'))
  }

  uploadStream (_key: string, _stream: Readable): Promise<void> {
    return Promise.resolve()
  }

  delete (_key: string): Promise<void> {
    return Promise.resolve()
  }
}
