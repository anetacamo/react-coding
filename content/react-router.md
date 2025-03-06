---
title: React router
description:
tags: [git]
type: learning
published: true
---

## react router

React Router is a popular library for managing navigation in React applications. \
React App doesn't by default include page _routing_.

### what is routing?

A _route_ is a URL path in your application that’s mapped to a specific component or page. \
When users visit a route (like /about or /profile), the app renders the component associated with that path. \
_Routing_ is the system of routes.

- provides a way to define routes and associate them with specific components.
- enabling single-page applications to simulate multi-page navigation.

> With _React Router_, you can create dynamic, nested, and parameterized routes, making it easy to organize and structure your app’s pages.

### What will we build

We’ll create a simple project with several routes.

- couple of main routes
- nested route for "blogs" with:
  - A landing page (index)
  - A list of blogs rendered dynamically from data in blogs.json

```
home
about
contact
blogs
  - index
  - blog 1
  - blog 2
  - blog 3
```

here you can see the repository with the final code:
https://github.com/anetacamo/react-router \
published web-app: https://anetacamo.github.io/react-router/

> Homework: The "blogs" section doesn’t have to be about blogs—it could be any kind of data. you could use it to showcase pictures, projects for an online portfolio, shop items, films, or to-do lists.

## practical part

create your project > navigate in menu

### installing the react router

Now when your react app is running we need to install the router.

```js
npm install react-router-dom
```

or

```js
yarn add react-router-dom
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

We will start by creating a `<Routes></Routes>` object. Within this pair tag we will define our router model. That will at first consist of just one _landing page_ : homepage.

`<Route path="/"/>`

When we visit initial page of the website `www.website.com` we would most likely want to render `<Home/>` component.
And This is exactly what we need to tell to our `<Route />`.

`<Route path="/" element={<Home />} />`

```jsx
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

Lets create this, at the moment none-existent, component and see if it works.

### Adding multiple routes

> Route accepts two main arguments: the path and what element to render. Where and what to render.

So using the same logic lets add few more routes.

```jsx
<Route path="/" element={<Home />} />
<Route path="about" element={<About />} />
<Route path="contact" element={<Contact />} />
```

so now we have generated pages for urls: `www.website.com`, `www.website.com/about`, `www.website.com/contact`

### adding menu with router links

Now we have multiple routes ready.
But we have to manually write the address.
What we need is a navbar where we can click a menu item and it will navigate to the proper route.

```jsx
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <div>
        <Link to={`/`} className="menu__item menu__item--logo">
          Home
        </Link>
      </div>
      <div>
        <Link to={`/about`} className="menu__item">
          About
        </Link>
        <Link to={`/contact`} className="menu__item">
          Contact
        </Link>
      </div>
    </nav>
  );
}
```

### Not Found page

`<Route path="*" element={<NotFound />} />`

now if you write anything else then is defined in your routes, like `www.page.com/safdkjsd` it will always take you to your custom _404 page_.

### Nested routes

If we want to create pages for blogs or shopitems, we might need more levels in the navigation. So we can use urls like this: `www.page.com/blogs/01`, `www.page.com/blogs/02` or `www.page.com/shop/shoes/01`

For that we can simply oranize the routes by nesting one into another \
Nesting also creates visual representation of your routes and their content.

```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="pages" element={<Pages />}>
      <Route index element={<PageHome />} />
      <Route path="swimming" element={<Swimming />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
```

so we have just created `www.page.com/pages/index` that is shortened to `www.page.com/pages` and `www.page.com/swimming`

#### inheritance of elements

Nested route will render all of its parents elements its directly going through.
Inside `<layout/>` we have _menu_ and _breadcrumbs_. \
So each page starting with `/` will render `<Layout />` \
`<Pages/>` hold secondary menu, so all the children nested within the `/pages` route wrapper will not only render secondary menu but also breadcrumbs and primary menu.

### creting a dynamic pages

#### Dynamic Route Definition

To create a dynamic route in React Router, you can define a route path with a parameter, prefixed by a colon (:). Here’s an example:

```jsx
<Route path=":id" element={<Page />} />
```

> In this code snippet, `:id` is a dynamic segment of the URL. When the path matches this route, React Router will extract the value of id from the URL and pass it to the Page component as a prop.

so if we land on `www.page.com/pages/4` the router will figure out that id is 4.

Suppose we have a JSON file (blogs.json) that contains an array of blog posts including the _id_

```json
[
  {
    "id": 4,
    "title": "The Rise of Artificial Intelligence",
    "content": "Artificial intelligence (AI) is transforming the way we live, work, and interact with the world around us.",
    "date": "2024-05-04",
    "author": "David Rodriguez"
  }
]
```

so now we only need to find the right blog by the id number and render it in out <Page /> component.

The Page component uses the `useParams` hook from React Router to access the dynamic id parameter from the URL. It then finds the corresponding post from the JSON data and renders it.

```jsx
import { useParams } from "react-router-dom";
import postData from "../blogs.json";

export default function Page() {
  const { id } = useParams();
  const post = postData.find((post) => post.id === parseInt(id));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Published on: {post.date}</p>
      <p>Author: {post.author}</p>
    </div>
  );
}
```

In this example:

- `useParams` retrieves the id parameter from the URL.
- `postData.find` searches for the post with the matching id.

### Final App.jsx Configuration

Here’s overview of the final routing setup in App component.

```jsx
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Page from "./pages/Page";
import Pages from "./pages/Pages";
import PageHome from "./pages/PageHome";
import Swimming from "./pages/Swimming";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pages" element={<Pages />}>
          <Route index element={<PageHome />} />
          <Route path=":id" element={<Page />} />
          <Route path="swimming" element={<Swimming />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
```

> `shift + alt + o` to organize imports

what if you add the new route at the same location where dynamic route is already defined? \
How will the router now which element to render? In the newest version the router first checks where are the _predefined_ or _hardcoded_ therefore the most specific routes and treats those with priority.
