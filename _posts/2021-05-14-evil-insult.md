---
layout: post
title: "Random Insult"
subtitle: "❤️"
main_image: images/blog/placeholder.jpg
tags:
categories: ['random']
---

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

Behold! A random evil insult from the [Evil Insult Generator](https://evilinsult.com/api/)!
<br>

<script>
	/**
	* jQuery.ajax mid - CROSS DOMAIN AJAX 
	* ---
	* @author James Padolsey (http://james.padolsey.com)
	* @version 0.11
	* @updated 12-JAN-10
	* @info http://james.padolsey.com/javascript/cross-domain-requests-with-jquery/
	*/

	jQuery.ajax = (function(_ajax){
		var protocol = location.protocol,
			hostname = location.hostname,
			exRegex = RegExp(protocol + '//' + hostname),
			YQL = 'http' + (/^https/.test(protocol)?'s':'') + '://query.yahooapis.com/v1/public/yql?callback=?',
			query = 'select * from html where url="{URL}" and xpath="*"';
		function isExternal(url) {
			return !exRegex.test(url) && /:\/\//.test(url);
		}
		return function(o) {
			var url = o.url;
			if ( /get/i.test(o.type) && !/json/i.test(o.dataType) && isExternal(url) ) {
				// Manipulate options so that JSONP-x request is made to YQL
				o.url = YQL;
				o.dataType = 'json';
				o.data = {
					q: query.replace(
						'{URL}',
						url + (o.data ?
							(/\?/.test(url) ? '&' : '?') + jQuery.param(o.data)
						: '')
					),
					format: 'xml'
				};
				
				// Since it's a JSONP request
				// complete === success
				if (!o.success && o.complete) {
					o.success = o.complete;
					delete o.complete;
				}
				o.success = (function(_success){
					return function(data) {	
						if (_success) {
							// Fake XHR callback.
							_success.call(this, {
								responseText: (data.results[0] || '')
									// YQL screws with <script>s
									// Get rid of them
									.replace(/<script[^>]+?\/>|<script(.|\s)*?\/script>/gi, '')
							}, 'success');
						}
					};
				})(o.success);
			}
			return _ajax.apply(this, arguments);
		};
	})(jQuery.ajax);
</script>

<script>
	// Use jQuery to get random evil insult from API
	$.ajax({
		type: "GET",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Method": "GET, POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Max-Age": 86400
		},
		url: "https://evilinsult.com/generate_insult.php"
	}).done(function (data) {
		alert( "Data Loaded: " + data );
		$('.blog_post').append('<h2>' + data + '</h2>');
	});
</script>
