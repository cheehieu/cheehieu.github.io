---
layout: post
title: "Creating a Custom Email Address"
subtitle: "How I set up a simple email host"
main_image: images/blog/email.png
tags:
categories: ['web', 'email', 'tutorial']
---

I thought it'd be cool to have my own custom email address, but I didn't want to pay an exorbitant amount of money for it. Google used to offer free custom domain email accounts through their Google Apps for Business, but they have since discontinued the free service. So I searched the web for an alternate solution and discovered Zoho, a suite of web apps for growing businesses.

## Zoho Mail
Zoho Mail offers a "[Free & Ad-Free](https://www.zoho.com/mail/zohomail-pricing.html)" tier of their enterprise class email hosting bundle. This is valid for a single domain and up to 10 users, with 5GB mailbox storage and 5GB docs storage per user. Being just one person, this option was perfect. Zoho Apps even supports seamless integration with Google Apps.

To get started, I just needed to create an account on Zoho and follow the step-by-step instructions to register my custom domain. The most involved part of this process was verifying my custom domain, which I had purchased through Namecheap. To do this, I used the CNAME method to modify the mail settings in my Namecheap domain's host records to match the MX records of Zoho. I also added a TXT record with the Zoho verification token.

Zoho and Namecheap are both incredibly easy to use, and I recommend each 100%. When I first started out, I found this [tutorial](http://www.techwalls.com/set-free-email-custom-domain-zoho-mail/) to be especially helpful.

## Integration with Gmail
Since I regularly check Gmail and have my Google accounts synced with my Android smartphone, I wanted to integrate Zoho with my Gmail account. This way, I could send/receive my Zoho email content directly through Gmail using POP3 and a secured connection to Zoho's SMTP ports.

To set this up, I needed to:

* Log in to my Gmail account, and go to Accounts and Import settings
* Add a POP3 mail account
* Enter Zoho Mail account details (username, password, POP server, port, etc.)
* Configure the custom alias to "send mail as"

## Misc.
The featured blog image at the top of the page is from [xkcd](http://xkcd.com/1467/).