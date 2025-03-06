---
title: Deploy React to github
description:
tags: [git]
type: learning
published: true
---

# Publishing your React App to github

## Github

Github is a platform where you can _publish_ and _store_ your code for free.

It makes it easy to collaborate on the same project and even provides you with option to set up free domain for each project.

Instead of having your code _locally_ saved inside a folder on your own computer - Via github you can publish it online.
Other people, most likely your team, can then look at the folder with all your code, called _repository_ and add new changes to it.

> Once you upload your code there is an option to set up a free domain for your project so you can see it live. It will look like `your-user-name/your-project.github.io`

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
