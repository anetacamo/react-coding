---
title: Html
description: How to write HTML document
tags: [html, basics]
type: learning
published: true
---

# Writing HTML

### index.html structure

Each html file consist of _body_ and a _head_.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Homepage name</title>
    <link rel="stylesheet" href="/styles/style.css" />
    <link rel="stylesheet" href="/styles/typography.css" />
  </head>
  <body>
    this is where the actual code is written
  </body>
</html>
```

### Head

**Head** is where you define settings for your page:

- give each page a name. This name will be displayed in the browser window. This is required. `<title></title>`
- optional icon that will be displayed in the browser window (_favicon_)
- where you link the styles via `<link></link>`
- define title, image for thumbnails that will be shared at social networks _meta tags_

```html
<head>
  <title>Homepage</title>
  <link rel="stylesheet" href="/styles/style.css" />
  <link rel="stylesheet" href="/styles/typography.css" />
</head>
```

[More about head tags](/#/html-head)

### Body

**Body** is a place where you write the actual code that gets rendered into the website look

- This is done via html tags.
- Tags are named by shortcuts representing their actual content.
- for regular paragpraph text: `<p></p>`
- for fist level (biggest) heading `<h1></h1>` etc.

```html
<body>
  <h1>Homepage</h1>
  <p>Paragraph containing a lot of text</p>
</body>
```

[More about body tags](/#/html-tags)

### Comment in html

In html and css (and any other language) you can write notes to yourself or anyone else.
<br/> Every programming language has a specific way to render a comment. <br/>
Comments will be accessible in the _source code_ but will not be visible on the website.

`<!-- this is a comment in html --> `
