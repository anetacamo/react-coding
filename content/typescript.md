---
title: Typescript
tags: [js, typescript]
type: learning
---

## What is Typescript?

### Typescript advantages

- can catch errors already at _compile time_ [right in your editor while you code] - before _runtime_.
- constantly gives you feedback and lists option of what you can pass where during coding

### Browsers do not understand typescript

Typescript needs to be transpiled into javascript. So you will nedd a TS compiler in order to run it.

### Staring Typescript

Installing typescript on Mac via npm:
`sudo npm install -g typescript`

check compilers version
`tsc --version `

1. transpile the code
   `tsc file.ts`

2. execute the code
   `node file.js`

you can also combine those two in one command
`tsc file.ts | node file.js`

#### add to existing React Project

1. Install typescript and related package updates

`yarn add typescript @types/node @types/react @types/react-dom @types/jest`

`npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

2. rename all javascript files to typescript files. `index.js` to `index.tsx` and restart the server

> Use `.ts` for pure TypeScript files.
> Use `.tsx` for files which contain JSX.
> For example, a React component would be .tsx, but a file containing helper functions would be .ts.

3. When starting the servers there might be missing dependencies and errors requiring installing packages updates. try to follow instrauctions in terminal.

## Coding Typescript

### var vs let

In JS variable declared with the `var` keyword is scoped to the nearest function - and will be only available inside that function.
`let` would be available anywhere.

# conclusion: always use `let` keyword

### types

by default a value of a type is any
`number`

`boolean`

`string`

`any`

#### enum

```typescript
enum Color {
  Red,
  Blue,
  Green,
}
letBgColor = Color.Red;
```

the first item automatically gets number 0, each subsequent element gets incremented value

#### array

```typescript
let array: any[]: = ['hi', 22, false]

```

### Type assertions

When coding with TS you need to define what variable are you working with.

```typescript
let message = (<string>message).endsWith('c');

let message2 = (message as string).endsWith('c');
```

### arrow function

```typescript
let log = function (message) {
  console.log(message);
};
```

ommit function keyword and - in case of only one line code a brackets & transform into an arrow function! :

```typescript
let log = (message) => console.log(message);
```

### Inline anotation

```typescript
let drawPoint = (point { x: number, y: number}) => {};
```

This kind of function definition can be a little bit too descriptive when used multiple time - so we can take _object literals_: `point { x: number, y: number}` and move them into and _interface_

```typescript
interface Point {
  x: number;
  y: number;
}

let drawPoint = (point: Point) => {};
```

### Class

Class groups variables (in OOP called _fields_) and functions (called _methods_) that are _highly related_

## React && TypeScript

first you need to initialize your project

```
create-react-app name-of-your-project --typescript
```

or add to the existing project

```git
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

```typescript
interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  fn: (bob: string) => string;
  person: Person;
}

export const TextField: RectFC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  );
};
```

Props and Person are now items that are mandatory to be passed with the parent component via props. A questionmark in name definition determines they are optional and will not throw an error when ommitted.

```typescript
const [count, setCount] = useState<{ text: string }>({ text: 'hello' });
setCount({'hello'});
```

you can actually define multiple types that can be accepted in the useState

```typescript

interface TextNode {
  text: string
}

export const TextField: RectFC<Props> = ({}) => {

  const [count, setCount] = useState<TextNode>({ text: 'hello' });
  setCount({'hello'});

  ...
};
```

```typescript
interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: RectFC<Props> = ({ handleChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLInputElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
```
