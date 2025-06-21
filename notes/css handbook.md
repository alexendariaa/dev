## CSS
	- link:: [w3schools](https://www.w3schools.com/) [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS) [youtube](https://youtu.be/dSJM4Gyh8jE?feature=shared) 
	  type:: website 
	  duration:: 1hr
	  time:: 01:31 
	  date:: [[Jun 3rd, 2025]] 
	  tags:: #css, #code #development 
	  status:: Done
	  priority:: B
	  source:: website, YouTube
	  notes:: basic to advance 
	  review-date:: [[Jun 6th, 2025]] 
	  related-topics:: #javascript #coding
- ## Adding CSS
  
  Cascading Style Sheets (CSS) is used to style HTML elements. There are three main ways to add CSS to your HTML document:
- **Inline CSS**:
	- CSS is applied directly within an HTML tag using the `style` attribute.
	- This method is generally not recommended for larger projects as it mixes content with presentation and can be hard to manage.
	- Example:
	  HTML
	  ```
	  <p style="color: blue; font-size: 16px;">This paragraph uses inline CSS.</p>
	  ```
- **Internal CSS (or Embedded CSS)**:
	- CSS rules are placed within a `<style>` tag in the `<head>` section of the HTML document.
	- This is useful for single-page websites or when you have styles specific to one page.
	- Example:
	  HTML
	  ```
	  <head>
	   <style>
	     p {
	       color: green;
	       text-align: center;
	     }
	     div {
	       background-color: lightgrey;
	     }
	   </style>
	  </head>
	  <body>
	   <p>This paragraph will be green and centered.</p>
	   <div>This div will have a light grey background.</div>
	  </body>
	  ```
- **External CSS**:
	- CSS rules are defined in a separate `.css` file (e.g., `styles.css`).
	- This file is then linked to the HTML document using a `<link>` tag in the `<head>` section.
	- This is the most common and recommended method for organizing styles, especially for larger websites, as it allows for reusability and easier maintenance.
	- **Creating CSS file** (e.g., `style.css`):
	- **Linking CSS file to HTML file**:
	  
	  ---
- ## Selectors
  
  Selectors are patterns that select HTML elements so you can apply styles to them.
- By using selectors, we can target an HTML tag to apply CSS.
	- These are of several types:
		- **Element Selector**: Selects HTML elements based on the element name.
		  CSS
		  ```
		  p { /* Selects all <p> elements */
		   color: red;
		   background-color: lightyellow; /* Note: bg-color is not a standard CSS property, it's background-color */
		  }
		  h2 { /* Selects all <h2> elements */
		   font-weight: bold;
		  }
		  ```
		- **ID Selector**: Selects a single, unique element based on its `id` attribute. The `id` must be unique within the HTML page. It's denoted by a `#` followed by the id name.
		  CSS
		  ```
		  #abc { /* Selects the element with id="abc" */
		   color: blue;
		   font-size: 20px;
		  }
		  ```
		  HTML example:
		  HTML
		  ```
		  <div id="abc">This text will be blue and 20px.</div>
		  ```
		- **Class Selector**: Selects elements based on their `class` attribute. Multiple elements can share the same class. It's denoted by a `.` followed by the class name.
		  CSS
		  ```
		  .paraclass { /* Selects all elements with class="paraclass" */
		   color: green;
		   font-style: italic;
		  }
		  ```
		  HTML example:
		  HTML
		  ```
		  <p class="paraclass">This paragraph will be green and italic.</p>
		  <div class="paraclass">This div will also be green and italic.</div>
		  ```
		- **Group Selector**: Allows you to apply the same styles to multiple selectors by listing them, separated by commas.
		  CSS
		  ```
		  p, .paraclass, #uniqueID { /* Selects all <p> elements, all elements with class="paraclass", AND the element with id="uniqueID" */
		   color: purple;
		   margin-bottom: 10px;
		  }
		  ```
		  
		  ---
- ## Fonts and Color
  
  These properties control the appearance of text.
- **Font**:
	- CSS provides several properties to control the appearance of fonts.
	  CSS
	  ```
	  p {
	   font-style: italic;       /* Sets the style of the font (e.g., normal, italic, oblique) */
	   font-size: 20px;         /* Sets the size of the font */
	   font-family: cursive, Arial, sans-serif; /* Specifies a priority list of font family names and/or generic family names. If 'cursive' is not available, it tries Arial, then any sans-serif font. */
	   font-weight: 900;        /* Sets the weight (boldness) of the font (e.g., normal, bold, or a number from 100 to 900) */
	   line-height: 1.5;        /* Sets the space between lines of text. Can be a number (multiplier of font size), a length (e.g., 10px), or a percentage. */
	  }
	  ```
- **Color**:
	- There are different ways of specifying colors in CSS:
		- **Color Names**: Using predefined color names.
		  CSS
		  ```
		  h1 {
		   color: red;
		   background-color: lightblue;
		  }
		  ```
		- **RGB (Red, Green, Blue)**:
			- Specifies a color using a combination of red, green, and blue intensity values, ranging from 0 to 255.
			- `rgba()` allows for an alpha channel (opacity/transparency), where the last value (alpha) ranges from 0.0 (fully transparent) to 1.0 (fully opaque).
			  CSS
			  ```
			  p {
			   background-color: rgb(100, 19, 192); /* A solid color */
			   color: rgba(100, 189, 192, 0.75); /* Text color with 75% opacity */
			  }
			  ```
		- **Hex (Hexadecimal)**:
			- Specifies a color using a hexadecimal value (e.g., `#RRGGBB` or `#RGB`).
			  CSS
			  ```
			  #abc {
			   color: #ffaabb; /* A hex color */
			   border-color: #F00; /* Short hex for red (#FF0000) */
			  }
			  ```
		- **HSL (Hue, Saturation, Lightness)**:
			- Specifies a color using hue (degree on the color wheel from 0 to 360), saturation (percentage), and lightness (percentage).
			- `hsla()` adds an alpha channel for transparency, similar to `rgba()`.
			  CSS
			  ```
			  p {
			   color: hsl(140, 50%, 40%); /* Hue: 140deg, Saturation: 50%, Lightness: 40% */
			  }
			  /* hsla works by adding an alpha value for transparency */
			  div {
			   background-color: hsla(240, 100%, 50%, 0.5); /* Blue with 50% transparency */
			  }
			  ```
			  
			  ---
- ## Box Model
  
  In CSS, every HTML element is treated as a rectangular box. The CSS box model describes how these boxes are rendered and how they interact.
- **Note:** (html में की चीज़ एक बॉक्स में होती है। कोई भी चीज बॉक्स से अलग नहीं होती।) *Everything in HTML is in a box. Nothing is separate from a box.*
- There are four main components to the box model:
	- **Content**: The actual content of the box, where text, images, or other media appear. Its dimensions are `width` and `height`.
	- **Padding**: The transparent area around the content, inside the border. It provides space between the content and the border.
	  CSS
	  ```
	  .padded-box {
	   padding: 20px; /* Applies 20px padding on all four sides */
	   padding-top: 10px;
	   padding-right: 15px;
	   padding-bottom: 10px;
	   padding-left: 15px;
	  }
	  ```
	- **Border**: A line that goes around the padding and content. It has properties like style, width, and color.
	  CSS
	  ```
	  p {
	   border: 3px solid black; /* Shorthand: border-width, border-style, border-color */
	  }
	  .custom-border {
	   border-width: 5px;
	   border-style: dashed;
	   border-color: blue;
	  }
	  ```
	- **Margin**: The transparent area outside the border. It provides space between this box and other elements.
	  CSS
	  ```
	  .margined-box {
	   margin: 15px; /* Applies 15px margin on all four sides */
	   margin-top: 10px;
	   margin-right: 20px;
	   margin-bottom: 10px;
	   margin-left: 20px;
	  }
	  ```
- **Width and Height**:
	- These properties define the width and height of the content area of an element.
	  CSS
	  ```
	  h1 {
	   width: 500px;
	   height: 100px; /* Note: height was 500px in your example, adjusted for typical h1 */
	   background-color: lightblue; /* To visualize the box */
	  }
	  div {
	   width: 75%;
	   height: 200px;
	   background-color: lightgreen;
	  }
	  ```
	- *TODO why does height and width not apply on span?*By default, `<span>` elements are `inline` elements. Inline elements flow along with text content and do not accept `width` and `height` properties. Their width is determined by their content. To apply `width` and `height` to a `<span>`, you need to change its `display` property to `inline-block` or `block`.
	  
	  ---
- ## CSS Display Property
  
  The `display` property specifies how an element is shown on the page.
- **Note:** (किसी टैग या एलिमैंट को कैसे दिखाया जाए?) *How should a tag or element be displayed?*
- **`block`**:
  1. **Always takes a new line**: Block-level elements start on a new line and take up the full width available.
  2. **Width**: By default, its width extends from the extreme left to the extreme right of its container.
  3. **Taking custom width and height**: You can set custom `width` and `height` properties for block-level elements.
  4. **Respecting custom margin and padding**: Block-level elements respect `margin` and `padding` on all sides (top, right, bottom, left).
	- Examples of block-level elements: `<div>`, `<p>`, `<h1>` - `<h6>`, `<ul>`, `<li>`, `<form>`.
	  CSS
	  ```
	  div {
	   display: block; /* This is often the default for elements like div */
	   width: 300px;
	   height: 150px;
	   background-color: lightcoral;
	   margin: 10px;
	   padding: 20px;
	  }
	  ```
- **`inline`**:
  1. **Tries to come in the same line**: Inline elements do not start on a new line and only take up as much width as necessary. (यह same लाइन मे आने का try करते है।)
  2. **Its width will be equal to its content**: The width of an inline element is determined by its content. (इसकी width content के बराबर होगी।)
  3. **Cannot have custom width and custom height**: `width` and `height` properties do not apply to inline elements. (custom width and custom height नहीं कर सकता।)
  4. **Horizontal margin applies**: `margin-left` and `margin-right` will push other inline elements horizontally, but `margin-top` and `margin-bottom` do not have an effect on the surrounding block elements. Padding applies on all sides, but vertical padding might overlap with other elements. (horizontal margin आती है।)
	- Examples of inline elements: `<span>`, `<a>`, `<img>`, `<strong>`, `<em>`.
	  CSS
	  ```
	  span {
	   display: inline; /* This is often the default for elements like span */
	   background-color: lightyellow;
	   margin-left: 5px;
	   margin-right: 5px;
	   padding: 5px;
	   /* width: 100px;  This will not have an effect */
	   /* height: 50px; This will not have an effect */
	  }
	  ```
	- To make an inline element behave like a block element while still flowing with text (allowing width/height and full margin/padding), you can use `inline-block`.
	  CSS
	  ```
	  span.inline-block-example {
	   display: inline-block; /* Behaves like a block element but flows inline with text */
	   width: 100px;
	   height: 50px;
	   background-color: lightseagreen;
	   margin: 5px;
	   padding: 5px;
	  }
	  ```
	- Method to convert inline to block:
	  CSS
	  ```
	  span.block-example {
	   display: block; /* Converts the inline span to a block-level element */
	   width: 200px;
	   height: 75px;
	   background-color: lightpink;
	   margin: 10px;
	   padding: 10px;
	  }
	  ```
	  
	  ---
- ## CSS Position Property
  
  The `position` property specifies the type of positioning method used for an element.
- **`static`**:
	- This is the default value. Elements render in order, as they appear in the document flow.
	- The `top`, `right`, `bottom`, `left`, and `z-index` properties have no effect.
- **`relative`**:
	- The element is positioned relative to its normal position.
	- Setting the `top`, `right`, `bottom`, and `left` properties will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element. The original space occupied by the element is preserved. (gap is maintained)
	  CSS
	  ```
	  .relative-box {
	   position: relative;
	   top: 20px;    /* Moves 20px down from its normal position */
	   left: 30px;   /* Moves 30px right from its normal position */
	   background-color: হালকানীল; /* Light blue */
	   width: 200px;
	   height: 100px;
	  }
	  ```
- **`absolute`**:
	- The element is positioned relative to its nearest positioned ancestor (i.e., an ancestor with a `position` value other than `static`). If no positioned ancestor exists, it is positioned relative to the initial containing block (usually the `<html>` element).
	- The element is removed from the normal document flow, and no space is created for the element in the page layout. (gab is not maintained, images are shifted)
	- `top`, `right`, `bottom`, and `left` properties are used to position it.
	  CSS
	  ```
	  .container {
	   position: relative; /* Establishes a positioning context for absolute children */
	   width: 300px;
	   height: 200px;
	   border: 1px solid black;
	  }
	  .absolute-box {
	   position: absolute;
	   top: 10px;
	   right: 10px;
	   width: 100px;
	   height: 50px;
	   background-color: tomato;
	  }
	  ```
- **`fixed`**:
	- The element is positioned relative to the browser window (viewport). It stays in the same place even if the page is scrolled.
	- It is removed from the normal document flow.
	- `top`, `right`, `bottom`, and `left` properties are used to position it. (इस में element एक जगह fix हो जाता है)
- **`sticky`**:
	- The element is treated as `relative` positioned until it scrolls to a specified offset (defined by `top`, `right`, `bottom`, or `left`), at which point it becomes `fixed` relative to the viewport or its nearest scrolling ancestor.
	- (sticky भी fixed ही होता है लकिन यह दूसरा container आते ही यह move करने लग जाता है।) *Sticky is also like fixed, but it starts moving as soon as another container (or scroll threshold) is reached.*
	  
	  ---
- ## CSS Size Units
  
  CSS offers various units to specify lengths and sizes.
  
  1. **`%` (Percentage)**:
	- Defines a size relative to the size of the parent element (for most properties like `width`, `height`, `padding`, `margin`) or relative to the font size of the element itself (for `font-size`).
	  CSS
	  ```
	  .parent {
	   width: 500px;
	   font-size: 20px;
	  }
	  .child {
	   width: 50%; /* 50% of parent's width, i.e., 250px */
	   padding: 10%; /* 10% of parent's width for horizontal padding, i.e., 50px */
	   font-size: 120%; /* 120% of parent's font-size (20px), i.e., 24px */
	  }
	  ```
	  2. **`vh` (Viewport Height)**:
	- Relative to 1% of the height of the viewport (the browser window's visible area). `100vh` is equal to the full viewport height.
	  CSS
	  ```
	  .full-height-section {
	   height: 100vh; /* Takes the full height of the viewport */
	   background-color: skyblue;
	  }
	  ```
	  3. **`vw` (Viewport Width)**:
	- Relative to 1% of the width of the viewport. `100vw` is equal to the full viewport width.
	  4. **`px` (Pixel)**:
	- Defines a size in pixels. Pixels are absolute units relative to the viewing device.
	  CSS
	  ```
	  p {
	   font-size: 16px;
	   border: 1px solid black;
	   margin: 10px;
	  }
	  ```
	  5. **`em`**:
	- Relative to the font-size of the parent element (for properties other than `font-size`). When used for `font-size`, it is relative to the font-size of the element itself (or inherited font-size if not set on the element).
	- Your formula refers to how `font-size` in `em` is calculated: if a parent has `font-size: 20px;` and a child has `font-size: 1.2em;`, the child's font size will be . For other properties like `padding: 1em;` on the child, `1em` would equal `24px`.
	  CSS
	  ```
	  .parent-em {
	   font-size: 18px;
	  }
	  .child-em {
	   font-size: 1.5em; /* 1.5 * 18px = 27px */
	   padding: 1em;     /* 1 * 27px = 27px padding */
	   margin-left: 2em; /* 2 * 27px = 54px margin */
	  }
	  ```
	  6. **`rem` (Root em)**:
	- Relative to the font-size of the root element (the `<html>` element). This avoids the compounding issue that can occur with `em` units.
	- Your formula refers to how `font-size` in `rem` is calculated: if the root `<html>` has `font-size: 16px;` and an element has `font-size: 1.5rem;`, its font size will be . Any other property like `padding: 1rem;` will also use `16px` as the base.
	  CSS
	  ```
	  html {
	   font-size: 16px; /* Root font size */
	  }
	  .element-rem {
	   font-size: 1.2rem; /* 1.2 * 16px = 19.2px */
	   padding: 2rem;     /* 2 * 16px = 32px */
	  }
	  ```
	  
	  ---
- ## Float and Clear
  
  The `float` property is used for positioning and formatting content, e.g., letting an image float left to the text in a container. The `clear` property specifies how an element should behave when it bumps into a floated element.
- **`float`**:
	- Allows an element to be taken out of the normal flow and shifted to the left or right of its container. Text and inline elements will wrap around the floated element.
	  CSS
	  ```
	  img.float-left {
	   float: left;
	   margin-right: 15px; /* Add some space between the image and the text */
	  }
	  img.float-right {
	   float: right;
	   margin-left: 15px;
	  }
	  ```
	  HTML Example:
	  HTML
	  ```
	  <div>
	   <img class="float-left" src="image.jpg" alt="Floating image" width="100" height="100">
	   <p>This text will wrap around the floated image on the left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	  </div>
	  ```
- **`clear`**:
	- Specifies whether an element can be next to floating elements that precede it or if it should be moved down (cleared) below them.
	- Values:
		- `left`: The element is moved down below any preceding left-floated elements.
		- `right`: The element is moved down below any preceding right-floated elements.
		- `both`: The element is moved down below any preceding left or right-floated elements.
		- `none`: Default. The element is not moved down.
		  CSS
		  ```
		  .cleared-element {
		  clear: both; /* This element will appear below any floated elements above it */
		  border-top: 1px solid #ccc;
		  padding-top: 10px;
		  }
		  ```
- **The Great Collapse and Overflow**:
	- When a container only contains floated elements, its height collapses to zero (or to the height of any non-floated content). This is because floated elements are taken out of the normal flow. (float add करने के बाद चीज़े सही से box में fit नहीं होतीं।)
	- One common solution to this "collapse" is to use the `overflow` property on the container, or by using a "clearfix" hack. Setting `overflow: auto;` or `overflow: hidden;` on the parent container will cause it to expand to contain its floated children. (इसका solution हम overflow से करते हैं।)
	  CSS
	  ```
	  .container-with-floats {
	   border: 1px solid red;
	   /* overflow: auto;  Uncomment this to see the container expand */
	  }
	  .container-with-floats img {
	   float: left;
	   width: 50px;
	   height: 50px;
	   margin: 5px;
	  }
	  .clearfix::after { /* A common clearfix hack */
	   content: "";
	   clear: both;
	   display: table;
	  }
	  /* Apply .clearfix to the container */
	  .container-with-floats.clearfix {
	   border: 1px solid green;
	  }
	  ```
	  
	  ---
- ## Flexbox
  
  Flexbox (Flexible Box Layout Module) is a layout model that allows items in a container to be aligned and distributed space automatically, even when their size is unknown or dynamic.
- When we mark an element as `display: flex`, by default all its direct children become flex items and are arranged in a row. (जब भी हम flex mark करते है तो by default सब element row में आ जाते हैं।)
- Key properties for the flex container:
  CSS
  ```
  .flex-container {
   display: flex;            /* Enables flex layout */
   flex-direction: row;      /* Specifies the direction of the main axis (row, row-reverse, column, column-reverse) */
                             /* Default is 'row' */
   flex-wrap: wrap;          /* Allows items to wrap to the next line if they don't fit (nowrap, wrap, wrap-reverse) */
                             /* Default is 'nowrap' */
   /* Other common container properties: */
   /* justify-content: center; */ /* Aligns items along the main axis */
   /* align-items: center; */     /* Aligns items along the cross axis */
   /* align-content: stretch; */  /* Aligns lines of items (when there's wrapping) along the cross axis */
   /* gap: 10px; */               /* Sets the gap between flex items */
  }
  .flex-item {
   background-color: lightblue;
   border: 1px solid blue;
   padding: 10px;
   margin: 5px;
  }
  ```
  HTML Example:
  HTML
  ```
  <div class="flex-container">
   <div class="flex-item">Item 1</div>
   <div class="flex-item">Item 2</div>
   <div class="flex-item">Item 3</div>
  </div>
  ```
- Table showing main-axis for `flex-direction`: | `flex-direction` | Main-axis | |:--------------- |:--------- | | `row` | Horizontal | | `column` | Vertical | | `row-reverse` | Horizontal (reversed) | | `column-reverse` | Vertical (reversed) |
- **`justify-content`**: This property aligns flex items along the **main axis** of the flex container. (यह main axis के according चीजों को place करता है।)
	- Common values: `flex-start` (default), `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.
	  CSS
	  ```
	  .flex-container-justify {
	   display: flex;
	   flex-direction: row; /* Main axis is horizontal */
	   justify-content: space-between; /* Distributes items evenly, first item at the start, last item at the end */
	   height: 100px;
	   border: 1px solid black;
	  }
	  /* Example with column direction */
	  .flex-container-justify-column {
	   display: flex;
	   flex-direction: column; /* Main axis is vertical */
	   justify-content: center; /* Centers items vertically */
	   height: 200px; /* Needs a defined height for vertical justification to be apparent */
	   border: 1px solid black;
	  }
	  ```
- **`align-items`**: This property aligns flex items along the **cross axis** of the flex container.
	- Common values: `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline`.
	  CSS
	  ```
	  .flex-container-align {
	   display: flex;
	   flex-direction: row; /* Cross axis is vertical */
	   align-items: center; /* Centers items vertically within the container */
	   height: 150px; /* Needs a defined height for vertical alignment to be apparent */
	   border: 1px solid black;
	  }
	  /* Example with column direction */
	  .flex-container-align-column {
	   display: flex;
	   flex-direction: column; /* Cross axis is horizontal */
	   align-items: flex-end; /* Aligns items to the right (end of cross axis) */
	   height: 150px;
	   border: 1px solid black;
	  }
	  ```
- **`align-content`**: This property aligns the lines of flex items within the flex container when there is extra space in the **cross-axis** (i.e., when `flex-wrap: wrap` is used and there are multiple lines of items). It has no effect when items are in a single line. (यह बीच की स्पेस हटाता है - more accurately, it distributes space *between lines*).
	- Common values: `stretch` (default), `flex-start`, `flex-end`, `center`, `space-between`, `space-around`.
	  CSS
	  ```
	  .flex-container-align-content {
	   display: flex;
	   flex-wrap: wrap; /* Required for align-content to have an effect */
	   height: 300px;   /* Must have extra space in the cross-axis */
	   align-content: space-around; /* Distributes lines with equal space around them */
	   border: 1px solid purple;
	  }
	  .flex-container-align-content .flex-item {
	   width: 30%; /* To ensure items wrap */
	  }
	  ```
- **Note:** (जब flex direction row होती है तो justify content horizontal संभांलता है align items vertical संभांलता है।) *When `flex-direction` is `row`, `justify-content` handles horizontal alignment, and `align-items` handles vertical alignment.* This is correct because for `row`, the main axis is horizontal and the cross axis is vertical. If `flex-direction` were `column`, `justify-content` would handle vertical alignment and `align-items` would handle horizontal alignment.
  
  ---
- ## Media Query
  
  Media queries allow you to apply different CSS styles based on characteristics of the device or viewport, such as its width, height, orientation, or resolution. This is fundamental for creating responsive web designs. (यदि आप किसी condition के आधार पर css apply करते हैं तो इसी को media query कहते है।)
- The example code demonstrates changing the background color of an element with the class `.box` when the viewport width is 500px or more. (ऊपर लिखा गया code, 500px width से नीचे आते ही अपना रंग accordingly change कर लेगा।) *Actually, it changes when the width is *at least* 500px (`min-width: 500px`). If it were `max-width: 500px`, it would change when the width is 500px or less.*
  CSS
  ```
  .box {
   background-color: aqua;
   width: 100px;
   height: 100px;
   margin-bottom: 10px;
   text-align: center;
   line-height: 100px;
  }
  /* Styles for viewports with a minimum width of 500px */
  @media (min-width: 500px) {
   .box {
     background-color: green;
     color: white;
   }
  }
  /* Example with max-width: styles for viewports up to 700px wide */
  @media (max-width: 700px) {
   .another-box {
     font-size: 14px;
     padding: 5px;
   }
  }
  /* Example combining conditions: styles for viewports between 600px and 900px wide */
  @media (min-width: 600px) and (max-width: 900px) {
   .box {
     border: 5px solid orange;
   }
  }
  ```
  HTML Example:
  HTML
  ```
  <div class="box">Box 1</div>
  <div class="another-box">Another Box Content</div>
  ```
  
  ---
- ## Box-shadows and Text Shadow
  
  These properties allow you to add shadow effects to element boxes and text, respectively.
- **`box-shadow`**: (हम इस attribute का इस्तेमाल करके box आासपास shadow add kar sakte hain) *We can use this attribute to add a shadow around a box.*
	- The `box-shadow` property applies shadow effects around an element's frame. You can specify multiple shadow effects separated by commas.
	- Syntax: `box-shadow: <offset-x> <offset-y> <blur-radius> <spread-radius> <color> [inset];`
		- `<offset-x>`: Horizontal offset of the shadow. Positive values move it right, negative values left.
		- `<offset-y>`: Vertical offset of the shadow. Positive values move it down, negative values up.
		- `<blur-radius>`: (Optional) The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Cannot be negative.
		- `<spread-radius>`: (Optional) Positive values cause the shadow to expand and grow bigger, negative values cause it to shrink.
		- `<color>`: (Optional) The color of the shadow.
		- `inset`: (Optional) If specified, the shadow is drawn inside the border (as an inner shadow) instead of outside.
		  CSS
		  ```
		  .container-shadow {
		  width: 200px;
		  height: 100px;
		  background-color: white;
		  margin: 20px;
		  /* x-axis | y-axis | blur | spread | color */
		  box-shadow: 10px 5px 5px 10px black;
		  }
		  .another-shadow {
		  width: 200px;
		  height: 100px;
		  background-color: lightyellow;
		  margin: 20px;
		  /* A softer, more subtle shadow */
		  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
		  }
		  .inset-shadow-example {
		  width: 200px;
		  height: 100px;
		  background-color: lightgrey;
		  margin: 20px;
		  padding: 10px;
		  box-shadow: inset 5px 5px 10px #888888; /* Inset shadow */
		  }
		  ```
- **`text-shadow`**: Applies shadow effects to text.
	- Syntax: `text-shadow: <offset-x> <offset-y> <blur-radius> <color>;` (Similar to `box-shadow` but without spread and inset)
	  CSS
	  ```
	  .text-shadow-example {
	   font-size: 48px;
	   font-weight: bold;
	   /* x-axis | y-axis | blur | color */
	   text-shadow: 2px 2px 4px grey;
	  }
	  /* Example of multiple text shadows (TODO from your doc) */
	  .multiple-text-shadows {
	   font-size: 48px;
	   font-weight: bold;
	   color: white;
	   text-shadow:
	     1px 1px 2px black, /* Near shadow */
	     0 0 25px blue,     /* Blue glow */
	     0 0 5px darkblue;  /* Darker blue edge */
	  }
	  ```
- **Custom CSS Variables (CSS Custom Properties)**:
	- Allow you to define reusable values in your CSS. They are defined using a name that starts with two hyphens (e.g., `--primary-color`).
	- You use the `var()` function to insert the value of a custom property.
	  CSS
	  ```
	  :root { /* Define global variables on the root element */
	   --primary-color: green;
	   --secondary-color: #333;
	   --default-padding: 15px;
	  }
	  p {
	   /* background-color: var(--primary-color); */ /* from your example */
	   color: var(--primary-color);
	   border: 1px solid var(--secondary-color);
	   padding: var(--default-padding);
	  }
	  .highlight {
	   background-color: var(--primary-color);
	   color: white;
	  }
	  ```
	- (अंदर use करने के लिए `inset` का use का किया जाता है।) *This note about `inset` seems to be related back to `box-shadow`, not custom variables. `inset` makes a box shadow an inner shadow.*
	  
	  ---
- ## Animations
  
  CSS animations make it possible to animate transitions from one CSS style configuration to another. Animations consist of two components: a style describing the CSS animation and a set of keyframes that indicate the start and end states of the animation’s style, as well as possible intermediate waypoints. (इसका use करके हम animations बना सकते हैं।)
- The basic steps are:
  1. Define the animation sequence using `@keyframes`. Give it a name.
  2. Apply the animation to an element using the `animation-name` property and set an `animation-duration`.
- It is a series of movements.
  CSS
  ```
  /* The animation code */
  @keyframes example {
   from { background-color: red; transform: scale(1); } /* Starting state */
   50%  { background-color: yellow; transform: scale(1.2); } /* Intermediate state */
   to   { background-color: green; transform: scale(1); } /* Ending state */
  }
  /* The element to apply the animation to */
  .animated-div {
   width: 100px;
   height: 100px;
   background-color: red; /* Initial background, will be overridden by animation */
   animation-name: example;         /* Name of the @keyframes rule */
   animation-duration: 4s;        /* Duration of one cycle of the animation */
   animation-iteration-count: infinite; /* How many times the animation should repeat (e.g., 3, infinite) */
   animation-direction: alternate; /* Whether animation should play forwards, backwards, or alternate */
   /* Other animation properties:
      animation-timing-function: ease-in-out; (e.g., linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier())
      animation-delay: 2s; (Delay before the animation starts)
      animation-fill-mode: forwards; (Specifies how styles are applied before/after animation)
      animation-play-state: running; (e.g., running, paused)
   */
  }
  ```
  HTML Example:
  HTML
  ```
  <div class="animated-div">Animating...</div>
  ```
  
  ---
- ## Transitions
  
  CSS transitions allow you to change property values smoothly (over a given duration) when an element's state changes, such as when it is hovered over, focused, active, or changed by JavaScript. (इसमें हमें pseudo class का use करके दो transition की state बनाते हैं।)
- While an animation is a series of movements, a transition is typically a single, smooth change between two states triggered by a state change (e.g., hover). (while a single switch of movement)
- Key transition properties:
	- `transition-property`: Specifies the name(s) of the CSS properties to which transitions should be applied (e.g., `width`, `background-color`, `all`).
	- `transition-duration`: Specifies the length of time a transition animation should take to complete (e.g., `0.5s`, `200ms`).
	- `transition-timing-function`: Specifies the speed curve of the transition (e.g., `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier()`).
	- `transition-delay`: Specifies a delay (in seconds or milliseconds) before the transition effect starts.
	- `transition`: A shorthand property for setting the four transition properties above.
	  CSS
	  ```
	  .transition-box {
	  width: 100px;
	  height: 100px;
	  background-color: dodgerblue;
	  /* Transition properties applied here for the change on hover */
	  transition-property: background-color, transform; /* Properties to animate */
	  transition-duration: 0.5s;                      /* Duration of the transition */
	  transition-timing-function: ease-in-out;        /* Speed curve */
	  /* Shorthand: transition: background-color 0.5s ease-in-out, transform 0.5s ease-in-out; */
	  }
	  .transition-box:hover {
	  background-color: orangered;
	  transform: scale(1.2) rotate(15deg); /* New state on hover */
	  }
	  ```
	  HTML Example:
	  HTML
	  ```
	  <div class="transition-box">Hover over me!</div>
	  ```
	  
	  ---
- ## Transforms
  
  The `transform` CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model. (जब हम किसी element या div को rotate या scale करना चाहते हैं।)
- **2D Transforms**:
	- `rotate(<angle>)`: Rotates the element around its origin (by default, the center of the element) by the specified angle (e.g., `20deg`, `-0.25turn`).
	  CSS
	  ```
	  div.a {
	   width: 100px; height: 50px; background-color: lightcoral; margin: 30px;
	   transform: rotate(20deg);
	  }
	  ```
	- `scale(<sx> [, <sy>])`: Scales the element up or down. `scale(2)` doubles the size, `scale(0.5)` halves it. `scaleX()` and `scaleY()` scale horizontally or vertically. `scaleY(1.5)` makes it 1.5 times taller.
	  CSS
	  ```
	  div.c {
	   width: 100px; height: 50px; background-color: lightseagreen; margin: 30px;
	   transform: scaleY(1.5);
	  }
	  div.scale-both {
	   width: 100px; height: 50px; background-color: gold; margin: 30px;
	   transform: scale(1.2, 0.8); /* 1.2x wider, 0.8x shorter */
	  }
	  ```
	- `skew(<ax> [, <ay>])`: Skews the element along the X and/or Y axis. `skewX()` and `skewY()` skew along a single axis. `skewY(20deg)` skews it along the Y-axis.
	  CSS
	  ```
	  div.b {
	   width: 100px; height: 50px; background-color: lightskyblue; margin: 30px;
	   transform: skewY(20deg);
	  }
	  div.skew-x {
	   width: 100px; height: 50px; background-color: orchid; margin: 30px;
	   transform: skewX(-15deg);
	  }
	  ```
	- `translate(<tx> [, <ty>])`: Moves the element from its current position. `translateX()` and `translateY()` move it horizontally or vertically.
	  CSS
	  ```
	  div.translate-example {
	   width: 100px; height: 50px; background-color: slateblue; margin: 30px; color:white;
	   transform: translate(50px, 20px); /* Moves 50px right and 20px down */
	  }
	  ```
	- Multiple transform functions can be applied at once, separated by spaces.
	  CSS
	  ```
	  div.multiple-transforms {
	   width: 100px; height: 50px; background-color: mediumpurple; margin: 30px;
	   transform: rotate(10deg) scale(1.1) translateX(20px);
	  }
	  ```
	  
	  HTML Example:
	  
	  HTML
	  
	  ```
	  <div class="a">Rotated</div>
	  <div class="b">Skewed Y</div>
	  <div class="c">Scaled Y</div>
	  <div class="scale-both">Scaled Both</div>
	  <div class="skew-x">Skewed X</div>
	  <div class="translate-example">Translated</div>
	  <div class="multiple-transforms">Multiple</div>
	  ```
	  
	  ---
- ## CSS Grid
  
  CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward. (css का use करके हम कोई भी layout आसानी से design कर सकते हैं।)
- To start using Grid, you need a container element with `display: grid` or `display: inline-grid`.
  CSS
  ```
  .grid-container {
   display: grid;
   grid-template-columns: auto auto auto; /* Defines 3 columns of auto width */
   /* Or specify sizes: grid-template-columns: 100px 1fr 2fr; */
   grid-template-rows: 100px 200px; /* Defines 2 rows with specified heights */
   gap: 10px; /* Shorthand for row-gap and column-gap */
   /* row-gap: 15px; */ /* Specifies the gap between grid rows */
   /* column-gap: 5px; */ /* Specifies the gap between grid columns */
   background-color: #2196F3;
   padding: 10px;
  }
  .grid-item {
   background-color: rgba(255, 255, 255, 0.8);
   border: 1px solid rgba(0, 0, 0, 0.8);
   padding: 20px;
   font-size: 30px;
   text-align: center;
  }
  ```
  HTML Example:
  HTML
  ```
  <div class="grid-container">
   <div class="grid-item">1</div>
   <div class="grid-item">2</div>
   <div class="grid-item">3</div>
   <div class="grid-item">4</div>
   <div class="grid-item">5</div>
   <div class="grid-item">6</div>
  </div>
  ```
- **`row-gap`**: This property defines the size of the gap between the rows in a grid container. (यह property rows के बीच में gap करने के लिए use की जाती है)
  CSS
  ```
  .grid-container-row-gap {
   display: grid;
   grid-template-columns: auto auto;
   grid-template-rows: auto auto auto;
   row-gap: 20px; /* 20px gap between rows */
   /* column-gap is 0 by default or if not specified */
  }
  ```
- **`column-gap`**: This property defines the size of the gap between the columns in a grid container. (यह property columns के बीच gap करने के लिए use की जाती है)
  CSS
  ```
  .grid-container-column-gap {
   display: grid;
   grid-template-columns: auto auto auto;
   grid-template-rows: auto auto;
   column-gap: 30px; /* 30px gap between columns */
   /* row-gap is 0 by default or if not specified */
  }
  ```
- **`gap`**: A shorthand for `row-gap` and `column-gap`. If one value is provided, it's used for both row and column gaps. If two values are provided, the first is for `row-gap` and the second for `column-gap`.
  CSS
  ```
  .grid-container-gap {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 10px 25px; /* 10px row-gap, 25px column-gap */
  }
  ```
  
  ---
- ## Grid Advance
  
  This section in your document mentions `autofit`, `minmax`, and `grid-template-areas`. These are more advanced features of CSS Grid.
- **`minmax(min, max)`**: This function defines a size range greater than or equal to *min* and less than or equal to *max*. It's often used within `grid-template-columns` or `grid-template-rows` to create flexible grid tracks. For example, `minmax(100px, 1fr)` means the track must be at least 100px wide, but can expand to take up available fractional space.
- **`autofit` and `autofill`**: These keywords are used with the `repeat()` function in `grid-template-columns` or `grid-template-rows`. They allow you to create as many tracks as can fit into the available space.
	- `autofill`: Fills the row with as many columns as it can fit. If the container is wider, it will leave empty tracks if there aren't enough items to fill them.
	- `autofit`: Behaves similarly to `autofill`, but if the container is wider, it will expand the existing items to fill the available space, collapsing empty tracks.
	  CSS
	  ```
	  .grid-autofit-minmax {
	  display: grid;
	  /* Create as many columns as can fit, each at least 150px wide,
	     and distribute extra space among them. */
	  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	  gap: 10px;
	  border: 1px solid green;
	  padding: 10px;
	  }
	  .grid-autofit-minmax > div {
	  background-color: lightgreen;
	  padding: 15px;
	  text-align: center;
	  }
	  ```
	  HTML Example:
	  HTML
	  ```
	  <div class="grid-autofit-minmax">
	  <div>Item 1</div>
	  <div>Item 2</div>
	  <div>Item 3</div>
	  <div>Item 4</div>
	  <div>Item 5</div>
	  </div>
	  ```
- **`grid-template-areas`**: This property allows you to define a grid template by referencing the names of grid areas, which are created by naming grid items using the `grid-area` property. This makes it very easy to visualize and manage complex layouts.HTML Example:
  
  ---
- ## 3D Transform
  
  This section in your document is empty. 3D transforms in CSS allow you to manipulate elements in a three-dimensional space. Key properties and functions include:
- **`transform-style: preserve-3d;`**: Applied to a parent element to enable its children to be positioned in 3D space.
- **`perspective: <length>;`**: Applied to the parent (or `transform: perspective(<length>)` on the element itself) to give a sense of depth.
- **3D Transform Functions**:
	- `rotateX(<angle>)`: Rotates an element around the X-axis.
	- `rotateY(<angle>)`: Rotates an element around the Y-axis.
	- `rotateZ(<angle>)` (or just `rotate(<angle>)`): Rotates an element around the Z-axis.
	- `rotate3d(<x>, <y>, <z>, <angle>)`: Rotates an element around a custom vector `[x, y, z]`.
	- `scaleZ(<number>)`: Scales an element along the Z-axis.
	- `scale3d(<sx>, <sy>, <sz>)`: Scales an element along all three axes.
	- `translateZ(<length>)`: Moves an element along the Z-axis (towards or away from the viewer).
	- `translate3d(<tx>, <ty>, <tz>)`: Moves an element along all three axes.
	- `matrix3d(...)`: Defines a 3D transformation using a 4x4 matrix.
	  CSS
	  ```
	  .scene {
	  width: 200px;
	  height: 200px;
	  border: 1px solid #CCC;
	  margin: 40px;
	  perspective: 500px; /* Applied to the parent to create a 3D space for children */
	  }
	  .cube {
	  width: 100%;
	  height: 100%;
	  position: relative;
	  transform-style: preserve-3d; /* Children will be in 3D space */
	  transition: transform 1s;
	  }
	  .cube-face {
	  position: absolute;
	  width: 200px;
	  height: 200px;
	  border: 1px solid black;
	  background-color: rgba(255, 0, 0, 0.3);
	  text-align: center;
	  line-height: 200px;
	  font-size: 24px;
	  opacity: 0.7;
	  }
	  .front  { transform: translateZ(100px); background-color: rgba(255, 0, 0, 0.7); }
	  .back   { transform: rotateY(180deg) translateZ(100px); background-color: rgba(0, 255, 0, 0.7); }
	  .right  { transform: rotateY(90deg) translateZ(100px); background-color: rgba(0, 0, 255, 0.7); }
	  .left   { transform: rotateY(-90deg) translateZ(100px); background-color: rgba(255, 255, 0, 0.7); }
	  .top    { transform: rotateX(90deg) translateZ(100px); background-color: rgba(255, 0, 255, 0.7); }
	  .bottom { transform: rotateX(-90deg) translateZ(100px); background-color: rgba(0, 255, 255, 0.7); }
	  .scene:hover .cube {
	  transform: rotateX(-30deg) rotateY(-60deg);
	  }
	  ```
	  HTML Example:
	  HTML
	  ```
	  <div class="scene">
	  <div class="cube">
	    <div class="cube-face front">Front</div>
	    <div class="cube-face back">Back</div>
	    <div class="cube-face right">Right</div>
	    <div class="cube-face left">Left</div>
	    <div class="cube-face top">Top</div>
	    <div class="cube-face bottom">Bottom</div>
	  </div>
	  </div>
	  ```