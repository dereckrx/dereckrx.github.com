---
layout: post
title: "Sublime Text 2 Quick Reference"
description: ""
category: 
tags: []
---
{% include JB/setup %}

## Overview
* Hotkeys
* Layout
* Packages
* Snippets
* Useful tools/packages
* Projects
* Custom Builds
* Links

## Hotkeys
* cmd+click : create another cursor 
* cmd+j : join following line to current line, can be used put everything on one line
* cmd+b : build, depending on what source type
* cmd+d : quick add next
* ctl+cmd+g : select all occurrences of selection or word
* ctl+cmd+l : select selection 
* opt + "selection" : select in a column
* cmd+i : incremental search, jump to the next occurrence relative to cursor
* opt+cmd+r : turn on regex (far left option)
	- opt+ender : select all matching in mutli cursors
* cmd+shft+p : command palet 
* cmd+k+b : toggle sidebar

## Layout
* cmd+opt+(1..5) : Add columns to layout
* sht+ctrl+(1..5): move file to `number` column 
* cmd+p : go to anything. Use with:
	- '@' for symbols and methods, or CSS declarations
	- ':' line number 
	- '#' for search

## packages
~/Libaray/Application Support/Sublime Text 2/Packages

Options:

* git clone into the packages directory
* or use package manager 

### Adding package 
shft+cmd+p : package manager: install -> search for package

### view documentation
Sublime Text > Preferences -> Browse Packages -> package_name -> (drag read me into sublime to view)

## Snippets 
shft+cmd+p : snippet + name # this will fuzzy search for snippets

### Create new snippet
Tools -> new snippet 

* edit "Hello, ${1:this} is a ${2:snippet}." line
* ${order:default_value} Stop points. Hit tab to advance to the next stop point

Save in folder where name is syntax type like 'JavaScript' -> 'Backbone' etc
File name must have `.sublime-snippet` extension.

* name should be descriptive like for  'Backbone.view.extend' use 'view-extend'

You can google 'sublime text -language- snippets' and clone into package directory.

## Useful tools/packages
* ZenCoding for HTML generation
* prefixer: looks up and replaces with the correct browser prefixes for css files
* fetch: fetches zip or packages such as minified jQuery.
* advanced new file: faster new file creation
* advanced sidebar: 
* lint: syntax checking for many scripting languages 
* gist: for creating snippets on GitHub and access to snippets
* DocBlocker: easy documentation creation
* Url something? Runs/opens a comment url in a new tab and shows response 
* Live reload: Auto reloads open html page in the browser.
* copy relative paths for a links and css and js

### Marked
A auto refresh markdown viewer. Available in the App Store.

Use cmd+b to open a markdown file in marked

## Projects
Can view all project settings in Sublime > Preferences > Settings - User

* cmd+shf+p : edit project
* edit the folders array to add or remove paths
* can use `"file_exclude_patterns": ["*.css"]` to remove matching files

		"folder_exclude_patterns": ["js", "css"]
		"settings":
		{     
		     "tab_size": 2
		}

## Custom Builds
Can be used to create deploy scripts and test scripts or compile scripts

Tools > Build System > New Build System

	// TO compile coffee script 'coffee -c script.coffee'
	{
	     "cmd": ["coffee", "-wc", "$file"], // $file is a var set up by sublime
	     "selector": "source.coffee" // Scope what files should use this build
	     "path": "/usr/bin" // Set the path to the 'coffee' executable (if needed)
	}

## Links
* <http://net.tutsplus.com/tutorials/tools-and-tips/sublime-text-2-tips-and-tricks/>

* An awesome tutorial video: <http://www.youtube.com/watch?v=TZ-bgcJ6fQo>
* can also search for tuts premium online video courses.

