import type { Component } from './getComponents'

export function addInternalDependencies({ addedComponents, availableComponents, selectedComponents }:
{ addedComponents: Component[], availableComponents: Component[], selectedComponents: Component[] }) {
  let newComponents: Component[] = []
  selectedComponents.forEach((component) => {
    component?.internalDependencies?.forEach((dependency) => {
      const dependencyComponent = availableComponents.find(component => component.name === dependency)
      if (dependencyComponent != null
        && addedComponents.find(component => component.name === dependencyComponent.name) != null
        && newComponents.find(component => component.name === dependencyComponent.name) != null) {
        newComponents.push(dependencyComponent)
      }
    })
  })
  if (newComponents.length > 0) {
    newComponents = [
      ...selectedComponents,
      ...newComponents,
      ...addInternalDependencies(
        { addedComponents: selectedComponents,
          availableComponents,
          selectedComponents: newComponents },
      ),
    ]
  }

  return [
    ...newComponents,
    ...addedComponents,
    ...selectedComponents,
  ]
}
