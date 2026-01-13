import '../src/styles/index.css'

import { defineSetupVue3 } from '@histoire/plugin-vue'

import StoryWrapper from '../src/StoryWrapper.vue'

export const setupVue3 = defineSetupVue3(({
  addWrapper,
}) => {
  addWrapper(StoryWrapper)
})
