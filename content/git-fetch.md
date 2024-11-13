---
title: React fetch
description:
tags: [git]
type: learning
published: true
---

# fetch API

## intro

## previous lesson + check in

- how did it go with the react router?
- how is it going with coding in general?
- any questions?

## what is fetch API?

The `fetch` API is a **native JavaScript API** for making HTTP requests from the browser. It is promise-based, meaning it handles requests and responses asynchronously.

- **API** stands for Application Programming Interface: a set of rules and tools for building software and applications.
- There are many free APIs you can use:
  - [Chuck Norris API](https://api.chucknorris.io/jokes/random)
  - [The Cat API](https://api.thecatapi.com/v1/images/search)

### What Will We Build?

We’ll create a simple project where we will fetch a list of users from [https://reqres.in/api/users](https://reqres.in/api/users) and display them in our React app.

### Install Helpers

You might find it useful to install the JSON Viewer extension for Chrome to help visualize JSON data.

## Project Setup

### Create Your Project

1. **Create a folder** on your computer and name it as you like.
2. **Open your folder in VS Code**. Go to `File -> Open...`
3. **Open a terminal** inside VS Code. Go to `Terminal -> New Terminal`.
4. Generate a new React project in your folder with the following command:

   ```bash
   npm create vite@latest .
   ```

> By specifying . at the end, you’ll create the project in the current folder.

when you asked `Need to install the following packages:` press `y`
✔ Package name: … lesson-2-react-router
✔ Select a framework: › React
✔ Select a variant: › JavaScript

#### run the server

Done. Now run:

```
  yarn install
  yarn dev
```

or

```
  npm install
  npm run dev
```

> if you need to stop the server running, press `ctrl + c`

> in terminal you can press `arrow up` to access your previously typed commands

delete the content inside the project.

### useEffect hook

to fetch api we simply need to find the endpoint on the internet.

```js
console.log(fetch("https://reqres.in/api/users"));
```

this will return a _promise_.

fetch is promise based, that means we need to use `async - await` OR `.then() method` to resolve or read the received data

```js
fetch("https://reqres.in/api/users").then((res) => console.log(res));
```

this will log out _response object_

response object contains amongst other parameters a `status code` which tells us if the request was a success - or shares feedback where did it go wrong.

`200` means a successfull fetch.

Our data is stored in another parameter - called `body`. The data is not directly readable - to resolve it we need to call a `.json()` method

after the response is parsed we can finally receive our data.

```js
.then(data => console.log(data))
```

the full code:

```js
fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

In React, the useEffect hook allows us to perform side effects in our components, such as fetching data.

```js
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the data for debugging
        setUsers(data.data); // Access the data array directly
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="app-container">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            className="user-avatar"
          />
          <h3 className="user-name">
            {user.first_name} {user.last_name}
          </h3>
          <p className="user-email">{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
```

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

:root {
  --color-primary: black;
  --color-sec: blueviolet;
  --border: 2px solid black;
}

* {
  list-style: none;
  font-size: 14px;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  letter-spacing: 0.2px;
  line-height: 1.4;
}

.app-container {
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.user-card {
  border: var(--border);
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  min-width: 200px;
  box-shadow: 6px 6px 0px var(--color-sec);
}

.user-avatar {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 10px;
  border: var(--border);
}

.user-name,
.user-email {
  margin: 5px 0;
}

.user-email {
  color: var(--color-sec);
}
```
