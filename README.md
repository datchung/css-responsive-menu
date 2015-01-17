<h1>Pure CSS Responsive Menu</h1>

<h2>Introduction</h2>
<p>
    A responsive navigation menu written in CSS, no JavaScript used. This is reeeaally barebones, only the required styles are implemented. You can use your own styles on top of what is here to make it look how you want it to.
</p>

<p>
    In larger browser windows, the menu items are shown horizontally. In smaller browser windows, menu items are hidden until the 'menu' is clicked.
</p>

<h2>Getting Started</h2>
<ol>
    <li>Download the css file from the dist folder.</li>
    <li>Link to the css file in your html page.</li>
    <li>
        Use the following code template for the menu:
        <code>&#x3C;div class=&#x22;css-responsive-menu&#x22;&#x3E;
      &#x3C;label for=&#x22;hidden-checkbox1&#x22; class=&#x22;expand-control&#x22;&#x3E;Menu&#x3C;/label&#x3E;
      &#x3C;input type=&#x22;checkbox&#x22; id=&#x22;hidden-checkbox1&#x22; class=&#x22;expand-control&#x22;&#x3E;

      &#x3C;ul class=&#x22;navigation-list&#x22;&#x3E;
        &#x3C;li&#x3E;&#x3C;a href=&#x22;about.html&#x22;&#x3E;about&#x3C;/a&#x3E;&#x3C;/li&#x3E;
        &#x3C;li&#x3E;&#x3C;a href=&#x22;contact.html&#x22;&#x3E;contact&#x3C;/a&#x3E;&#x3C;/li&#x3E;
      &#x3C;/ul&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;h1&#x3E;&#x3C;a href=&#x22;index.html&#x22;&#x3E;css-responsive-menu&#x3C;/a&#x3E;&#x3C;/h1&#x3E;
    &#x3C;p&#x3E;Welcome to the demo.&#x3C;/p&#x3E;</code>
    </li>
</ol>
