# Textarea

## Use cases

<BulletList
  :items="[
    {
      description: 'When you want to allow users to input a long text.',
      variant: 'good',
    },
    {
      description: 'When you want to allow users to input a short text.',
      variant: 'bad',
      link: {
        label: 'Text Field',
        href: '/vue-core/components/text-field/text-field.html'
      }
    },
  ]"
/>

<!-- @include: ./textarea-meta.md -->


## Examples

### Basic usage
The most basic usage of the textarea component.

<ComponentPreview name="textarea/basic" />


## Style Config

These are all the properties you can customize for the textarea

```ts

interface TextareaStyleConfig {
  '--textarea-bg-color-default': string
  '--textarea-bg-color-disabled': string
  '--textarea-bg-color-error': string
  '--textarea-bg-color-focus': string
  '--textarea-bg-color-hover': string

  '--textarea-border-bottom-color-default': string
  '--textarea-border-bottom-color-disabled': string
  '--textarea-border-bottom-color-error': string
  '--textarea-border-bottom-color-focus': string
  '--textarea-border-bottom-color-hover': string
  
  '--textarea-border-left-color-default': string
  '--textarea-border-left-color-disabled': string
  '--textarea-border-left-color-error': string
  '--textarea-border-left-color-focus': string
  '--textarea-border-left-color-hover': string
  
  '--textarea-border-radius-bottom-left-default': string
  '--textarea-border-radius-bottom-right-default': string
  '--textarea-border-radius-top-left-default': string
  '--textarea-border-radius-top-right-default': string
  
  '--textarea-border-right-color-default': string
  '--textarea-border-right-color-disabled': string
  '--textarea-border-right-color-error': string
  '--textarea-border-right-color-focus': string
  '--textarea-border-right-color-hover': string
  
  '--textarea-border-top-color-default': string
  '--textarea-border-top-color-disabled': string
  '--textarea-border-top-color-error': string
  '--textarea-border-top-color-focus': string
  '--textarea-border-top-color-hover': string
  
  '--textarea-font-size-default': string
  '--textarea-font-weight-default': string
  '--textarea-line-height-default': string
  
  '--textarea-max-height-default': string
  '--textarea-min-height-default': string
  
  '--textarea-padding-x-default': string
  '--textarea-padding-y-default': string
  
  '--textarea-placeholder-color-default': string
  '--textarea-placeholder-color-disabled': string
  '--textarea-placeholder-color-error': string
  '--textarea-placeholder-color-focus': string
  '--textarea-placeholder-color-hover': string
  
  '--textarea-ring-color-error': string
  '--textarea-ring-color-focus': string
  '--textarea-ring-offset-color-focus': string
  
  '--textarea-shadow-default': string
  '--textarea-shadow-disabled': string
  '--textarea-shadow-error': string
  '--textarea-shadow-focus': string
  '--textarea-shadow-hover': string
  
  '--textarea-text-color-default': string
  '--textarea-text-color-disabled': string
  '--textarea-text-color-error': string
  '--textarea-text-color-focus': string
  '--textarea-text-color-hover': string
}
```