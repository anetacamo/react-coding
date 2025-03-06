---
title: React and SPA
description:
tags: [git]
type: learning
published: true
---

# choosing right project setup

## React and SPA

React by itself is mostly used to build a _single-page application (SPA)_,
meaning we no longer have multiple HTML files like `index.html`, `about.html` and `contact.html`. - Instead, everything runs on a single `index.html`.

when user clicks `about` on menu, we don’t load a new `about.html` page. Instead, we dynamically show a component with the "About" page content.
This makes navigation fast and smooth since no new pages are fetched from the server.

However, this also means we need to handle routing ourselves (e.g., with React Router) and manage SEO-related metadata manually.

> Nowadays there are tools like Next.js. Next.js solves these issues by offering built-in routing, server-side rendering (SSR), static site generation (SSG), and better SEO support—making React apps more efficient and search-friendly.

## SSG or SPA?

_Static Site Generation (SSG)_ Ideal for websites with content that doesn't change frequently.

SSG pre-builds your website at build time, generates the pages for you during build and then you just ask for the right ones and get them. Undemanding to host.

Before anyone visits your website, all the pages are already written and ready to be shown instantly. This makes your site very fast and cheap to host because there’s no extra work needed when someone visits.

- ideal for: blogs, portfolio, company website.
- Next.js with react

_Single Page Application (SPA)_
SPAs work more like an app on your phone. Instead of loading a new page every time, the site updates content dynamically as you interact with it. This makes for a smooth, app-like experience but can be slower to load initially.

- Perfect for calculator, to do list, forms, interactive games and excercises
- Only react
