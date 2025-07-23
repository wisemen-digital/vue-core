# File Upload

An unstyled component for uploading files to S3.

<ComponentPreview name="file-upload/examples/main" />

## Anatomy

```vue
<script setup lang="ts">
import {
  VcFileUploadRoot,
  VcFileUploadTrigger,
  VcFileUploadItem,
  VcFileUploadItemReplace,
  VcFileUploadItemRemove,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcFileUploadRoot v-slot="{ items }">
    <VcFileUploadTrigger />

    <VcFileUploadItem
      v-for="item in items"
      :key="item.key"
      :item="item"
    >
      <VcFileUploadItemReplace />
      <VcFileUploadItemRemove />
    </VcFileUploadItem>
  </VcFileUploadRoot>
</template>
```

<!-- @include: ./file-upload-meta.md -->