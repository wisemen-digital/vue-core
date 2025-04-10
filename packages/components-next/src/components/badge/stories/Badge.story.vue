<script setup lang="ts">
import Badge from '@/components/badge/Badge.vue'
</script>

<template>
  <Story title="Badge">
    <Badge
      :is-removable="true"
      variant="brand"
      size="sm"
      icon="checkCircle"
    >
      Label
    </Badge>

    <Badge
      :is-removable="true"
      variant="brand"
      size="md"
      icon="checkCircle"
    >
      Label
    </Badge>

    <Badge
      :is-removable="true"
      variant="brand"
      size="lg"
      icon="checkCircle"
    >
      Label
    </Badge>

    <Badge
      :is-removable="true"
      variant="success"
      icon="checkCircle"
    >
      Label
    </Badge>

    <Badge
      variant="warning"
      icon="alertCircle"
    >
      Label
    </Badge>

    <Badge
      variant="error"
      icon="alertCircle"
    >
      Label
    </Badge>
  </Story>
</template>
