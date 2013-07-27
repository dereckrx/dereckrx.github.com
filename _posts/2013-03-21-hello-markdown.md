---
layout: post
title: "Hello Markdown"
description: ""
category: 
tags: []
date: 2013-03-21
---
{% include JB/setup %}
![Alt ref][markdown_icon]

### Headers `### Headers`
	# h1
	## h2 
	... 
	###### h6
	etc
	
### Horizontal Rule `---`

---

### Emphasis
*Emphasis* `*em*, _em_` or __strong__ `**strong**, __strong__` or ***both*** `***both***, ___both___`.

### Break
Two spaces and a return `'  \n'` to create a `<br/>`

### Blockquote

> A blockquote `> A blockquote`
>> nested blockquote `>> nested blockquote`
> 
> blockquote continued

### HTML
	<div> <p> <span> <table>
	Comment <!-- comment -->

### Lists
Unordered: \+, \-, or \* are interchangeable 
+ Red `+ Red`
- Blue `- Blue`
* Green `* Green`

Ordered: a number followed by a period, and they don't have to be in sequential .
1. one `1. one`
1. two `1. two`
1. three `1. three`
  
	* nested item `  * nested item`

## Code Blocks
Indent four spaces to create an escaped code block:

		<div class="footer">
			&copy; 2004 Foo Corporation
		</div>
		
Or use \`backticks\` to create a `span.of(code)` in a paragraph.
		
## Links
	* Inline: [Google](http:///www.google.com/ "A link to google").
	* Relative path: [resume](/resume/).  
	* Numeric Reference: [Google][1].
	* Named reference: [Google][google].  
	* Implicit: [google][].
	* Automatic links <http://www.google.com> and emails <mark@down.com>.

	[1]: http://www.google.com/ "Optional title here"
	[google]: http://www.google.com/
		
* Inline: [Google](http:///www.google.com/ "A link to google").
* Relative path: [resume](/resume/).  
* Numeric Reference: [Google][1].
* Named reference: [Google][google].  
* Implicit: [google][].
* Automatic links <http://www.google.com> and emails <mark@down.com>.

[1]: http://www.google.com/ "Optional title here"
[google]: http://www.google.com/		


## Images
	* Path: 
	
	![Alt text](/path/to/img.jpg "optional title")
	
	* Reference 
	
	![Alt ref][image]

	[image]: url/to/image "optional title attribute"
	
* Path:

![Alt text](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRK9GgXnEgdDOs_n6S_c71I6vWXgSmKR99hK-UVHgDq7o8GfH6CPw "optional title")

* Reference 

![Alt ref][markdown_icon]

[markdown_icon]: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaOb8H0LGKF9WdtZuoyCe2sqN_UKbWyvpk6JU1XmeWSFoDI0Pe "Markdown Icon"