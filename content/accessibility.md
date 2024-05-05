---
title: Accessibility
description: Accessibility
tags: [css, html, basics]
type: learning
---

# Accessibility

_also referred to as a11y_

> is the design and creation of websites that can be used by everyone

Which means including people with certain degree of vision imapairment or problems with motorics.
There are two important tools to have in mind:

- screen readers
- navigation via keyboard

### Navigate through page via key

- Navigating through page by _tab_
- Going back by _shift + tab_
- Clicking with _enter_
- scrolling with _space_

### tabIndex

tabIndex is a global attribute that allows an HTML element to receive focus
Links buttons and headings should be all accessible chronologically by _tab_

`<a></a>` and `<button></button>` elements have this feature by default built in.<br/>
But if you for some reason need to use a different element that is not being accessed OR want to remove an element from this flow,

you can do so by `tab-index`

`tab-index: -1` placed on element will skip it => remove it from the flow.

`tab-index: 0` placed on element will make it clickable.

Manipulations to this can however, mess up with natural and logical flow of the site and make it less accessible and confussing.

### Skiplinks or Skip Navigation Links

Skip link is a hidden button that only comes to a view when focused.

That means when a person start interacting with a tab. It should link to a content and help user skip the navigation.
This assists and speeds up keyboard navigation.

### WAI-ARIA

_Web Accessibility Initiative - Accessible Rich Internet Applications_

> Note that all aria-\* HTML attributes are fully supported in JSX. Whereas most DOM properties and attributes in React are camelCased, these attributes should be hyphen-cased (also known as kebab-case, lisp-case, etc) as they are in plain HTML

```jsx
<input
  type='text'
  aria-label={labelText}
  aria-required='true'
  onChange={onchangeHandler}
  value={inputValue}
  name='name'
/>
```

### Semantic HTML & landmark elements

Using self-descriptive tags like headings, buttons, paragraphs etc.. often does the job.

Use of landmark elements, such as `<main>` and `<aside>`, to demarcate page regions as assistive technology allow the user to quickly navigate to these sections. => [content sectioning](/#/html-tags#section-tags)

### ARIA Landmark roles and HTML5 implicit mapping

_ARIA landmark roles_ is another level how to organize and identify the contents od the page.

These landmarks will be natively conveyed by proper HTML usage. So those should only be used to correct mistakes in structuring of the pages.

`<div role="banner"></div> `

| Landmark Role | HTML Element                                                                |
| ------------- | --------------------------------------------------------------------------- |
| banner        | `<header>` (if not a child of a sectioning element or the main.)            |
| complementary | `<aside>`                                                                   |
| contentinfo   | `<footer>` (if not a child of a sectioning element or the main.)            |
| form          | `<form>` (if provided an accessible name via aria-label or aria-labelledby) |
| main          | `<main>` (only use one per page)                                            |
| navigation    | `<nav>`                                                                     |
| region        | `<section>`                                                                 |
| search        | none                                                                        |

Implementing landmarks in your documents is a straightforward process.
Simply add the role attribute referencing the appropriate landmark value.

#### banner

Typically the primary _header_ of your page.

Containing the name of the site along with other globally available content. It MUST be scoped to the body element, and not within another sectioning element, or the main of the document.

#### search

Use on the primary search form. Often, but not always, found within a banner. If you have multiple search landmarks in a document it would be good to provide them with unique accessible names to indicate how they differ.

```html
<div role="search">...</div>
```

#### main

Designates the primary content area of the current document. Only one main landmark should be exposed to users at a time.

#### navigation

Used to promote an area as a navigation. Combine with a unique aria-label to provide context of the navigation's purpose. e.g. `<nav aria-label="primary">`.

#### contentinfo

Typically the "footer" of your page that contains information about the parent document such as copyrights and links to privacy statements.

### Form Labeling

Every HTML form control, such as `<input>` and `<textarea>`, should be labeled accessibly.

- `for=""` attribute.
- In JSX `htmlFor=""`

given to label and referencing the connected input's id.

```html
<label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="name" />
```

### Focus Control

A web application can be fully operated with the keyboard only:
Elements like button,

### Notifying the user of errors

Error situations need to be understood by all users. The following link shows us how to expose error texts to screen readers as well:
