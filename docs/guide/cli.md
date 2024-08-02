# Getting started

## Why use the CLI?

Sometimes components in the package are not flexible enough to be used in a project.
Using the CLI you can add components to your project and customize them to your needs.
Adding a component will also add the necessary dependencies to your project.

The CLI has a step by step guide to help you get started.

## Installation and commands

#### Setup basic dependencies and basic files
```bash 
pnpx @wisemen/vue-core-cli init
```

#### Add specific components
```bash
pnpx @wisemen/vue-core-cli add
```
```bash
pnpx @wisemen/vue-core-cli add button
```

#### Add all components
```bash
pnpx @wisemen/vue-core-cli add --all
```

#### Overwrite components
```bash
pnpx @wisemen/vue-core-cli add --overwrite
```

#### See installed components
```bash
pnpx @wisemen/vue-core-cli installed
```

#### See which components have been changed compared to the registry
```bash
pnpx @wisemen/vue-core-cli changes
```

#### See the specific changes made to a component compared to the registry
```bash
pnpx @wisemen/vue-core-cli di
```

#### Merge the changes from the registry into your project, using merge conflicts
```bash
pnpx @wisemen/vue-core-cli update
```
