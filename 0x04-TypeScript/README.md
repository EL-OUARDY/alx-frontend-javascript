# ALX FrontEnd — Typescript

0x04. Typescript

## Basic Types

- Primitives: `number`, `string`, `boolean`, `any`, `void`, `null`, `undefined`
- Arrays: `number[]` or `Array<number>`
- Tuple: `let x: [string, number]`
- Enum: `enum Color {Red, Green, Blue}`

## Interfaces, Classes, and Functions

### Interfaces

```typescript
interface User {
  name: string;
  age: number;
}
```

### Classes

```typescript
class Person implements User {
  constructor(public name: string, public age: number) {}
}
```

### Functions

```typescript
function greet(user: User): string {
  return `Hello, ${user.name}!`;
}
```

## Working with DOM

```typescript
const element = document.getElementById('myElement') as HTMLElement;
element.innerHTML = 'Hello, TypeScript!';
```

## Generic Types

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

## Namespaces

```typescript
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}
```

## Declaration Merging

```typescript
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale?: number;
}
```

## Ambient Namespaces

```typescript
declare namespace MyLibrary {
  function makeGreeting(s: string): string;
  let numberOfGreetings: number;
}
```

## Nominal Typing

```typescript
type UserId = string & { readonly brand: unique symbol };

function createUserId(id: string): UserId {
  return id as UserId;
}
```

## Contact Me

**Twitter:** https://twitter.com/_ELOUARDY \
**Email:** ouadia@elouardy.com
