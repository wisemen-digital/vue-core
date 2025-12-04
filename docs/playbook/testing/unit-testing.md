#### [Testing](/playbook/testing.md)

# Unit testing

Unit testing is a software testing method by which individual units of source code are tested to determine whether they are fit for use.
A unit is the smallest testable part of an application.
In procedural programming, a unit may be an individual function or procedure.
In object-oriented programming, the smallest unit is a method, which may belong to a base/super class, abstract class or derived/child class.

## What are good unit tests?

- **Fast** - Unit tests should be fast. They should run quickly. When tests run slow, you won't want to run them frequently. If you don't run them frequently, you won't find problems early enough to fix them easily.
- **Isolated** - Unit tests should be isolated from other tests. There should be no dependencies across tests. Each test should be able to be run independently, and in any order.
- **Repeatable** - Unit tests should be repeatable in any environment and at any time. If a unit test fails, it should be easy to reproduce the failure by rerunning the unit test.

## Installation

### Vitest

Vitest is a simple and lightweight unit testing library for Vue 3.

#### Installation

```bash
npm install vitest --save-dev
```

#### Usage

```ts
import { describe, expect, test } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
  test('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
```
