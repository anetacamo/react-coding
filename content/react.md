---
title: React
description: How to write React
tags: [js, typescript, framework]
type: learning
---

React is a declarative, efficient, and flexible JavaScript library.

## how does react work?

> React uses DOM methods and a programming language, JavaScript, to listen to user events and manipulate the DOM by selecting, adding, updating, and deleting specific elements in the user interface

React injects itself by targeting first element inside html div

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>
  </body>
</html>
```

you can use regular Js to create new elements and update dom, but the code becomes really long:

here creating a heading inside `<div id="app"></div>` above

```html
<!-- index.html -->
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const headerContent = document.createTextNode('Develop. Preview. Ship. 🚀');
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```

#### HTML vs DOM

_HTML_ represents the initial page content, whereas the DOM represents the updated page content which was changed by the JavaScript code you wrote.

#### Imperative vs Declarative Programming

_imperative programming_ means writing every single command and step in code meanwhile _declarative programing_ is creating sets of commands and shortcuts that do the complex jobs.

#### JSX

React is representing html element by _JSX_. Browsers don’t understand JSX out of the box, so you’ll need a JavaScript compiler, such as a Babel

## Create react app

`create-react-app my-app`

`npm start`

`yarn start`

## lifecycle

The three phases are: Mounting, Updating, and Unmounting.

### Mounting

mounting means putting elements into the DOM.
_The constructor()_ method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

_The getDerivedStateFromProps()_ method is called right before rendering the element(s) in the DOM
It takes state as an argument, and returns an object with changes to the state.

The _render()_ method actually outputs the HTML to the DOM

The _componentDidMount()_ method is called after the component is rendered.
This is where you run statements that requires that the component is already placed in the DOM

### Updating

A component is updated whenever there is a change in the component's state or props.

- getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

The _render()_ method is required and will always be called, the others are optional and will be called if you define them.

### Unmounting

The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

The _componentWillUnmount_ method is called when the component is about to be removed from the DOM

## react hooks

A Hook is a special function that lets you “hook into” React features

### useState

enables function component to use a state feature.

`const [fruit, setFruit] = useState('banana');`

_Tip: What Do Square Brackets Mean?_
This JavaScript syntax is called “array destructuring”. It means that we’re making two new variables fruit and setFruit, where fruit is set to the first value returned by useState, and setFruit is the second. It is equivalent to this code:

```js
var fruitStateVariable = useState('banana'); // Returns a pair
var fruit = fruitStateVariable[0]; // First item in a pair
var setFruit = fruitStateVariable[1]; // Second item in a pair
```

useState returns a pair — an array with two items. The first item is the current value, and the second is a function that lets us update it. Using [0] and [1] to access them is a bit confusing because they have a specific meaning. This is why we use array destructuring instead.

### useEffect

By default, it runs both after the first render and after every update.

The Effect Hook lets you perform side effects in function components:
_Data fetching, setting up a subscription, and manually changing the DOM in React_ components are all examples of side effects.

_you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined._
something to be done after every render; after performing the DOM updates

Unlike componentDidMount or componentDidUpdate, effects scheduled with useEffect don’t block the browser from updating the screen.

## adding navigation

`npm install --save react-router-dom`
`npm i sass`

## Publish to gitHub

#### 1. Create an empty repository on GitHub.

Head over to your GitHub account and create a repository with the same name as the React project.

#### 2. Install the gh-pages package as a "dev-dependency" of the app.

```git
cd my-app
npm install gh-pages --save-dev
```

or

```git
yarn add gh-pages
```

#### 3. Add properties to package.json file.

```json
"homepage":"http://{username}.github.io/{repo-name}"
```

And at the beggining of `scritps`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

#### 4. initialize + Add GitHub repo as a remote in your local git repository.

```git
git init
git remote add origin git@github.com:anetacamo/my-app.git
```

or

```
git remote add origin https://github.com/anetacamo/my-app
```

#### 5. configure an upstream branch and set the remote as origin

After executing the command above, we can't push our code yet. First, we need to configure an upstream branch and set the remote as origin.

```git
git push --set-upstream origin master
```

#### 6. Deploy!

```git
npm run deploy
```

> This will create a branch named `gh-pages` to host your app. On the homepage property in package.json.

#### 7. Make a working repo and keep it updated

```
git add .
git commit -m "Your message"
git push origin master
```

### class vs functional component

In class components, the render method will be called, whenever the state of the components changes. On the other hand, the Functional components render the UI based on the props.

> BUT: React Hooks are a complete and better replacement for Classes

### constant component

```js
const MyComponent = () => {
    return(
      ..
    )
}

export default MyComponent
```

### functional component

```js
function MyComponent() {
    return(
      ..
    )
}

export default function MyComponent() {}
```

```js
export default function MyComponent() {
    return(
      ..
    )
}
```

```js
slides={range(1, 8).map(id => ({
    image: {
        src: `references/case-studies/citymove/carousel/${id}.png`,
    },
}))}
```

upgrading the dependency

```js
yarn upgrade react-markdown
```

dev dependency vs dependency

```

```

REact on its own is only a library that allows us to define components and does the diffing part.
React with help of renderers translates components into virtual dom, tree of elements, and keeps it updated (inserts new elements wherever they need to be inserted).
Actual DOM building (rendering) is done by renderers like ReactDOM, React Native.

When state is being updated a renderer creates an instance, represantation of the new component that has setted instance.updater

React Components are hierarchy of elements (divs, images, paragraphs etc.)

When render() method is called from the top level React translated every single element into hyerarchy - a tree of objects reflecting not just each component but the structure of whole app.
This tree of elements is kept in memory and is what is called a virtual DOM

From the virtual DOM actual DOM is being built. On initial render whole tree is built. That is an expensive process.

From now on anytime a virtual DOM is updated. React will use a Diffing algorythm to find a differences in the virtual and regular DOM.

```
console.log(App())
```

JSX gets converted into React.createElement function calls

```
$$typeof:Symbol(react.element)
key: null
props: {children: "Hello World"}
ref:null
type: "h1"
```

This way react creates instances, i.e. represantations of each component and keeps track of it
Each instance has a state and a lifecycle

### importance of keys

Keys help to optimize updating of list items. If the key names are unchanged react will not rebuild the whole component only update the new or missing item with the given key.
