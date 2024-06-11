import prompts from 'prompts'

import type { Component } from './getComponents'

export async function promptForComponents(components: Component[]) {
  const { components: selectedComponents } = await prompts({
    choices: components
      .map((component) => ({
        title: component.component,
        value: component,
      })),
    hint: 'Space to select. A to select all. I to invert selection.',
    instructions: false,
    message: 'Which component(s) would you like to add?',
    name: 'components',
    type: 'autocompleteMultiselect',
  })

  return selectedComponents
}

export async function promptForComponent(components: (Component | undefined)[]) {
  const allComponents = components.filter((component) => component) as Component[]
  const { component: selectedComponent } = await prompts({
    choices: allComponents
      .map((component) => ({
        title: component?.component,
        value: component,
      })),
    hint: 'Space to select.',
    instructions: false,
    message: 'Which component would you like to check?',
    name: 'component',
    type: 'autocomplete',
  })

  return selectedComponent
}
