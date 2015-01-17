<h2>What is it?</h2>
<p>
  A responsive navigation menu written in CSS, no JavaScript used. The styles are pretty barebones, only the required ones are implemented, which keeps things light. You can use your own styles on top of what is here to make it look how you want it to.
</p>
<p>
  In larger browser windows, the menu items are shown horizontally. In smaller browser windows, menu items are hidden until the 'Menu' is clicked. To see this in action, try resizing the width of your browser and observe the topmost menu bar.
</p>

<h2>Why?</h2>
<p>
  While there are other responsive navigation menus available, most of them require JavaScript to function. This one doesn't.
</p>

<h2>Getting Started</h2>
<ol>
  <li>Download the css file from the dist folder.</li>
  <li>
    Link to the css file in your page.
    <pre><code>&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;css-responsive-menu.css&#x22; /&#x3E;</pre></code>
  </li>
  <li>
    Use the following code template for the menu.
    <pre><code>&#x3C;div class=&#x22;css-responsive-menu&#x22;&#x3E;
  &#x3C;label for=&#x22;hidden-checkbox1&#x22; class=&#x22;expand-control&#x22;&#x3E;Menu&#x3C;/label&#x3E;
  &#x3C;input type=&#x22;checkbox&#x22; id=&#x22;hidden-checkbox1&#x22; class=&#x22;expand-control&#x22;&#x3E;

  &#x3C;ul class=&#x22;navigation-list&#x22;&#x3E;
    &#x3C;li&#x3E;&#x3C;a href=&#x22;about.html&#x22;&#x3E;about&#x3C;/a&#x3E;&#x3C;/li&#x3E;
    &#x3C;li&#x3E;&#x3C;a href=&#x22;contact.html&#x22;&#x3E;contact&#x3C;/a&#x3E;&#x3C;/li&#x3E;
  &#x3C;/ul&#x3E;
&#x3C;/div&#x3E;</code></pre>
  </li>
</ol>