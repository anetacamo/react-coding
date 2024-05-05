---
title: Javascript
tags: [js, basics]
type: learning
---

## about JS

1995, Brandan Eich developed a new scripting language in just 10 days. It was originally named Mocha, but quickly became known as LiveScript and, later, _JavaScript_.

> JavaScript is already running in your browser on your computer, on your tablet, and on your smart-phone.

In order to run - JS needs a JavaScript engine:

- `V8` for Chrome & Opera.
- `SpiderMonkey` for Firefox.
- `Chakra` for IE
- `ChakraCore` for Microsoft Edge
- `Nitro and SquirrelFish` for Safari, etc.

## Getting started

#### Linking

1.) javascript code is stored in files with `.js` ending.

2.) In order to link the script - it needs to be referenced in html document. Scripts can be placed both in (usually end of) `<body>`, or in the `<head>`.

```html
<script src="file.js"></script>
```

#### Targeting the html

3.) in the body of the html file where the script was just referenced, you can add an element you would like to change: `<p id="target">This text will be changed</p>`

> _id_ is a different way to reference the right element from _class_. _id_ can only be used once in each html document and therefore sure to not mis-target a different element. when referencing it in css file instead of `.class` you use `#id`.

#### Calling/Triggering the action

4.) You will also need some kind of trigger to start this change `execute the script` - here, a button click event: `<button id="trigger">Change text now!</button>`. It can also work for a page load, time interval etc.

6.) in js, we need to reference `store` those two html elements we just created. For that we will use _variables_. Variables can store values, like numbers, letters, or represent objects:

```js
var element = document.getElementById("idName");
```

In our code we have two elements to reference

a button to click:

```js
const trigger = document.getElementById("trigger");
```

and a text element to change:

```js
const target = document.getElementById("target");
```

7.) click the trigger

```js
trigger.onclick = () => (target.innerHTML = "YOU CLICKED ME!");
```

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="file.js"></script>
  </head>
  <body>
    <p id="target">This text will be changed</p>
    <button id="trigger">Change text!</button>
  </body>
</html>
```

## Javascript Data Types

JavaScript _variables_ are containers for storing data values

```js
const name = "Andrea"; // string
const age = 48; // number
```

Javascript _data types_

- strings
- numbers
- booleans
- arrays
- objects

### strings

JavaScript _strings_ are used for storing and manipulating text.

```js
const name = "Johny";
const mood = "furious";
```

You can combine _variable_ with string:

#### string interpolation

```js
console.log(`hello ${name}`);
```

### numbers

```js
const x = 22;
const y = 5;
const z = x + y;
```

#### _Integers_

- _Integers_ are a type of numbers
- numbers without a period or exponent notation
- accurate up to 15 digits.

The maximum number of decimals is 17

### booleans

Booleans can only have two values: _true_ or _false_.

```js
const thirsty = true;
```

### arrays

- JavaScript arrays are lists of items.
- They are written within square brackets.
- Array items are separated by commas.

```js
const family = ["uncle", "granddad", "cousin"];
```

### objects

- _Objects_ contain sets of methods and properties
- those are defined via `key`: `value` pairs separated by commas
- written within `{ }` brackets.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};
```

acessing object properities

```js
objectName.propertyName;
objectName["propertyName"];
```

> Arrays use numbered indexes. Objects use named indexes.

## Methods

A JavaScript function, also called method, is a block of code designed to perform a particular task.

```js
myFunction = (n1, n2) => n1 * n2;
```

A JavaScript function is executed when "something" invokes it (calls it).

```js
console.log(myFunction(4, 3));
```

> `console.log` is a very straight forward way to see the result: it prints the result into a browser's /or other program's/ console

```js
alert(myFunction(4, 3));
```

> `alert` will print the result into the dialog in the browser where the code is ran.

### Arrow functions

regular function syntax:

```js
const square = function (number) {
  return number * number;
};
```

arrow function syntax:

```js
const square = (number) => number * number;
```

> if the body of our function includes only one line and return the value we can ommit the parenthesis and return keyword

### Call back functions

A callback function is a function which is:

- accessible by another function
- is invoked after the first function if that first function completes

> a function that is "called at the back" of the function it is passed into.

Maybe a better name would be a "call after" function. This construct is very useful for asynchronous behaviour where we want an activity to take place whenever a previous event completes.

- Call it
- Wait for the result
- Continue once the result comes in

```js
const myCalculator = ((num1, num2, myCallback) => {
  let sum = num1 + num2;
  myCallback(sum))
}
```

### ASYNC

The keyword async before a function makes the function return a promise:

```js
async function sayHi() {
  return "Hello";
}
```

the way that hello is returned is actually looking like this: `return Promise.resolve("Hello");`

```js
sayHi().then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  }
);
```

### AWAIT

The keyword await before a function makes the function wait for a promise:

- can only be used _inside an async_ function.

```js
let value = await promise;
```

#### getting a file

```js
async function getFile() {
  let myPromise = new Promise((myResolve, myReject) => {
    let req = new XMLHttpRequest();
    req.open("GET", "mycar.html");
    req.onload = () => {
      req.status == 200 ? myResolve(req.response) : myResolve("File not Found");
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();
```

#### waiting for a timeout

```js
async function myDisplay() {
  let myPromise = new Promise((myResolve, myReject) => {
    setTimeout(() => {
      myResolve("I love You !!");
    }, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}
```

myDisplay();

### variables

- _var_ accessible outside of the block where its defined.
- _let_ only accesible inside the block to which it is scoped
- _const_ cannot be reassigned

> use `const` over `let`. Throw away `var`

### Index

> _index_ represents a chronologicall location of an element in the list of item starting on 0 - works for both characters in strings and items in arrays

### Regular expressions

> _Regular expressions_ are used to perform pattern-matching and "search-and-replace" functions on text.

```javascript
const search = /HI/i;
```

`/HI/i` is a _regular expression_.
`HI` is a _pattern_ to be used in a search.
`i` is a _modifier_ (modifies the search to be case-insensitive).

#### Modifiers

| code | description                                                                          |
| ---- | ------------------------------------------------------------------------------------ |
| `g`  | Perform a _global match_ find all matches rather than stopping after the first match |
| `i`  | Perform case-insensitive matching                                                    |
| `m`  | Perform multiline matching                                                           |

#### Brackets

> _Brackets_ are used to find a range of characters:

| code   | description                                                 |
| ------ | ----------------------------------------------------------- |
| [abc]  | Find any character between the brackets                     |
| [^0-9] | Find any character NOT between the brackets (any non-digit) |

#### Metacharacters

Metacharacters are characters with a special meaning:

| code | description                                                |
| ---- | ---------------------------------------------------------- |
| .    | Find a single character, except newline or line terminator |
| \w   | Find a word character                                      |
| \W   | Find a non-word character                                  |
| \d   | Find a digit                                               |
| \D   | Find a non-digit character                                 |
| \s   | Find a whitespace character                                |
| \0   | Find a NULL character                                      |

#### Quantifiers

| code   | description                                                    |
| ------ | -------------------------------------------------------------- |
| n+     | Matches any string that contains at least one n                |
| n\*    | Matches any string that contains zero or more occurrences of n |
| n?     | Matches any string that contains zero or one occurrences of n  |
| n{X}   | Matches any string that contains a sequence of X n's           |
| n{X,Y} | Matches any string that contains a sequence of X to Y n's      |
| n{X,}  | Matches any string that contains a sequence of at least X n's  |
| n\$    | Matches any string with n at the end of it                     |
| ^n     | Matches any string with n at the beginning of it               |
| ?=n    | Matches any string that is followed by a specific string n     |
| ?!n    | Matches any string that is not followed by a specific string n |

[more about regular expressions](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)
