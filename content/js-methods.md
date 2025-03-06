---
title: JS methods
tags: [js, basics]
type: learning
---

# JS methods

## string methods

```js
const txt = "Hello there";
```

| code                       | result     | description                                                                                                                                                              |
| -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `txt.length`               | `11`       | retuns length of string                                                                                                                                                  |
| `txt.indexOf("there")`     | `6`        | returns the index of the first letter from the first occurrence of searched pattern (_there_). Both _indexOf()_, and _lastIndexOf()_ return -1 if the text is not found. |
| `txt.indexOf("there", 3)`  | `2`        | optional _second parameter_ (3) as the starting position for the search. Both _indexOf()_, and _lastIndexOf()_ cannot take _regular expressions_.                        |
| `txt.lastIndexOf("there")` | `6`        | returns the index of the last occurrence of a specified text                                                                                                             |
| `txt.search("there")`      | `6`        | Works as indexOf - but cannot take a second start position argument.                                                                                                     |
| `txt.slice(3, 6)`          | `lo`       | will slice out the section of characters                                                                                                                                 |
| `txt.slice(-3)`            | `th`       | If a parameter is negative, the position is counted from the end of the string.                                                                                          |
| `txt.slice(3)`             | `lo there` | If you omit the second parameter, the method will slice out the rest of the string:                                                                                      |

| code                  | result   | description                                                                                                                                                                     |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `txt.substring(2, 3)` | `llo th` | arguments represent the _starting and ending indexes_. Cannot accept negative indexes.                                                                                          |
| `txt.substr(2, 4)`    | `llo`    | arguments represent the _starting index_ and _the number of characters_ to include in the returned string. If the first parameter is negative, the position counts from the end |

| code                           | result           | description                                                                               |
| ------------------------------ | ---------------- | ----------------------------------------------------------------------------------------- |
| `txt.replace("Hello", "Bye")`  | `Bye there`      | replaces the first match. By default, the `replace()` method is case sensitive.           |
| `txt.replace(/HELLO/i, "Bye")` | `Bye there`      | `/i` is a regular expression that perfrorms case insensitive search when added like this. |
| `txt.replace(/HELLO/g, "Bye")` | `Bye there`      | `/g` means to replace all the matches                                                     |
| `txt.toUpperCase()`            | `HELLO THERE`    | uppercases the string                                                                     |
| `txt.trim()`                   | `Hello there`    | removes whitespace from both sides of a string                                            |
| `txt.charAt(1)`                | `e`              | returns character on the given position                                                   |
| `txt.charCode(2)`              | `72`             | returns a UTF-16 code of a character on a given position                                  |
| `txt.split(" ")`               | `[hello, there]` | converting string to an array by empty spaces                                             |

## Numbers

> If you add a number and a string, the result will be a _string concatenation_ that means all the variables will become one string.

The operations are always done one by one from left to right - so if you add a number to a number to a string - first number and number will result into a number and then when string is added to that number it will result into a string.

```js
var x = 10;
var y = 20;
var z = "The result is: " + x + y; //The result is: 1020
var a = x + y + "is the result"; //30 is the result
```

JavaScript will try to convert numerous strings to numbers in all numeric operations except `+`:
JavaScript uses the + operator to concatenate the strings.

```js
const random = Math.random();
const round =  Math.round(22.4)  function returns the largest integer less than or equal to a given number.
```

> `Math.random()` returns a random number between 0 (inclusive), and 1 (exclusive):.

```js
x = 1234.5678;
```

| code                | result             | description                                                                        |
| ------------------- | ------------------ | ---------------------------------------------------------------------------------- |
| `x.toString()`      | `"1234.5678"`      | convert number into string                                                         |
| `x.toFixed(2)`      | `1234.56`          | returns a string, with the number written with a specified number of decimals:     |
| `x.toPrecision(1)`  | `1e+3`             | Returns a string, with a rounded number into a specified length:                   |
| `x.toPrecision(4)`  | `1235`             |
| `x.toPrecision(10)` | `1234.567800`      |
| `x.padStart(6,0)`   | `"000001234.5678"` | converts into a string and adds _number of_(6) _characters_(0) before _x_          |
| `x.padEnd(4,"c")`   | `"1234.5678ccc"`   | converts into a string and adds _number of_(4) _characters_("c") to the end of _x_ |

| code                     | result  | description                                                                                 |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------- |
| `parseFloat("10")`       | `10`    | parses a string and returns a number. Spaces are allowed. Only the first number is returned |
| `parseFloat("10.33")`    | `10.33` |
| `parseFloat("10 20 30")` | `10`    |
| `parseFloat("10 years")` | `10`    |

### Arrays

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple"];
```

| code                | result                                  | description                                                      |
| ------------------- | --------------------------------------- | ---------------------------------------------------------------- |
| `fruits[0]`         | `"Banana"`                              | accessing an array intem by its index                            |
| `fruits.toString()` | `"Banana, Orange, Lemon, Apple, Mango"` | converts an array to a string of (comma separated) array values. |

#### adding and removing items

| code                   | result                                            | description                                                                                                                                        |
| ---------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fruits.push("Mango")` | `["Banana", "Orange", "Lemon", "Apple", "Mango"]` | adds a new element ("Mango") to the end of fruits array. The push() method returns the new array length                                            |
| `fruits.pop()`         | `["Banana", "Orange", "Lemon",]`                  | Removes the last element ("Mango") from fruits. The pop() method returns the value that was "popped out".                                          |
| `delete fruits[0]`     | `["Orange", "Lemon", "Apple"]`                    | Deletes element on the specified position                                                                                                          |
| `fruits.shift()`       | `["Orange", "Lemon", "Apple"]`                    | method removes the first element and "shifts" all other elements to a lower index. The `shift()` method returns the string that was "shifted out": |

### spread operator

_spread operator_ does similar job to `array.concat(diffArray)`

```js
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combined = [...first, ...second];
```

> result 1,2,3,4,5,6

Spread operator is useful especially when multiple items need to be inserted into the array & also an easy to clone the array:

```js
const combined = [...first, ...second, "7"];

const clone = [...first];
```

Same can be also done for _objects_

```js
const first = { name: "Emilia" };
const second = { job: "CEO" };

const combined = { ...first, ...second, location: "Guadalajara" };
```

| code                                   | result                                                  | description                                                                                                                                                                                                                                                                                         |
| -------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fruits.splice(2, 0, "Mango", "Kiwi")` | ["Banana", "Orange", "Mango", "Kiwi", "Lemon", "Apple"] | _first parameter_ (2) defines the position where new elements should be added (spliced in). _(0)_ defines how many elements should be removed. The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added. The splice() method returns an array with the deleted items.      |
| `fruits.splice(0, 1)`                  | [ "Orange", "Lemon", "Apple"]                           | Removes the first element of fruits                                                                                                                                                                                                                                                                 |
| `fruits.slice(1, 3)`                   | [ "Orange", "Lemon", "Apple"]                           | The slice() method slices out a piece of an array into a new array. This example slices out a part of an array starting from array element 1 ("Orange"). _3_ is optional argument how many to slice. The slice() method creates a new array. It does not remove any elements from the source array. |

#### map function

a way to _iterate_ through every single item in array

```js
const fruits = fruits.map((fruit) => <li>{fruit}</li>);
```

#### Array sorting

| code                     | result                                   | description                                                               |
| ------------------------ | ---------------------------------------- | ------------------------------------------------------------------------- |
| fruits.sort();           | ["Apple", "Banana", "Lemon","Orange", ]  | Sorts the elements of fruits alphabeticallly                              |
| fruits.sort().reverse(); | [ "Orange", "Lemon", "Banana", "Apple" ] | First sort the elements of fruits. Then reverse the order of the elements |

> if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". _You can fix this by providing a compare function:_

```js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});

points.sort(function (a, b) {
  return b - a;
}); // descending order
```

#### The Compare Function

```js
((a, b) => {return a - b}}
```

`sort` consist of compare function that is applied on each two items in an array untill everything is sorted.

- When comparing 40 and 100, the sort() method calls the compare function(40, 100).
- The function calculates 40 - 100 (a - b), and sorts the values according to the returned (negative, zero, positive) value.
- and since the result is negative (-60), the sort function will sort 40 as a value lower than 100.

## Objects

```js
var cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
```

### Sorting objects by their properities

compare function of the object's numeric values

```js
cars.sort((a, b) => {
  a.year - b.year;
});
```

compare function of the object's phabeticall valuers

```js
cars.sort((a, b) => {
  var x = a.type.toLowerCase();
  var y = b.type.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
```

### object destructuring

```js
const street = adress.street;
const city = adress.city;
const land = adress.country;
```

> the third item in the list uses also a variable name change. So from now on in the code you can just reference it as a `land`

```js
const { street, city, country: land } = address;
```

### this in javascript

_This_ keyword refers to the _whole object_ inside which its defined.

When called outside of a function where it is defined - it will return the _whole window object_ - an object where it is defined. Or _undefined_ - when strictMode is enabled

> _strictMode_ prohibits some syntax likely to be defined in future versions of ECMAScript. It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object)

In JS _all functions are objects_ - they have properties and methods we can use.

#### _bind method_

```js
person.walk();
```

returns `undefined` or a _window object_

```js
const walk = person.walk.bind(person);
walk();
```

bind sets _this_ to point to the _object_ that it is referenced in its brackets.

#### arrow functions and this

Arrow functions do not rebind _this_ keyword.

```js
const person = {
  talk() {
    setTimeout(() => console.log(this), 1000);
  },
};
```

here, setTimeout is a _standalone function_. That means it is called _outside_ of an object, therefore, by default _this_ returns the window object.

> BUT - since we use _arrow function_ this will return the person object.
