# ALX FrontEnd — ES6 data manipulation

0x03. ES6 data manipulation

## 1. Array Methods

## `map`

Transforms each element in an array. Returns a new array with the results.

```js
const numbers = [1, 2, 3];
const doubled = numbers.map((x) => x * 2);
console.log(doubled); // [2, 4, 6]
```

## `filter`

Filters elements based on a condition. Returns a new array with elements that pass the test.

```js
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((x) => x % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

## `reduce`

Reduces the array to a single value by applying a function. Returns the final result.

```js
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum); // 6
```

## 2. Typed Arrays

Typed arrays provide a way to work with binary data. Examples include `Int8Array`, `Uint8Array`, `Float32Array`, etc.

```js
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);
int32View[0] = 42;
console.log(int32View[0]); // 42
```

## 3. Data Structures

## `Set`

A collection of unique values. Values can be of any type.

```js
const mySet = new Set([1, 2, 2, 3]);
console.log(mySet); // Set { 1, 2, 3 }
```

## `Map`

A collection of key-value pairs with keys of any type. Maintains insertion order.

```js
const myMap = new Map();
myMap.set('name', 'EL-OUARDY');
myMap.set('age', 27);
console.log(myMap.get('name')); // EL-OUARDY
```

## `WeakSet`

Similar to `Set`, but stores objects weakly. Garbage collection removes items if no other references exist.

```js
const weakSet = new WeakSet();
const obj = { a: 1 };
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
```

## `WeakMap`

Similar to `Map`, but keys must be objects and are weakly held. Useful for private data.

```js
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // value
```

## Contact Me

**Twitter:** https://twitter.com/_ELOUARDY \
**Email:** ouadia@elouardy.com
