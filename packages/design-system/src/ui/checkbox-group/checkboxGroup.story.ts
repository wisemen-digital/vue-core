import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import { ref } from 'vue'

import CheckboxGroup from './CheckboxGroup.vue'
import CheckboxGroupCheckbox from './CheckboxGroupCheckbox.vue'
import CheckboxGroupIndeterminateCheckbox from './CheckboxGroupIndeterminateCheckbox.vue'
import CheckboxGroupRoot from './CheckboxGroupRoot.vue'

const meta = {
  title: 'Components/CheckboxGroup',
  tags: [
    'autodocs',
  ],
  component: CheckboxGroupRoot,
} satisfies Meta<typeof CheckboxGroupRoot>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      CheckboxGroup,
      CheckboxGroupCheckbox,
      CheckboxGroupIndeterminateCheckbox,
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
        <CheckboxGroup>
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
          </CheckboxGroup>
        </CheckboxGroupRoot>
      </div>
    `,
  }),
}
