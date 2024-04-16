<script setup lang="ts">
import {
  nextTick,
  onMounted,
  ref,
  useSlots,
  watch,
} from 'vue'

const props = defineProps<{
  isToggled: boolean
}>()

const hasSupportForViewTransitionsApi = document.startViewTransition !== undefined

// Watch for slot changes and start the view transition
const slots = useSlots()

const isActuallyToggled = ref<boolean>(props.isToggled)

onMounted(() => {
  if (!hasSupportForViewTransitionsApi) {
    return
  }
  const wrapper = document.querySelector('.view-transition')

  watch(() => props.isToggled, async () => {
    const from = wrapper?.children[0] as HTMLElement

    from.style.viewTransitionName = 'test'

    const transition = document.startViewTransition(async () => {
      isActuallyToggled.value = true

      await nextTick()

      from.style.viewTransitionName = ''
      from.style.opacity = '0'

      const to = wrapper?.children[0] as HTMLElement

      to.style.viewTransitionName = 'test'
    })

    await transition.finished

    const to = wrapper?.children[0] as HTMLElement
    to.style.viewTransitionName = ''
  })
})
</script>

<template>
  <div class="view-transition">
    <slot
      v-if="isActuallyToggled"
      name="a"
    />

    <slot
      v-else
      name="b"
    />
  </div>
</template>

<style>

</style>
