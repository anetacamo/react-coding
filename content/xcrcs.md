---
title: xcrcs
display: false
tags: [js, typescript, framework]
type: excercise
---

## Excercises

### button

A button is a special element. When you _hover_ over it, it should notify you that you can interact with it by a change in its design.

[more about states](#/css)

> In order to get a _smooth transition_ when hovering you can add in css `transition-duration: 350ms;` to a desired element.

Button sometimes is a link: that means, needs to be wrapped inside an `<a></a>` tag. But sometimes wrapping a _block_ element into an _inline_ element is not considered a best practice. Therefore using a small work-around can be recomended: Instead of using a _button_ tag `<a><button>Click me</button></a>` a class called button can be simply added to `<a>` tag : `<a class="button">Click me</a>`. Meanwhile in css:

> This also solves the problem of double tabbing for _accessibility_ - both `button` and `a href` are having `tabIndex={0}` by default

```css
button,
.button {
  border-radius: 8px;
  border: 4px solid blueviolet;
  background-color: transparent;
  color: blueviolet;
}

button:hover,
.button:hover {
  background-color: blueviolet;
  color: white;
  transition-duration: 400ms;
}
```

### A welcome screen

```html
<section>
  <div class="intro">
    <h1>Hello</h1>
    <p>Wellcome</p>
    <button>Read more</button>
  </div>
</section>
```

### an mail signature

### Adding a logo

### Build a menu

Notice a use of `<nav>` tag.

```html
<nav class="menu">
  <ul>
    <li>
      <a href="index.html">Home</a>
    </li>
    <li>
      <a href="about.html">About</a>
    </li>
    <li>
      <a href="contact.html">Contact</a>
    </li>
  </ul>
</nav>
```

#### Build a second-level menu with a logo

```html
<nav class="menu">
  <div class="logo"><a href="index.html">Home</a></div>
  <ul>
    <li>
      <a href="about.html">About</a>
    </li>
    <li>
      <a href="oatmeal.html">Oatmeal</a>
      <ul class="secondary">
        <li>
          <a href="morning.html">Morning Oatmeal</a>
        </li>
        <li>
          <a href="afternoon.html">Afternoon Oatmeal</a>
        </li>
        <li>
          <a href="evening.html">Evening Oatmeal</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="contact.html">Contact</a>
    </li>
  </ul>
</nav>
```

<nav class="test-menu">
  <div class="logo"><a href="index.html">Home</a></div>
  <ul>
    <li>
      <a href="about.html">About</a>
    </li>
    <li>
      <a href="oatmeal.html">Oatmeal</a>
      <ul class="secondary">
        <li>
          <a href="morning.html">Morning Oatmeal</a>
        </li>
        <li>
          <a href="afternoon.html">Afternoon Oatmeal</a>
        </li>
        <li>
          <a href="evening.html">Evening Oatmeal</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="contact.html">Contact</a>
    </li>
  </ul>
</nav>

#### add a hamburger menu

### Favicon & meta descriptions

### Create a custom pointer

### Make a side menu

### Coding a slider

### Custom Text-highlighting

### Build a responsive layout

```html
<body>
  <header>
    <nav>
      <div class="logo">
        <img src="" />
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  </header>

  <aside></aside>
  <main></main>

  <footer>
    <nav>
      <div class="logo">
        <img src="" />
      </div>
    </nav>
  </footer>
</body>
```

### Flexbox item list

### Carousel
