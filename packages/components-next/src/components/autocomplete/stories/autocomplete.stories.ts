import type {
  Meta,
  StoryObj,
} from '@storybook/vue3-vite'
import type { AcceptableValue } from 'reka-ui'
import { ref } from 'vue'

import Autocomplete from '@/components/autocomplete/Autocomplete.vue'

// Fake data set
const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Netherlands',
  'Belgium',
  'Switzerland',
  'Austria',
  'Sweden',
  'Norway',
  'Denmark',
  'Finland',
  'Australia',
  'New Zealand',
  'Japan',
  'South Korea',
  'Singapore',
]

const meta: Meta = {
  title: 'Components/Autocomplete',
  args: {
    displayFn: (item: AcceptableValue): string => String(item),
    items: countries,
    label: 'Country',
    placeholder: 'Search countries...',
  },
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    isSearchTermOptional: {
      control: 'boolean',
    },
    debounceTimeoutInMs: {
      control: 'number',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'centered',
  },
  tags: [
    'autodocs',
  ],
  component: Autocomplete as any,
} as Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: {
      Autocomplete,
    },
    setup(): {
      args: typeof args
      filteredCountries: typeof filteredCountries
      handleSearch: (searchTerm: string) => void
      selectedCountry: typeof selectedCountry
    } {
      const selectedCountry = ref<string | null>(null)
      const filteredCountries = ref<string[]>([])

      function handleSearch(searchTerm: string): void {
        // Simulate search delay
        setTimeout(() => {
          if (searchTerm.trim()) {
            filteredCountries.value = countries.filter((country) =>
              country.toLowerCase().includes(searchTerm.toLowerCase()))
          }
          else {
            filteredCountries.value = []
          }
        }, 100)
      }

      return {
        args,
        filteredCountries,
        handleSearch,
        selectedCountry,
      }
    },
    template: `
      <div style="width: 300px;">
        <Autocomplete
          v-bind="args"
          v-model="selectedCountry"
          :items="filteredCountries"
          @search="handleSearch"
        />
        <p v-if="selectedCountry" style="margin-top: 1rem; font-size: 0.875rem; color: #666;">
          Selected: {{ selectedCountry }}
        </p>
      </div>
    `,
  }),
}

export const WithOptionalSearch: Story = {
  args: {
    isSearchTermOptional: true,
    placeholder: 'Select or search countries...',
  },
  render: (args) => ({
    components: {
      Autocomplete,
    },
    setup(): {
      args: typeof args
      filteredCountries: typeof filteredCountries
      handleSearch: (searchTerm: string) => void
      selectedCountry: typeof selectedCountry
    } {
      const selectedCountry = ref<string | null>(null)
      const filteredCountries = ref<string[]>(countries)

      function handleSearch(searchTerm: string): void {
        if (searchTerm.trim()) {
          filteredCountries.value = countries.filter((country) =>
            country.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        else {
          filteredCountries.value = countries
        }
      }

      return {
        args,
        filteredCountries,
        handleSearch,
        selectedCountry,
      }
    },
    template: `
      <div style="width: 300px;">
        <Autocomplete
          v-bind="args"
          v-model="selectedCountry"
          :items="filteredCountries"
          @search="handleSearch"
        />
        <p v-if="selectedCountry" style="margin-top: 1rem; font-size: 0.875rem; color: #666;">
          Selected: {{ selectedCountry }}
        </p>
      </div>
    `,
  }),
}

export const LoadingState: Story = {
  args: {
    placeholder: 'Search with loading...',
  },
  render: (args) => ({
    components: {
      Autocomplete,
    },
    setup(): {
      isLoading: typeof isLoading
      args: typeof args
      filteredItems: typeof filteredItems
      handleSearch: (searchTerm: string) => void
      selectedItem: typeof selectedItem
    } {
      const selectedItem = ref<string | null>(null)
      const filteredItems = ref<string[]>([])
      const isLoading = ref<boolean>(false)

      function handleSearch(searchTerm: string): void {
        if (searchTerm.trim()) {
          isLoading.value = true
          filteredItems.value = []

          // Simulate slow API call
          setTimeout(() => {
            filteredItems.value = countries.filter((country) =>
              country.toLowerCase().includes(searchTerm.toLowerCase()))
            isLoading.value = false
          }, 2000)
        }
        else {
          filteredItems.value = []
          isLoading.value = false
        }
      }

      return {
        isLoading,
        args,
        filteredItems,
        handleSearch,
        selectedItem,
      }
    },
    template: `
      <div style="width: 300px;">
        <Autocomplete
          v-bind="args"
          v-model="selectedItem"
          :items="filteredItems"
          :is-loading="isLoading"
          @search="handleSearch"
        />
        <p v-if="selectedItem" style="margin-top: 1rem; font-size: 0.875rem; color: #666;">
          Selected: {{ selectedItem }}
        </p>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    placeholder: 'Disabled autocomplete',
  },
  render: (args) => ({
    components: {
      Autocomplete,
    },
    setup(): {
      args: typeof args
      handleSearch: () => void
      selectedItem: typeof selectedItem
    } {
      const selectedItem = ref<string | null>(null)

      function handleSearch(): void {}

      return {
        args,
        handleSearch,
        selectedItem,
      }
    },
    template: `
      <div style="width: 300px;">
        <Autocomplete
          v-bind="args"
          v-model="selectedItem"
          @search="handleSearch"
        />
      </div>
    `,
  }),
}
