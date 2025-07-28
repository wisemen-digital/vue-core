# Getting Started with @wisemen/vue-core

## Installation

To get started with `@wisemen/vue-core`, first install the package by running the following command:

```bash
pnpm i @wisemen/vue-core
```

## Adding your own icons

See the <a href="/vue-core/guide/extending-icons.html">Extending icons</a> details

## Setting Up Styles

See the <a href="/vue-core/guide/styling.html#style-configuration-api">Style configuration</a> details

## Provide global configuration

To provide global configuration to your components, see the <a href="/vue-core/components/config-provider/config-provider.html">ConfigProvider</a> component.

To provide theme configuration to your components, see the <a href="/vue-core/components/theme-provider/theme-provider.html">ThemeProvider</a> component.

Some components might break if you do not provide these configurations. Both `Providers` should be added in your App.vue, wrapping your whole application.
