---
layout: post
title: "Random Insult"
subtitle: "😂"
main_image: images/blog/insult.jpg
tags:
categories: ['random']
---

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

Behold! A random evil insult from the [Evil Insult Generator API](https://evilinsult.com/api/). Feel the burn.
<br>

<script>
	// Use jQuery to get random evil insult from API
	// Use CORS proxy to get around MissingAllowOriginHeader error
	$.get("https://nifty-cors.herokuapp.com/https://evilinsult.com/generate_insult.php", function(data) {
		$('.blog_post').append('<h2>"' + data + '"</h2>');
	});
</script>
