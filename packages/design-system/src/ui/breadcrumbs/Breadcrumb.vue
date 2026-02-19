<script setup lang="ts">
import { HomeLineIcon } from '@wisemen/vue-core-icons'

import BreadcrumbIcon from '@/ui/breadcrumbs/BreadcrumbIcon.vue'
import BreadcrumbItems from '@/ui/breadcrumbs/BreadcrumbItems.vue'
import BreadcrumbLink from '@/ui/breadcrumbs/BreadcrumbLink.vue'
import BreadcrumbRoot from '@/ui/breadcrumbs/BreadcrumbRoot.vue'
import BreadcrumbSeperator from '@/ui/breadcrumbs/BreadcrumbSeperator.vue'
import BreadcrumbText from '@/ui/breadcrumbs/BreadcrumbText.vue'
</script>

<template>
  <BreadcrumbRoot>
    <BreadcrumbItems>
      <!-- Items maken -> die icon text en icon only supporten -->
      <BreadcrumbIcon
        :icon="HomeLineIcon"
        to="/"
      />

      <BreadcrumbSeperator />

      <BreadcrumbLink
        to="/"
        label="Home"
      />

      <BreadcrumbSeperator />

      <BreadcrumbText label="Team" />
    </BreadcrumbItems>
  </BreadcrumbRoot>
</template>
