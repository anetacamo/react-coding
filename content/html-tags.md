---
title: Html Tags
description: List of most commonly used html tags
tags: [html, basics]
type: learning
published: true
---

# HTML tags

- HTML consists of tags.
- Tags are way to structure the content.
- They are named by shortcuts that represent content they hold.

### pair vs non-pair

> There are _pair_ or _non-pair_ elements

pair:

- `<div></div>` for paragraph
- `<p></p>` for paragraph
- `<div></div>` for divider

Those types are containers for content. They consists of a double tag: `<div>` and a closing tag `</div>` and expect to receive some content. If one of the tags is missing its partner, it will not just break the desired flow but might mess up the whole page untill the non-closed tag is closed.

> in certain situations can be also written in non-pair form `<div />`

non-pair:

- `<img src="/image.png" />`
- `<input type="text" />`

They are already representing content through its properties, they cannot contain anymore elements, therefore they are single tags.

### deafult styles

Different tags often comes with certain _default_ styles.

- _Link_ is _inline_ blue and underlined.
- _Button_ is _block_ rendered gray with thin border.

Those styles can be overwritten with css styles.

## list of tags

### div

```html
<div></div>
```

Div is a shortcut for a _divider_. We can imagine it as an - by default - unvisible empty container that can be used for anything that does not fit within the list of commonly used tags.

> _div_ is by default a block element, it means it will take the full width of the page by default. But it also has `height:0` so it wont be visible untill give custom css or content.

### images and links

| tag syntax              | default styles                                                      | description                                                                                                                                                                                                                                             |
| ----------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<img src="" alt="" />` | display: block;<br/> max-width: 100%;                               | **Images** _src_ attribute accepts both local and external links to images. _alt_ tag is important for SEO validation. That is a place to write some descriptive text about image for people with vision imparement who get the websites read out loud. |
| `<a href=""></a>`       | color: blue;<br/> text-decoration: underlined;<br/> cursor:pointer; | **Link** is a pair tag that accepts an addres placed in quotes. `href="www.google.com"` or relatively to file in your folder `href="/about.html"`                                                                                                       |

#### example of use

```html
<img src="/img/dog.png" alt="a dog eating a salad" />
<a href="/about.html" target="_blank">learn html</a>
```

> This is a link to the _local_ file called `about.html` in your folder. `target="_blank"` opens the link in new tab.

### body & Head

Each html document consists of head and body pair tag that is displayed only once wrapped inside html pair tag.

| tag syntax      | default styles                                                            | description                                                                                                                     |
| --------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `<html></html>` |                                                                           |                                                                                                                                 |
| `<body></body>` | min-height:100vh;<br/> line-height: 1;<br/>display:block;<br/>margin:8px; | **Body** wraps code of html page.                                                                                               |
| `<head></head>` | display: none;                                                            | **Head** is a place where settings of the page are defined: external documents are linked, favicon and page name is setted etc. |

### paragraphs and heading styles

| tag syntax                                                              | default styles                                                                                              | description                                                |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `<p></p>`                                                               |                                                                                                             | **Paragraph** is a common body text.                       |
| `<h1></h1>` `<h2></h2>` `<h3></h3>` `<h4></h4>` `<h5></h5>` `<h6></h6>` | font-weight: inherit;<br/> font-size: inherit;                                                              | **Headings** _h1_ to _h6_ represent six levels of headings |
| `<blockquote></blockquote>`                                             | display: block;<br/>margin-top: 1em;<br/>margin-bottom: 1em;<br/>margin-left: 40px;<br/>margin-right: 40px; | **Quotation style** highlighted paragraph                  |

> _h1_ is a main title, rendered in the biggest and boldest letters by default. It should be used only once on each page and should work as a main title of a page, for improving the SEO. _h2_ is a second level, and the higher the number the smaller and less bold letters become.

#### example of use

```html
<h1>Heading 1</h1>
<p>
  above heading is recommended to use only once per page and make it hold
  meaningful name representing the content of the page.
</p>

<h2>Heading of the second level</h2>
<p>paragraph text is used for common text</p>
<p>another paragraph text is used for common text</p>

<h2>Heading of the second level</h2>
<p>another paragraph text is used for common text</p>

<h3>Heading 3</h3>

<p>another paragraph text is used for common text</p>
<p>another paragraph text is used for common text</p>

<h2>Heading of the second level</h2>
<p>another paragraph text is used for common text</p>
<blockquote>block quote</blockquote>
```

### text highlighting

above styles are _inline_ elements, meaning they will not create a new line

| tag syntax          | description                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| `<i></i>`           | _Italic text_ Makes a text that is written within the tags italic.                                      |
| `<b></b>`           | _Bold text_ Makes a text that is written within the tags bold. It is used clearly for a design purposes |
| `<strong></strong>` | Meanwhile _Strong text_ should be used while one wants to indicate this is an important text.           |
| `<u></u>`           | _Underlined text_ Underlines a text written within the tags.                                            |
| `<em></em>`         | _Emphasized text_ Makes a text that is written within the tags emphasized.                              |

```html
<i>italic text</i>
<b>bold text</b>
<u>underlined text</u>
<em>emphasized text</em>
```

<i>italic text</i>
<b>bold text</b>
<u>underlined text</u>
<em>emphasized text</em>

### New Line

| tag syntax | description                                      |
| ---------- | ------------------------------------------------ |
| `<br />`   | _New line_ Non pair element. Creates a new line. |

### Button

| tag syntax           | description                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `<button><button />` | **Button** A text between will be rendered as a button to be clicked |

```html
<button>button with no style</button>
```

[more about button](https://www.w3schools.com/css/css3_buttons.asp)

### section tags

| tag syntax            | description                                                                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<nav></nav>`         | _Nav_ Indicates a navigation, place where the set of links pointing to most important pages are listed                                                                                         |
| `<header></header>`   | _Header_ Indicates a header, place where logo and navigation usually goes                                                                                                                      |
| `<footer></footer>`   | _Footer_ Indicates a footer, other relevant links and adittional information                                                                                                                   |
| `<section></section>` | _Section_ Indicates a new section of the page. Sections should always have a heading.                                                                                                          |
| `<address></address>` | _Address_ provides contact information for a person or people, or for an organization.                                                                                                         |
| `<article></article>` | _Article_ a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. |
| `<aside></aside>`     | _Aside_ represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.             |
| `<main></main>`       | _Main_ represents the dominant content                                                                                                                                                         |

#### example of use

```html
<header>
  <nav>
    <div>
      <img src="" alt="logo" />
    </div>
    <ul>
      <li>menu link one</li>
      <li>menu link two</li>
    </ul>
  </nav>
</header>

<main>
  <h1>main title</h1>
  <p>main content of the page</p>
</main>

<aside>
  <div>additional information, contact, addres</div>
</aside>

<footer>
  <nav>
    <ul>
      <li>menu link one</li>
      <li>menu link two</li>
    </ul>
  </nav>
</footer>
```

### LISTS

| tag syntax  | default styles                                                                                                                                           | description                              |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `<ul><ul/>` | display: block;<br/>list-style-type: disc;<br/>margin-top: 1em;<br/>margin-bottom: 1 em;<br/>margin-left: 0;<br/>margin-right: 0;<br/>padding-left: 40px | _unordered list_ - displays only bullets |
| `<ol><ol/>` | ---                                                                                                                                                      | _ordered list_ - displays numbers        |

`<ul></ul>`

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

<!-- <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol> -->

<!---
### form

If the name attribute is omitted, the value of the input field will not be sent at all.

`<label><label/>`
`<input><input/>`
`<form><form/>`
`<select><select/>`
`<option><option/>`

```html
<form action="mailto:you@yourdomain.com ">
  <label for="fname">First Name:</label>
  <input type="text" id="fname" name="fname" value="your mail" />
  <label for="email">Email:</label>
  <input type="email" name="mail" id="mail" name="mail" value="mail" />
  Select an option:
  <select>
    <option>Love</option>
    <option selected>Money</option>
    <option>Bananas</option>
  </select>
  Select an option:
  <input type="radio" id="male" name="gender" value="male" />
  <label for="male">Male</label><br />
  <input type="radio" id="female" name="gender" value="female" />
  <label for="female">Female</label><br />
  <input type="radio" id="other" name="gender" value="other" />
  <label for="other">Other</label>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
  <label for="vehicle1"> I have a bike</label><br />
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
  <label for="vehicle2"> I have a car</label><br />
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
  <label for="vehicle3"> I have a boat</label>
  <input type="submit" />
</form>
```
-->

### TABLE

| tag syntax        | description                                                   |
| ----------------- | ------------------------------------------------------------- |
| `<table></table>` | _table_ is a parent element indicating there will be a table. |
| `<tr></tr>`       | _Table row_                                                   |
| `<th></th>`       | _Table head_                                                  |
| `<td></td>`       | _Table data cell_                                             |

```html
<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>12dkk</td>
  </tr>
</table>
```

<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>12dkk</td>
  </tr>
</table></pre>

<!-- ```css
table {
  border-collapse: collapse;
}

td,
th {
  border: 4px solid blueviolet;
  padding: 8px;
}
th {
  text-align: left;
  background-color: blueviolet;
  color: white;
}

table pre {
  background-color: black;
  color: white;
}
table code {
  white-space: normal;
}
``` -->

<!-- ## More about html elements

### calling div names

in `index.html` :

```html
<div class="box-black">some content</div>
```

- Div can receive _content_ in between its tags `<div>some content<div>`
- And a _name_ by setting a class `class="box-black"`.

The name is mostly provided in order so the element can be callled by its (class)name and styled in _css document_. For example, receive a background color, width, height etc.

in `style.css` :

```css
.box-black {
  background-color: black;
  padding: 1rem;
  color: white;
}
```

Classnames are essential for keeping the content of html document structured. As the content of the page grows, a lot of elements in layout might become duplicated or very similar.

A content that should be displayed in black box is wrapped in div with class `class="box-black"`. that will have a black backround, text inside will be white etc.

This class can be reused throughout the web and applied on other elements.

```html
<div class="box-black">
  <h3>a title of a box</h3>
  <p>another text inside gray box</p>
</div>
``` -->
