import { TestFileStorage } from './test/test-file-storage.js'
import { AzureBlobStorage } from './azure-blob-storage/azure-blob-storage.js'
import { FileStorageProvider } from './provider.enum.js'
import { S3 } from './s3/s3.js'
import { FileStorage } from './file-storage-provider.js'
import { exhaustiveCheck } from '#src/helpers/exhaustive-check.helper.js'
import { FileStorageOptions } from '#src/file-storage.module.js'

export function fileStorageFactory (
  options: FileStorageOptions
): FileStorage {
  switch (options.provider) {
    case FileStorageProvider.AWS_S3: {
      return new S3(options.config)
    }
    case FileStorageProvider.AZURE_BLOB_STORAGE: {
      return new AzureBlobStorage(options.config)
    }
    case FileStorageProvider.TEST: {
      return new TestFileStorage()
    }
    default:
      exhaustiveCheck(options)
  }
}
