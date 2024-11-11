---
sidebar: auto
---

# Dialog

## Description

A popup that appears in front of app content to provide critical information, or actions.

## Examples

### Usage
The usage of the dialog component. A dialog should always include a title and description, which can be visually hidden if needed by wrapping them in a `<VisuallyHidden />` component.

<ComponentPreview name="dialog/simple" />

### Animate from trigger
You can animate the dialog from the trigger by setting the `shouldAnimateFromTrigger` prop to `true`.

<ComponentPreview name="dialog/animate-from-trigger" />