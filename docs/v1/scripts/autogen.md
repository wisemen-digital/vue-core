# Automatically generated docs

## Run the script

1. You can run the script to generate docs with:
```
pnpm run docs:gen
```
> ! The script will only loop through components defined in packages/constant/components.ts

2. Make sure that for each component, a file exist with such a structure: `docs/components/component-category/component-name.md`. Let's call it the head documentation

3. The script will create a file `docs/components/folder/component-name-mate.md` with the component's meta information documented. You can then import this file in your head documentation like this:
```
<!-- @include: ./component-name-meta.md -->
```

## Automatically generated

The generated parts are:
- Playground imports (sibling of the docs file)
- Playground rendering
- Tables with Props / Events (emits) / Slots

## Custom content

You can add Other custom content in you component-name.md file
Usually consists of:
- Types definitions (optional)
- Code usage example
- Link to component source code on Github

## Components meta data

Make sure each component has available meta data:

#### For props
Example for vue-component-meta to be able to read the prop name, description, default value and isRequired information.
```
export interface AppButtonProps {
  /**
   * Whether the button is disabled.
   * @default false
   */
  isDisabled?: boolean
}
```

#### For events
Example for vue-component-meta to be able to read the event name, type and description.
```
???
```

#### For slots
Example for vue-component-meta to be able to read the slot name, type and description.
```
defineSlots<{
  /** Description */
  default: () => void
}>()
```