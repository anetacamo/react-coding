---
title: Sass
tags: [css]
type: learning
published: false
---

# Sass

```css
.btn-red {
  border-color: var(--red);
  color: var(--red);
}
.btn-yellow {
  border-color: var(--yellow);
  color: var(--yellow);
}
.btn-blue {
  border-color: var(--blue);
  color: var(--blue);
}
.btn-white {
  border-color: white;
  color: white;
}
.btn-black {
  border-color: black;
  color: rgb(68, 41, 41);
}
```

### mixins

```css
@mixin button($color) {
  .btn-#{$color} {
    border-color: $color;
    color: $color;
  }
}

@include button("red");
@include button("yellow");
@include button("blue");
@include button("lightgray");
@include button("white");
@include button("black");
```

### each loop

```css
$colors: "red", "yellow", "blue", "lightgray", "black", "white";

@each $color in $colors {
  .btn-#{$color} {
    border-color: $color;
    color: $color;
  }
}
```
