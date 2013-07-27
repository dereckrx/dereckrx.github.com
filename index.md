---
layout: default
title: dereckrx
tagline: is, ism, ist
---
{% include JB/setup %}

<div id="slideshow">
    <img src="https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-frc3/996523_855163443964_1450477945_n.jpg" style="position:absolute;" class="active" />
    <img src="https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-ash4/1002752_855164696454_1538242372_n.jpg" style="position:absolute;" />
    <img src="https://sphotos-b.xx.fbcdn.net/hphotos-prn1/486527_814966249464_176791897_n.jpg" style="position:absolute;" />
</div>

## Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<script type="text/javascript">
	// Source: http://jonraasch.com/blog/a-simple-jquery-slideshow

	function slideSwitch() {

	    var $active = $('#slideshow IMG.active');

	    if ( $active.length === 0 ) $active = $('#slideshow IMG:last');

	    var $next =  $active.next().length ? $active.next()
	        : $('#slideshow IMG:first');

	    $active.addClass('last-active');

	    $next.css({opacity: 0.0})
	        .addClass('active')
	        .animate({opacity: 1.0}, 1000, function() {
	            $active.removeClass('active last-active');
	        });
	}

	$(document).ready(function() {
	  setInterval( "slideSwitch()", 4000 );
	});

</script>

