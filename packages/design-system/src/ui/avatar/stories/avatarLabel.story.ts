import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'

import AvatarLabelResponsivePlayground from '@/ui/avatar/stories/AvatarLabelResponsivePlayground.vue'
import AvatarLabelSizesPlayground from '@/ui/avatar/stories/AvatarLabelSizesPlayground.vue'
import AvatarLabelVariantsPlayground from '@/ui/avatar/stories/AvatarLabelVariantsPlayground.vue'

const meta = {
  title: 'Components/Avatar Label',
  tags: [
    'autodocs',
  ],
  component: AvatarLabelSizesPlayground,
} satisfies Meta<typeof AvatarLabelSizesPlayground>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Responsive: Story = {
  render: () => ({
    components: {
      AvatarLabelResponsivePlayground,
    },
    template: '<AvatarLabelResponsivePlayground />',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: {
      AvatarLabelVariantsPlayground,
    },
    template: '<AvatarLabelVariantsPlayground />',
  }),
}
