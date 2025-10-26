# Clean code

There are several easy to follow rules that will help you write clean code. They are guidelines that will help you write better and more readable code.

## Comments

> Comments are the worst thing you can do to your code. They are a sign of bad code. If you need to comment your code you are doing something wrong and you're not writing readable and understandable code.

The default rule is: **no comments**. Only when doing something really weird and you want to let other people know exactly why you did that weird thing in the first place.

No commented code. No exception. Git knows everything or just write it again later.

### Exceptions

The one and only exception is when you are writing documentation or creating a library to explain the usage of a function.

```typescript
// Formats the date to dd-mm-yyyy
function formatDate(date: Date): string {
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
}
```

## Happy functions

> Writing proper functions can be a difficult task for some. Follow these guidelines to keep em' clean.

### A maximum of 4 parameters

You probably need to pass an object if you need more than 4 params.

### No flag parameters.

Split the function into 2 different functions and create a parent function that calls the correct one.

### Max 10-15 lines

You are doing to much stuff otherwise.

### Keep em pure

- Return the result.
- No side effects.

### Single responsibility

Obviously. Only one reason to change.

### The longer the function name the better.

The name should tell exactly what the function does.

### Extract duplicate code to private functions.

Avoid code duplication. Re-use small snippets.
