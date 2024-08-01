# ALX FrontEnd — EcmaScript 6

0x00. ES6 Basics

## What is ES6?

ES6, or ECMAScript 2015, is the sixth edition of the ECMAScript standard. It introduced many new features to JavaScript, improving the language's functionality and readability.

## New Features Introduced in ES6

1. **Let and Const**: New ways to declare variables with block scope.

2. **Arrow Functions**: Shorter syntax for function expressions.

3. **Template Literals**: Enhanced string literals.

4. **Destructuring**: Extract values from arrays or objects.

5. **Default Parameters**: Set default values for function parameters.

6. **Rest and Spread**: Handle variable numbers of arguments.

7. **Classes**: Syntax for defining classes.

8. **Modules**: Support for modular code.

9. **Iterators and For-Of**: Iterate over data collections.

## Difference Between a Constant and a Variable

- **Variable**: Declared using `var` or `let`, and its value can be changed.

- **Constant**: Declared using `const`, and its value cannot be reassigned.

```javascript
let age = 25;

const birthYear = 1998;

age = 26; // OK

birthYear = 1999; // Error
```

## Block-Scoped Variables

Variables declared with `let` or `const` are scoped to the block in which they are defined.

```javascript
if (true) {
  let blockVar = 'I am block-scoped';

  const blockConst = 'I am also block-scoped';
}

console.log(blockVar); // Error

console.log(blockConst); // Error
```

## Arrow Functions and Default Parameters

Arrow functions provide a shorter syntax for function expressions and automatically bind `this`.

Default parameters can be used in arrow functions.

```javascript
const add = (a, b = 1) => a + b;

console.log(add(5)); // 6
```

## Rest and Spread Function Parameters

- **Rest Parameters**: Collect arguments into an array.

- **Spread Parameters**: Expand an array into individual elements.

```javascript
// Rest Parameters

const sum = (...numbers) => numbers.reduce((a, b) => a + b);

console.log(sum(1, 2, 3, 4)); // 10

// Spread Parameters

const arr = [1, 2, 3];

const newArr = [...arr, 4, 5];

console.log(newArr); // [1, 2, 3, 4, 5]
```

## String Templating

Template literals use backticks \` and allow embedded expressions.

```javascript
const name = 'El_Ouardy';

const greeting = `Hello, ${name}!`;

console.log(greeting); // Hello, El_Ouardy!
```

## Object Creation and Properties

ES6 allows shorthand property names and methods.

```javascript
const name = 'El_Ouardy';

const age = 26;

const person = {
  name,
  age,
  greet() {
    return 'Hello!';
  },
};

console.log(person.name); // El_Ouardy

console.log(person.greet()); // Hello!
```

## Iterators and For-Of Loops

Iterators are objects that define a sequence and potentially a return value upon completion. The `for-of` loop iterates over iterable objects.

```javascript
const numbers = [1, 2, 3];

for (const num of numbers) {
  console.log(num);
}

// 1

// 2

// 3
```

## Contact Me

**Twitter:** https://twitter.com/_ELOUARDY \
**Email:** ouadia@el-ouardy.com
