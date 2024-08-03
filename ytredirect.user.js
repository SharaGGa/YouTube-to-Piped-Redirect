// ==UserScript==
// @name         YouTube to Piped Redirect
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Redirect YouTube links to Piped
// @author       Nero
// @license      MIT
// @match        https://www.youtube.com/*
// @match        https://youtu.be/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let url = new URL(window.location.href);
    let newUrl;
    if (url.hostname === 'www.youtube.com' || url.hostname === 'youtube.com') {
        newUrl = 'https://piped.video' + url.pathname + url.search;
    } else if (url.hostname === 'youtu.be') {
        newUrl = 'https://piped.video/' + url.pathname.slice(1);
    }
    if (newUrl) {
        window.location.replace(newUrl);
    }
})();
