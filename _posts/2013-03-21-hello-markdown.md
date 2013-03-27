---
layout: post
title: "Hello Markdown"
description: ""
category: 
tags: []
---
{% include JB/setup %}

### Headers
# h1 `# h1, ## h2,..., ###### h6, etc`

h1 `Any text above ===`
========

h2 `Any text above ---`
------

*em* `*em*, _em_` or __strong__ `**strong**, __strong__` or ***both*** `***both***, ___both___`

### Break
Two spaces and a return `'  \n'` to create a `<br/>`     
BREAK!

### Horizontal Rule `---`

---

> A blockquote `> A blockquote`
> > nested blockquote `> > nested blockquote`
> 
> blockquote continued

### Comments
Standard html `<!-- comment -->` <!-- comment --> 

Or triple dash `<!--- comment -->` <!--- comment -->  

### Lists
Unordered: (\+,\-,\*) these are interchangeable 
+ Red
- Blue
* Green

Numbered:
1. one
1. two
1. three
  
	* nested item

## Code Blocks
Ready?

		<div class="footer">
			&copy; 2004 Foo Corporation
		</div>
		
Or a span of code `printf()` in a paragraph
		
## Links
relative path [here](/resume/)

inline [link](http://dereckrx.com "DKRX")

reference [a ref][1]

Implicit link [Google][]

Or automatic <http://dereckrx.com> links or emails: <dereckrx@gmail.com>

[1]: http://example.com/ "Optional title here"
[Google]: http://google.com/

## Images
![Alt text](/path/to/img.jpg "optional title")

Or reference ![Alt ref][image]

[image]: url/to/image "optional title attribute"