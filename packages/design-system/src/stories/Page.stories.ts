// eslint-disable-next-line check-file/filename-naming-convention
import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import {
  expect,
  userEvent,
  within,
} from 'storybook/test'

import MyPage from './Page.vue'

const meta = {
  title: 'Example/Page',

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  render: () => ({
    components: {
      MyPage,
    },
    template: '<my-page />',
  }),
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [
    'autodocs',
  ],
  component: MyPage,
} satisfies Meta<typeof MyPage>

export default meta
type Story = StoryObj<typeof meta>

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({
    canvasElement,
  }: any) => {
    const canvas = within(canvasElement)
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i,
    })

    await expect(loginButton).toBeInTheDocument()
    await userEvent.click(loginButton)
    await expect(loginButton).not.toBeInTheDocument()

    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i,
    })

    await expect(logoutButton).toBeInTheDocument()
  },
}

export const LoggedOut: Story = {}
