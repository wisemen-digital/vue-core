# Automatically generated docs

The automatically generated docs are composed of 2 parts.
These 2 parts are separated by a comment to explain where the generated part and the custom parts are separated.

## Run the script

You can run the script to generate docs with:
```
pnpm run docs:gen
```
> ! The script will only loop through components defined in packages/constant/components.ts


## Automatically generated

The generated parts are:
- File title
- Playground imports (sibling of the docs file)
- Playground rendering
- Tables with Props / Events (emits) / Slots

## Custom content

The custom content is free content that will not be rewritten by running the script to generate the docs.
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

## Run the script with files that already have some content
If you want to run the script in a file that already has content, for example code usage, just paste this line before the section you wish to keep. The script will regenerate docuemnation as precised above, ignore everything after this line, allowing you to keep existing sections as needed.
```
<!-- !Custom! Anything after this line can be edited manually: please only add code usage and link to full source code on Github -->
```