# ALX FrontEnd — ES6 Promises

0x01. ES6 Promises

# JavaScript Promises and Async/Await

## What is a Promise?

A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It allows you to write asynchronous code that looks synchronous and handles asynchronous results more easily.

## How Promises Work

A Promise has three states:

1. **Pending**: Initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

## Why Use Promises?

Promises help manage asynchronous operations by providing a way to handle success or failure cases. They can improve code readability and avoid callback hell.

## Methods of Promise

### `then()`: Handling Success

```javascript
promise
  .then(function (result) {
    // handle success
  })
  .catch(function (error) {
    // handle error
  });
```

### `resolve()`: Creating a Fulfilled Promise

```javascript
const resolvedPromise = Promise.resolve('Success!');
resolvedPromise.then((result) => console.log(result)); // Output: Success!
```

### `catch()`: Handling Errors

```javascript
promise.catch(function (error) {
  // handle error
});
```

### `finally()`: Executing Code Regardless of the Outcome

```javascript
promise.finally(() => {
  // cleanup code
});
```

## Throw / Try

When using Promises, you can handle errors with try...catch inside async functions.

```javascript
async function example() {
  try {
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

## The `await` Operator

**await** pauses the execution of an async function until the Promise is resolved or rejected.

```javascript
async function fetchData() {
  let data = await fetch('https://api.example.com/data');
  let json = await data.json();
  console.log(json);
}
```

## Using Async Functions

An async function always returns a Promise. It allows the use of await to simplify asynchronous code.

```javascript
async function fetchData() {
  return 'Data';
}

fetchData().then((result) => console.log(result)); // Output: Data
```

## Example Combining Everything

```javascript
async function processData() {
  try {
    let data = await fetch('https://api.example.com/data');
    let json = await data.json();
    console.log(json);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    console.log('Process finished');
  }
}
processData();
```

With these concepts, you can handle asynchronous operations more effectively and write cleaner, more manageable code.

## Contact Me

**Twitter:** https://twitter.com/_ELOUARDY \
**Email:** ouadia@elouardy.com
