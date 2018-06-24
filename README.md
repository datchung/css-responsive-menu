## What is it?

A responsive navigation menu written in CSS, no JavaScript used. The styles are pretty barebones, only the required ones are implemented, which keeps things light. You can use your own styles on top of what is here to make it look how you want it to.

In larger browser windows, the menu items are shown horizontally. In smaller browser windows, menu items are hidden until the 'Menu' is clicked. To see this in action, try resizing the width of your browser and observe the topmost menu bar.


## Why?

While there are other responsive navigation menus available, most of them require JavaScript to function. This one doesn't.


## Getting Started

1. Download the css file from the dist folder.
2. Link to the css file in your page.
```html
<link rel="stylesheet" href="css-responsive-menu.css" />
```
3. Use the following code template for the menu.
```html
<div class="css-responsive-menu">
  <label for="hidden-checkbox1" class="expand-control">Menu</label>
  <input type="checkbox" id="hidden-checkbox1" class="expand-control">
  <ul class="navigation-list">
    <li><a href="about.html">about</a></li>
    <li><a href="contact.html">contact</a></li>
  </ul>
</div>
```
