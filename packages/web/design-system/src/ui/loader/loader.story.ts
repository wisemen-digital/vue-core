import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import Loader from './Loader.vue'

const meta = {
  title: 'Components/Loader',
  tags: [
    'autodocs',
  ],
  component: Loader,
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      Loader,
    },
    template: `
    <div class="flex items-center gap-8">
      <Loader class="size-4 text-primary" />
      <Loader class="size-6 text-primary" />
      <Loader class="size-8 text-primary" />
    </div>`,
  }),
}
