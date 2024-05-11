---
title: React router
description:
tags: [git]
type: learning
published: true
---

# react router

React App doesn't include page routing. \
That means there is no simple way to structure and organize the pages.

For that, _React Router_ is popular solution.

### What will we build

we will build simple project with few routes. \
blogs inside blogs will be rendered dynamically from `blogs.json`

> blogs dont have to blogs, but any kind of data. It can be pictures, projects you have worked on so you can make an online portfolio, shop items, films, todolists.

```
home
about
contact
blogs
  - blog 1
  - blog 2
  - blog 3
```

here you can see the repository with the final code:
https://github.com/anetacamo/react-router \
published web-app: https://anetacamo.github.io/react-router/

### Create your project

- create a folder on your computer in desired location and call it what you like
- open your folder in VS Code. `File -> Open...`
- open terminal inside VS Code `Terminal -> New Terminal`
- generate a new react project inside your folder with following command:

This time we will be using create-react-app instead of vite to generate the code. You should be able to use both but for minimazing potential issues I would chose the following approach.

```
npx create-react-app .
```

> by writing the `.` you will generate the code inside the folder location, if you give it a name instead it will create another folder where it will add the project.

when you asked `Need to install the following packages:` press `y`

#### run the server

inside terminal type based on your prefered package

```
yarn run start
```

or

```
npm run start
```

> if you need to stop the server running `ctrl + c`

> in terminal you can press `arrow up` to access your previously typed commands

### installing the react router

Now when your react app is running we need to install the router.

```js
npm i react-router-dom --save-dev
```

or

```js
yarn add -D react-router-dom
```

> `-D` or `--dev` is short for "development dependency," and refers to a dependency in a software project that is only needed during development and testing, but not during production or runtime, using this flag you can reduce the size of the production bundle Size. In this project, you can skip this _flag_ in your command.

Inside folder `src` delete most of the files so all you have left would be those:

```
src
  index.css
  index.js
  App.jsx
```

replace the code in `index.js`

```jsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

> First step in enabling the router is using this wrapper around our app.

### Setting up a first route

Inside `App.jsx`

We will start by creating a `<Routes></Routes>` object. Within this pair tag we will define our router model.

First route we would most likely want to have would be a homepage.
When we visit "/" we would like to render home component or page. And This is exactly what we need to tell to our first `<Route />`.

`<Route path="/" element={<Home />} />`

> Route accepts two main arguments: the path and what element to render. Where and what to render.

Lets set up this component and see if it works.

### Adding multiple routes

```jsx
<Route path="/" element={<Home />} />
<Route path="about" element={<About />} />
<Route path="contact" element={<Contact />} />
```

### Not Found page

`<Route path="*" element={<NotFound />} />`

### Nested routes

```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
```

```jsx
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Pages from "./components/Pages";
import Page from "./components/Page";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pages" element={<Pages />}>
          <Route path=":id" element={<Page />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
```

## Github

Github is a platform where you can _publish_ and _store_ your code for free.

It makes it easy to collaborate on the same project and even provides you with option to set up free domain for each project.

Instead of having your code _locally_ saved inside a folder on your own computer - Via github you can publish it online.
Other people, most likely your team, can then look at the folder with all your code, called _repository_ and add new changes to it.

> Once you upload your code there is an option to set up a free domain for your project so you can see it live. It will look like `your-user-name/your-project.github.io`

#### repository for this project

here you can browse code for this project: https://github.com/anetacamo/react-router \
or see published web-app: https://anetacamo.github.io/react-router/

### create a github account

go to https://github.com/
create and account

### Create a github repository

go to https://github.com/
on the homepage on the left side click on green button New and it will take you here https://github.com/new

- fill Repository Name
- click create repository

Now you have an empty repository on github. We will send - _push_ - some code there soon.
You can copy three lines of code in the section called `…or push an existing repository from the command line`.
Mine looks like this

```bash
git remote add origin https://github.com/anetacamo/react-router.git
git branch -M main
git push -u origin main
```

> `git remote add origin` is pointer to your created folder on github. thats how you link folder in your computer with the remote _repo_ on Github.

### Commit the latest code to GitHub

Now head back into the VS Code, your project folder and terminal (if its running stop it with `ctrl + c`) and paste the three lines of code from the previous section. Just remember to use your own `origin`.

If that worked it should have publisjed your locale code to github repository!
However last thing: you need to update the repository with your most recent changes.

```bash
git add .
git commit -m "intial commit"
git push
```

So thats it! You have your work online. Your teammates can visit your repo and if you share _collaborator rights_ with them they can also submit their changes.

## website for your project

Once you have your repository setup you can leave here.
But if you want to have actual url address with your React running project, here is the way to do it.
It requires a little bit more of setting up.

### output production build

Code you see in your repo is made for development. \
For serving a fast running website you need optimized, compressed version of your code that is not very human-readable.

For this there is `gh-pages`. Just install a package inside your project in VS Code.

```bash
yarn add -D gh-pages
```

or

```bash
npm install gh-pages --save-dev
```

### prepare for publishing

in Vs code, inside your project, find `package.json` file in the root.
And look for this code snippet

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
},
```

and after line with `lint` add those two lines:

```json
"predeploy" : "npm run build",
"deploy" : "gh-pages -d build",
```

> This will do exactly the job. From now on, anytime you run `yarn run predeploy` the optimized version of your code that the website will be built from, will get updated. and changes will be published.

Lastly, on the line 2 before `"name": "your-app-name",` you add one more line with the landing page of your app. Usually looking like this:

```json
"homepage": "https://your-user-name.github.io/your-app-name/",
```

That’s it! We‘ve finished configuring the package.json file.
Now, let’s commit our changes and push the code to our remote repository so it gets the latest changes, like so:

```bash
git add .
git commit -m "setup gh-pages"
git push
```

So this way you update your development code.

### Deployment

But from now on, we can _deploy_ or _publish_ our React application by simply running following:

```bash
npm run deploy
```

or

```bash
yarn run deploy
```

try to run this command now. \
last thing we need to set up the github domain where you can see the result.

- Go to your project repository on github. Click settings (the last item of the project menu)
- Here on the left menu `Code and automation` click `Pages`
- under `Build and deployment` -> `Branch` choose `gh-pages` and click save.
- wait few minutes and soon you will be able to see your application running on the link that should display in this section. Try to refresh

Thats it!
