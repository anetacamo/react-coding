---
title: Html Head
description: How to write HTML document
menu: true
tags: [html, basics]
type: learning
---

# Html Head

**Head** is where you define settings for your page:

- give page a name to be displayed in the browser window. This is required. `<title></title>`
- icon that will be displayed in the browser window (_favicon_)
- where you link the styles `<link />`
- define text, image and subtitles for sharing at social networks _meta tags_

### Additioanal head tags

Feeding the head right data will result into ranking higher at the search results. Following data should have clear and simple messages about the page and its content.

_Charset_ Defines the _character set_ used:

```html
<meta charset="UTF-8" />
```

Main set of meta tags

```html
<meta name="description" content="Free Web tutorials" />
<meta name="keywords" content="HTML, CSS, JavaScript" />
<meta name="author" content="John Doe" />
```

The viewport is the user's visible area of a web page.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

The refresh attribute enables to refresh page in certain period

```html
<meta http-equiv="refresh" content="30" />
```

The `<base>` element specifies the base URL and/or target for all relative URLs in a page.
The `<base>` tag must have either an href or a target attribute present, or both.
There can only be one single <base> element in a document!

```html
<base href="https://www.w3schools.com/" target="_blank" />
```

#### Facebook, LinkedIn & Twitter sharing data

Most of the platforms are looking for the following tags in order to create previews when the html page is linked/shared. _og_ is a short cut for _openGraph data_
The _locale_ determines the language of the webpage. Defaults to en_US. use `og:locale:alternate` if you have other available language translations available.

```html
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
<meta property="og:title" content="The Rock" />
<meta
  property="og:description"
  content="Sean Connery found fame and fortune as the
           suave, sophisticated British agent, James Bond."
/>
<meta property="og:locale" content="da_DK" />
<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
```

#### Twitter additional data

- _card type_ is a way that a post will be displayed: "summary", "summary_large_image", "app", or "player".
- _site_ is twitter account for the website used in the card footer.
- _creator_ creator's twittwer username

```html
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@nytimesbits" />
<meta name="twitter:creator" content="@nickbilton" />
```
