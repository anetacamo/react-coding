---
title: NEXT project setup
description:
tags: [git]
type: learning
published: true
---

# Next Project Setup

### Create Your Project

1. **Create a folder** on your computer and name it as you like.
2. **Open your folder in VS Code**. Go to `File -> Open...`
3. **Open a terminal** inside VS Code. Go to `Terminal -> New Terminal`.
4. Generate a new React project in your folder with the following command:

```bash
npx create-next-app@latest
```

> By specifying `.` at the end, you’ll create the project in the current folder.

> if you wont do that be aware that the app will be installed into another folder where you have to navigate to before you install dependencies.

when you asked `Need to install the following packages:` press `y`

Choose all the defaults setups

#### run the server

> before you install dependencies, try to understand where are you at your project structure. Are you in the right folder? - do you see generated files or do you need to go one level lower inside the folder?

#### navigation in terminal by commands

- `ls` to list whats in your folder.
- `cd` + `filename` - move inside the folder
- `..` go a level higher

so once you are in the right place - lets run our app!

```
  yarn dev
```

or

```
  npm run dev
```

> if you need to stop the server running, press `ctrl + c`

> in terminal you can press `arrow up` to access your previously typed commands

### delete the un-deserved content inside the project.

Inside folder `app` delete everything and create those folders

```
app
  styles/
  components/
  page.js
  layout.js
```

install sass

```
yarn add sass
```

```
npm install sass
```
