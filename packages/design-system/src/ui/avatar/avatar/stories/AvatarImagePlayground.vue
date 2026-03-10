<script setup lang="ts">
import Avatar from '@/ui/avatar/avatar/Avatar.vue'
import RowLayout from '@/ui/row-layout/RowLayout.vue'

const profileSrc = '../../../storybook-assets/profile-picture.jpg'
</script>

<template>
  <RowLayout
    gap="xl"
    align="start"
  >
    <Avatar
      :src="profileSrc"
      name="Olivia Roy"
      size="xs"
    />
    <Avatar
      :src="profileSrc"
      name="Olivia Roy"
      size="sm"
    />
    <Avatar
      :src="profileSrc"
      name="Olivia Roy"
      size="md"
    />
    <Avatar
      :src="profileSrc"
      name="Olivia Roy"
      size="lg"
    />
    <Avatar
      :src="profileSrc"
      name="Olivia Roy"
      size="xl"
    />
    <Avatar
      :src="profileSrc"
      name="Olivia Roy"
      size="2xl"
    />
  </RowLayout>
</template>
