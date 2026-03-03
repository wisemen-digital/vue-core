import type { StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'

import CheckboxGroupCheckbox from './CheckboxGroupCheckbox.vue'
import CheckboxGroupIndeterminateCheckbox from './CheckboxGroupIndeterminateCheckbox.vue'
import CheckboxGroupItems from './CheckboxGroupItems.vue'
import CheckboxGroupRoot from './CheckboxGroupRoot.vue'

const meta = {
  title: 'Components/CheckboxGroup',
  tags: [
    'autodocs',
  ],
  component: CheckboxGroupRoot<string>,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: [],
  },
  render: () => ({
    components: {
      CheckboxGroupCheckbox,
      CheckboxGroupIndeterminateCheckbox,
      CheckboxGroupItems,
      CheckboxGroupRoot,
    },
    setup() {
      const modelValue = ref<string[]>([])

      return {
        modelValue,
      }
    },
    template: `
      <div class="p-xl">
        <CheckboxGroupRoot
          v-model="modelValue"
        >
        <CheckboxGroupItems>
            <CheckboxGroupCheckbox
              label="option 1"
              value="option1"
            />
            <CheckboxGroupCheckbox
              label="option 2"
              value="option2"
            />
            <CheckboxGroupCheckbox
              label="option 3"
              value="option3"
            />
          </CheckboxGroupItems>
        </CheckboxGroupRoot>
      </div>
    `,
  }),
}

export const Indeterminate: Story = {
  args: {
    modelValue: [],
  },
  render: () => ({
    components: {
      CheckboxGroupCheckbox,
      CheckboxGroupIndeterminateCheckbox,
      CheckboxGroupItems,
      CheckboxGroupRoot,
    },
    setup() {
      const modelValue = ref<string[]>([])

      return {
        modelValue,
      }
    },
    template: `
      <div class="p-xl">
        <CheckboxGroupRoot
          v-model="modelValue"
        >
          <CheckboxGroupIndeterminateCheckbox
            label="Select All"
          />
        <CheckboxGroupItems>
            <CheckboxGroupCheckbox
              label="option 1"
              value="option1"
            />
            <CheckboxGroupCheckbox
              label="option 2"
              value="option2"
            />
            <CheckboxGroupCheckbox
              label="option 3"
              value="option3"
            />
          </CheckboxGroupItems>
        </CheckboxGroupRoot>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    modelValue: [],
  },
  render: () => ({
    components: {
      CheckboxGroupCheckbox,
      CheckboxGroupIndeterminateCheckbox,
      CheckboxGroupItems,
      CheckboxGroupRoot,
    },
    setup() {
      const modelValue = ref<string[]>([
        'option2',
      ])

      return {
        modelValue,
      }
    },
    template: `
      <div class="p-xl">
        <CheckboxGroupRoot
          v-model="modelValue"
          is-disabled
        >
          <CheckboxGroupIndeterminateCheckbox
            label="Select All"
          />
        <CheckboxGroupItems>
            <CheckboxGroupCheckbox
              label="option 1"
              value="option1"
            />
            <CheckboxGroupCheckbox
              label="option 2"
              value="option2"
            />
            <CheckboxGroupCheckbox
              label="option 3"
              value="option3"
            />
          </CheckboxGroupItems>
        </CheckboxGroupRoot>
      </div>
    `,
  }),
}

export const HorizontalOrientation: Story = {
  args: {
    modelValue: [],
  },
  render: () => ({
    components: {
      CheckboxGroupCheckbox,
      CheckboxGroupIndeterminateCheckbox,
      CheckboxGroupItems,
      CheckboxGroupRoot,
    },
    setup() {
      const modelValue = ref<string[]>([])

      return {
        modelValue,
      }
    },
    template: `
      <div class="p-xl">
        <CheckboxGroupRoot
          v-model="modelValue"
          orientation="horizontal"
        >
          <div class="flex flex-col items-start gap-lg">
            <CheckboxGroupIndeterminateCheckbox
              label="Select All"
            />
            <CheckboxGroupItems>
              <div class="flex items-center gap-lg">
                <CheckboxGroupCheckbox
                  label="option 1"
                  value="option1"
                />
                <CheckboxGroupCheckbox
                  label="option 2"
                  value="option2"
                />
                <CheckboxGroupCheckbox
                  label="option 3"
                  value="option3"
                />
              </div>
            </CheckboxGroupItems>
          </div>
        </CheckboxGroupRoot>
      </div>
    `,
  }),
}
