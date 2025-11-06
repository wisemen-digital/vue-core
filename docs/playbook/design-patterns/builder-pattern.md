#### [Design patterns](/playbook/design-patterns.md)

# Builder pattern

Builder is a creational design pattern, which allows constructing complex objects step by step.

```typescript
class StringBuilder {
  result = '';

  append(value: string): StringBuilder {
    this.result += value;
    return this;
  }

  toString(): string {
    return this.result;
  }
}

const stringBuilder = new StringBuilder();

const result = stringBuilder
  .append('Test')
  .append('Wisemen')
  .append('Cool')
  .append('Chaining!')
  .append('Great times!')
  .toString();

console.log(result); // output: TestWisemenCoolChaining!Great times!
```
