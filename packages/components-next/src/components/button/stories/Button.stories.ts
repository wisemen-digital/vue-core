import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Button from '../default-button/Button.vue';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'destructive-primary', 'destructive-secondary', 'destructive-tertiary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    iconLeft: {
      control: 'select',
      options: [null, 'plus', 'minus', 'check', 'close'],
    },
    iconRight: {
      control: 'select',
      options: [null, 'arrow-right', 'chevron-right'],
    },
    isLoading: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
  args: {
    onClick: ()=>{},
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">{{ args.children || "Button" }}</Button>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">{{ args.children || "Button" }}</Button>',
  }),
};

export const WithIcons: Story = {
  args: {
    variant: 'primary',
    iconLeft: 'plus',
    iconRight: 'arrowRight',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">{{ args.children || "Button" }}</Button>',
  }),
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    isLoading: true,
    iconLeft: 'plus',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">{{ args.children || "Loading..." }}</Button>',
  }),
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    isDisabled: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">{{ args.children || "Disabled" }}</Button>',
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">XL</Button>
        <Button size="2xl">2XL</Button>
      </div>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <Button variant="destructive-primary">Destructive Primary</Button>
          <Button variant="destructive-secondary">Destructive Secondary</Button>
          <Button variant="destructive-tertiary">Destructive Tertiary</Button>
        </div>
      </div>
    `,
  }),
};