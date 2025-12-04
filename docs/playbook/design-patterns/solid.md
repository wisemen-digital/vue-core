#### [Design patterns](/playbook/design-patterns.md)

# SOLID Principles

The SOLID principles of object-oriented programming. These principles are the foundation of object-oriented design and are used to make our code more maintainable, flexible, and reusable.

## Single responsibility

> A class should have one, and only one, reason to change.

If our classes assume multiple responsibilities, they will be highly coupled thus making them more difficult to maintain.

### Example

TODO add example

## Open closed

> Modules should be open for extension but closed for modification

That means that if you want to extend a module's behavior, you won't need to modify the existing code of that module.

### Example

```Typescript
class Person {
  constructor(firstName, lastName, hobby, education, workplace, position) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hobby = hobby;
    this.education = education;
    this.workplace = workplace;
    this.position = position;
  }
}

function personFilter(persons: Person[], filterType: string): Person[] {
  if(filterType === 'firstName'){
    return persons.filter(person => person.firstName === firstName);
  }

  if(filterType === 'lastName'){
    return persons.filter(person => person.lastName === lastName);
  }

  if(filterType === 'hobby'){
    return persons.filter(person => person.hobby === hobby);
  }
}
```

The problem with personFilter function is that if we want to filter by any other new property, we have to change the internal working inside the personFilter function.

Let's solve this problem by allowing the filter to accept any prop name and allow it to directly filter it.

```Typescript
function personFilter(persons: Person[], propName: string): Person[] {
  return array.filter(element => element[propName] === value)
}
```

Now we can filter by any property we want without changing the code inside of the function.

## Liskov substitution Principles

> Subclasses should be substitutable for their base class.

### Example

TODO add example

## Interface Segregation Principle

> Clients should not be forced to depend upon interfaces that they don't use.

### Example

TODO add example

## Dependency Inversion Principles

> High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

DIP helps us reduce or eliminate tight coupling between modules in our code through the use of abstractions.

At its core, the principle advocates for two things.

The first is that essential policies and business logic should not depend on low-level, volatile details such as a database connection or file system.

Second, these lower-level concerns and components should be loosely coupled and reusable through meaningful abstractions.

### Example

TODO add example
