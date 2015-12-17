---
layout: post
title: "Arbitrary Holidays"
subtitle: "Excuse me, what day is it?"
main_image: images/blog/mr_clean.jpg
tags:
categories: ['random']
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>

Today is June 14, 2015&mdash;otherwise known as Flag Day in the United States. Apparently, it is also National Bourbon Day and National Strawberry Shortcake Day. And who could forget Pop Goes The Weasel Day?

It seems like there is a vast collection of arbitrary holidays that occur every single day of the year. Whether its eating donuts on National Donut Day or fawning over Mr. Clean for Bald is Beautiful Day, society never fails to celebrate the mundane and recognize life's simple pleasures. By collectively spreading awareness of random objects or frivolous activities, we maintain and perpetuate the essence of human culture. What more can we observe?


The list below highlights a few of the globally-celebrated arbitrary holidays for today's date. Go ahead and indulge. HAPPY ______ _______ DAY!!

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
	// Get today's date and pull data from Checkiday
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	today = mm+'/'+dd+'/'+yyyy;
	var sourceUrl = "http://www.checkiday.com/api.php?d="+today;
	console.log(sourceUrl);
	var todaysDate = '<h2>' + "Today's date is " + today + ", also known as:" + '</h2>';
	$('.blog_post').append(todaysDate);

	// Use jQuery to parse and format holiday names
	$.ajax({
		type: "GET",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Method": "GET, POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Max-Age": 86400
		},
		url: sourceUrl
	}).done(function (data) {
		console.log(data);
		var HTML = $.parseHTML(data.results[0])[0].data;
		HTML = HTML.substr(1,HTML.length-2).split(',');
		// Create some elements and append to blog post
		for (var i=0; i< HTML.length; i++) {
			var actualContent = HTML[i].substr(1,HTML[i].length-2);
			var newElement = '<p>' + '*' + actualContent + '</p>';
			$('.blog_post').append(newElement);
		}
		console.log(HTML);
	});
</script>
