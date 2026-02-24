import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import BreadcrumbPlayground from '@/ui/breadcrumbs/BreadcrumbPlayground.vue'

const meta = {
  title: 'Components/Breadcrumbs',
  tags: [
    'autodocs',
  ],
  component: BreadcrumbPlayground,
} satisfies Meta<typeof BreadcrumbPlayground>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
