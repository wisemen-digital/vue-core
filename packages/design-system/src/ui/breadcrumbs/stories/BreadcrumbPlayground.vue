<script setup lang="ts">
import {
  User01Icon,
  Users01Icon,
} from '@wisemen/vue-core-icons'

import BreadcrumbItem from '@/ui/breadcrumbs/BreadcrumbItem.vue'
import BreadcrumbItems from '@/ui/breadcrumbs/BreadcrumbItems.vue'
import BreadcrumbRoot from '@/ui/breadcrumbs/BreadcrumbRoot.vue'
import BreadcrumbSeperator from '@/ui/breadcrumbs/BreadcrumbSeperator.vue'
</script>

<template>
  <BreadcrumbRoot>
    <BreadcrumbItems>
      <BreadcrumbItem
        :icon="Users01Icon"
        label="Users"
        to="/"
      />

      <BreadcrumbSeperator />

      <BreadcrumbItem
        :icon="User01Icon"
        label="Jeroen"
        to="/"
      />

      <BreadcrumbSeperator />

      <BreadcrumbItem label="Projects" />
    </BreadcrumbItems>
  </BreadcrumbRoot>
</template>
