# File Upload

An unstyled component for uploading files to S3.

## Anatomy

```vue
<script setup lang="ts">
import {
  FileUploadRoot,
  FileUploadTrigger,
  FileUploadItem,
  FileUploadItemReplace,
  FileUploadItemRemove,
} from '@wisemen/vue-core-components'
</script>

<template>
  <FileUploadRoot v-slot="{ items }">
    <FileUploadTrigger />

    <FileUploadItem
      v-for="item in items"
      :key="item.id"
      :item="item"
    >
      <FileUploadItemReplace />
      <FileUploadItemRemove />
    </FileUploadItem>
  </FileUploadRoot>
</template>
```

<!-- @include: ./file-upload-meta.md -->