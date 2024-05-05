---
title: Tables
description: How to write Tables
tags: [css]
type: learning
---

## Tables

```html
<form>
  <label for="fname">First name:</label><br />
  <input type="text" id="fname" name="fname" /><br />
  <label for="lname">Last name:</label><br />
  <input type="text" id="lname" name="lname" />
</form>
```

### Labels

_Label_ is a reference for form elements.

Important for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element.
It helps users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the `<label>` element, it toggles the radio button/checkbox.

> The `for` attribute of the `<label>` tag should be equal to the id attribute of the `<input>` element to bind them together.

### predefined input types

```html
<input type="button" />
```

<input type="button">

```html
<input type="checkbox" />
```

<input type="checkbox">

```html
<input type="color" />
```

<input type="color" />

```html
<input type="date" />
```

<input type="date" />

```html
<input type="datetime-local" />
```

<input type="datetime-local" />

```html
<input type="email" />
```

<input type="email" />

```html
<input type="file" />
```

<input type="file" />

```html
<input type="hidden" />
```

<input type="hidden" />

<input type="image" />

```html
<input type="image" />
```

<input type="month" />

```html
<input type="month" />
```

<input type="number" />

```html
<input type="number" />
```

<input type="password" />

```html
<input type="password" />
```

<input type="radio" />

```html
<input type="radio" />
```

<input type="range" />

```html
<input type="range" />
```

<input type="reset" />

```html
<input type="reset" />
```

<input type="search" />

```html
<input type="search" />
```

<input type="submit" />

```html
<input type="submit" />
```

<input type="tel" />

```html
<input type="tel" />
```

```html
<input type="text" />
```

<input type="text" />

```html
<input type="time" />
```

<input type="time" />

```html
<input type="url" />
```

<input type="url" />

```html
<input type="week" />
```

<input type="week" />

### Input attributes

- `value="your name"` an initial value for an input field

<input value="your name" />

- `readonly`

- `disabled`

- `size` The input size attribute specifies the visible width, in characters, of an input field.

The default value for size is 20.

- `maxLength`The input maxlength attribute specifies the maximum number of characters allowed in an input field.

Note: When a maxlength is set, the input field will not accept more than the specified number of characters. However, this attribute does not provide any feedback. So, if you want to alert the user, you must write JavaScript code.

- `min` & `max` The input min and max attributes specify the minimum and maximum values for an input field.

The min and max attributes work with the following input types: number, range, date, datetime-local, month, time and week.

Tip: Use the max and min attributes together to create a range of legal values.

- `multiple` specifies that the user is allowed to enter more than one value in an input field.

The multiple attribute works with the following input types: `email, and file.

- `pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"`

a regular expression that the input field's value is checked against, when the form is submitted.

> Tip: Use the global title attribute to describe the pattern to help the user.

```html
<form>
  <label for="country_code">Country code:</label>
  <input
    type="text"
    id="country_code"
    name="country_code"
    pattern="[A-Za-z]{3}"
    title="Three letter country code"
  />
</form>
```

- `placeholder="123-45-678"`
  The short hint is displayed in the input field before the user enters a value.

 <input value="123-45-678" />

- `required`
  specifies that an input field must be filled out before submitting the form.

- `step="3"`

Example: if step="3", legal numbers could be -3, 0, 3, 6, etc.

> Tip: This attribute can be used together with the max and min attributes to create a range of legal values.

- `autofocus`
  attribute specifies that an input field should automatically get focus when the page loads.

- `height: "200px"` & `width: "200px"`
  If height and width are set, the space required for the image is reserved when the page is loaded.

- `autocomplete`
