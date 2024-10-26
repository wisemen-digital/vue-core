---
sidebar: auto
---

# AppDrawer

## Description

A panel that appears in front of app content to provide critical information, or actions.

## Examples

### Usage
The usage of the drawer component. A drawer should always include a title and description, which can be visually hidden if needed by wrapping them in a `<VisuallyHidden />` component.

<ComponentPreview name="app-drawer/simple" />

### Animate from trigger
You can animate the drawer from the trigger by setting the `shouldAnimateFromTrigger` prop to `true`.

<ComponentPreview name="app-drawer/animate-from-trigger" />