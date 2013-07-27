---
layout: post
title: "Heroku Reference"
description: ""
category: 
tags: []
---

Make sure you install the [heroku toolbelt]. You can verify you have it with:

	$ heroku --version
	heroku-toolbelt/2.39.5 (x86_64-darwin10.8.0) ruby/1.9.3

While in the same directory as the git repo, you [create a new app]. The app name (example in this case) can be blank, and heroku will generate a name for you.

	$ heroku apps:create example
	Creating example... done, stack is cedar
	http://example.herokuapp.com/ | git@heroku.com:example.git

> The command’s output shows that the app will be available at http://example.heroku.com. The second URL, git@heroku.com:example.git, is the remote git repository URL; by default, the heroku create command automatically adds a git remote named “heroku” pointing at this URL.

You can verify this remote with: 

	$ git remote -v
	heroku	git@heroku.com:git@heroku.com:example.git (fetch)
	heroku	git@heroku.com:git@heroku.com:example.git (push)

Push to heroku with:

	$ git push heroku master

If pushing from a branch you will need:

	$ git push heroku feature/name:master

Where `feature/name` is the name of the local branch to be pushed into the `master` branch on heroku. 

[heroku toolbelt]: https://toolbelt.heroku.com/
[create a new app]: https://devcenter.heroku.com/articles/creating-apps