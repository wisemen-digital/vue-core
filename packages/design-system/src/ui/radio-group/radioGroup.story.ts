import type { StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

import RadioGroupItem from './RadioGroupItem.vue'
import RadioGroupItems from './RadioGroupItems.vue'
import RadioGroupRoot from './RadioGroupRoot.vue'

const meta = {
  title: 'Components/RadioGroup',
  tags: [
    'autodocs',
  ],
  component: RadioGroupRoot<string>,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: '',
  },
  render: () => ({
    components: {
      RadioGroupItem,
      RadioGroupItems,
      RadioGroupRoot,
    },
    setup() {
      const modelValue = ref<string | null>(null)

      return {
        modelValue,
      }
    },
    template: `
      <div class="p-xl">
        <RadioGroupRoot
          v-model="modelValue"
        >
          <RadioGroupItems>
            <RadioGroupItem
              label="Option 1"
              value="option1"
            />
            <RadioGroupItem
              label="Option 2"
              value="option2"
            />
            <RadioGroupItem
              label="Option 3"
              value="option3"
            />
          </RadioGroupItems>
        </RadioGroupRoot>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    modelValue: '',
  },
  render: () => ({
    components: {
      RadioGroupItem,
      RadioGroupItems,
      RadioGroupRoot,
    },
    setup() {
      const modelValue = ref<string | null>('option2')

      return {
        modelValue,
      }
    },
    template: `
      <div class="p-xl">
        <RadioGroupRoot
          v-model="modelValue"
          is-disabled
        >
          <RadioGroupItems>
            <RadioGroupItem
              label="Option 1"
              value="option1"
            />
            <RadioGroupItem
              label="Option 2"
              value="option2"
            />
            <RadioGroupItem
              label="Option 3"
              value="option3"
            />
          </RadioGroupItems>
        </RadioGroupRoot>
      </div>
    `,
  }),
}

export const HorizontalOrientation: Story = {
  args: {
    modelValue: '',
  },
  render: () => ({
    components: {
      RadioGroupItem,
      RadioGroupItems,
      RadioGroupRoot,
    },
    setup() {
      const modelValue = ref<string | null>(null)

      return {
        modelValue,
      }
    },
    template: `
      <div class="p-xl">
        <RadioGroupRoot
          v-model="modelValue"
          orientation="horizontal"
        >
          <RadioGroupItems>
            <div class="flex items-center gap-lg">
              <RadioGroupItem
                label="Option 1"
                value="option1"
              />
              <RadioGroupItem
                label="Option 2"
                value="option2"
              />
              <RadioGroupItem
                label="Option 3"
                value="option3"
              />
            </div>
          </RadioGroupItems>
        </RadioGroupRoot>
      </div>
    `,
  }),
}

export const WithDescriptions: Story = {
  args: {
    modelValue: '',
  },
  render: () => ({
    components: {
      RadioGroupItem,
      RadioGroupItems,
      RadioGroupRoot,
    },
    setup() {
      const modelValue = ref<string | null>(null)

      return {
        modelValue,
      }
    },
    template: `
      <div class="p-xl">
        <RadioGroupRoot
          v-model="modelValue"
        >
          <RadioGroupItems>
            <RadioGroupItem
              label="Remember me"
              value="option1"
              description="Save my login details for next time"
            />
            <RadioGroupItem
              label="Option 2"
              value="option2"
              description="This is a description for option 2"
            />
            <RadioGroupItem
              label="Option 3"
              value="option3"
              description="This is a description for option 3"
            />
          </RadioGroupItems>
        </RadioGroupRoot>
      </div>
    `,
  }),
}
