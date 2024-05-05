---
title: Css
description: How to write css
menu: true
type: learning
---

# How to write css

## Link and create files

Styles are defined in the files ending with `.css`

Those css file/s are linked in the head of **html document** we want to style. Filenames are case sensitive. Here is the only one file called `style.css` being linked.

```html
<head>
  <title></title>
  <link rel="stylesheet" href="/style.css" />
</head>
```

First, we need to reference an element from html document that we want to style. We have a three paragraphs in `index.html`.

```html
<head>
  <title></title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div>
    <p class="highligted">first paragraph is violet</p>
    <p>second paragraph is gray</p>
    <p>third paragraph is gray</p>
  </div>
</body>
```

And we want them to be all in gray font, the first paragraph violet. Default color is black. So this is is what we have rendered in the browser without any styles applied:

first paragraph is violet<br />
second paragraph is gray<br />
third paragraph is gray

So now in `style.css` we are giving all the paragraphs `p { ... }` _gray color_ by writing `color:gray;` into curly parenthesis.

Then, we will call an element with `class='blueviolet'` by writing `.highlighted { ... }` and giving it `color: blueviolet;`. So the previously setted color:gray on all paragraphs will be overwritten with _blueviolet_ color for this specific case with class. See the most commonly used pairs of css properties and its values <a href='#css'>here</a>.

## Referencing an element

> We can reference all preset tag names like `h1, li, p... { ... }`or a specific class name given to any element, for example `.highligted { ... }`.

A class in css document is always called by writing a dot before its name. Tag names do not have a dot.

```css
p {
  color: gray;
}
.highlighted {
  color: blueviolet;
}
```

## Overwriting

<p class='gray'>
  <span class='blueviolet'>first paragraph is violet</span><br />
  second paragraph is gray<br />
  third paragraph is gray
</p> 
    
> **The latest style defined in the css document will always overwrite previously defined styles.** See how the colors render differently when the order is reversed. First we give elements with class `.highlighted` **blueviolet** color, but then we actually overwrite this style by giving color **gray** to all paragraphs.

```css
.highlighted {
  color: blueviolet;
}
p {
  color: gray;
}
```

### Comment in css

`*/ this is a comment /*`

## Media query

Media query define a _breakpoint_ in a code when the design will behave differently. If you have three columns, at some point they might become way too small to fit its content on the very small devices. By setting a breakpoint you can make it appear as one column only when the screen is too small.

```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

```css
@media (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

#### commonly used breakpoins

There are a ton of devices on the market so we can’t and we shouldn’t define fixed breakpoints for each of them.

- 320px — 480px: Mobile devices.
- 481px — 768px: iPads, Tablets.
- 769px — 1024px: Small screens, laptops.
- 1025px — 1200px: Desktops, large screens.
- 1201px and more — Extra large screens, TV.

#### media types

If we don’t apply a media type, the @ media rule selects all types of devices by default. Otherwise, Media types come right after the @ media rule. There are many kinds of devices but we can group them into 4 categories:

all — for all media types
print — for printers
screen — for computer screens, tablets and, smart-phones
speech — for screen readers that “read” the page out loud

```css
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

## CSS pseudo classes

A pseudo-class is used to define a special state of an element.

For example, it can be used to:

- Style an element when a user mouses over it
- Style visited and unvisited links differently
- Style an element when it gets focus

<button>Hover over me</button>
<input placeholder="write in me" />

### States

In the design there are elements you can interact with.
When you _hover_ over such an element, for example _link_ or _button_, it should notify you that you can interact with it by a change in its design.
This kind of mouse event - when you scroll over it - is called `hover`.

You can add this _state_ to any of an elements in css file by `element:hover { ... }` and style it the way you want to.

> In order to get a _Smooth transition_ when hovering you can add in css `transition-duration: 500ms;` to a desired element.

| state  | description                                                                               |
| ------ | ----------------------------------------------------------------------------------------- |
| :hover | Selects elements when the mouse scrolls over                                              |
| :focus | Selects element that has focus on - for example when for field is being filled by writing |

#### link states

| state     | description                 |
| --------- | --------------------------- |
| a:visited | Selects all visited links   |
| a:link    | Selects all unvisited links |
| a:active  | Selects the active link     |

### Selectors

Other then referencing a specific div/s or an element there is a useful list of ways to reference more specific occurencies, like first child of certain element or a first occurency of a certain type.

| state          | description                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------- |
| :target        | #news:target Selects the current active #news element (clicked on a URL containing that anchor name) |
| :not(selector) | :not(p) Selects every element that is not a `<p>` element                                            |

| selector           | description                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------ |
| :first-child       | p:first-child > Selects every `<p>` elements that is the first child of its parent         |
| :nth-child(n)      | p:nth-child(2) Selects every paragraph that is the _second_ child of its parent            |
| :last-child        | Selects every element that is the last child of its parent                                 |
| :only-child        | Selects every element that is the only child of its parent                                 |
| :nth-last-child(n) | Selects every element that is the second child of its parent, counting from the last child |

> Same can be applied for the types:

| selector       | description                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------- |
| :first-of-type | p:first-of-type > Selects every `<p>` element that is the first `<p>` element of its parent |

#### input selectors

- input:checked
- input:disabled
- input:enabled
- input:invalid
- input:valid
- input:optional
- input:out-of-range
- input:required

> The HTML `<html>` element represents the root (top-level element) of an HTML document, so it is also referred to as the root element
