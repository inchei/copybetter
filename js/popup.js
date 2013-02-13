/*
 * Popup.js
 */

/* Window object of background page */
var bgWindow = chrome.extension.getBackgroundPage();
/* Config object */
var bgConfig = bgWindow.config;
/* Copy cache */
var bgCache = bgWindow.cache;

function debug(msg)
{
    bgWindow.debug.call(this, msg);
}

/*
 * Shortchut for document.getElementById
 */
function $(id)
{
    return document.getElementById(id);
}

/*
 * Generate the copy cache list
 */
function generateCacheList()
{
    var hints = $('hints');
    var cacheList = $('recent-cache');

    $('clear').innerHTML = chrome.i18n.getMessage('clear_cache');
    $('option').innerHTML = chrome.i18n.getMessage('option');

    if (bgCache.length == 0) {
        cacheList.innerHTML = chrome.i18n.getMessage('empty_copy_cache_hint');
        return;
    }

    var cache, ol, li, span, idx;

    /*
     * Only show recent cacheSize items
     */
    if (bgCache.length > bgConfig.cacheSize) {
        cache = bgCache.slice(bgCache.length - bgConfig.cacheSize,
                bgCache.length);
        idx = bgCache.length - bgConfig.cacheSize;
    } else {
        cache = bgCache;
        idx = 0;
    }

    cacheList.innerHTML = "";
    ol = document.createElement('ol');

    for (item in cache) {
        li = document.createElement('li'); 
        li.className = "cache-item";

        span = document.createElement('span');
        span.className = "cache-text";

        span.textContent = cache[item].substring(0, bgConfig.maxLineCharsOnPopup);
        span.setAttribute('data-idx', idx++);

        li.appendChild(span);
        ol.appendChild(li);
    }

    cacheList.appendChild(ol);
}

/*
 * Highlight select cache item
 */
function highlightSelected(elem)
{
    var hl = document.getElementsByClassName('selected');

    if (hl.length != 0) {
        hl[0].className = hl[0].className.replace(' selected', '');
    }

    elem.className = elem.className + ' selected';
}

/*
 * Listen click events
 */
document.addEventListener('click', function(event) {
    if (event.target.id == 'clear') {
        bgCache.length = 0;
        generateCacheList();
        debug('Clear the cache...');
    } else if (event.target.className == 'cache-text') {
        highlightSelected(event.target);
        bgWindow.doPaste(bgCache[event.target.dataset.idx]);
        debug('Paste cache text to content script');
    } else if (event.target.id == "option") {
        chrome.tabs.create({'active':true, 'url': 'options.html'});
        debug('Open the option page...');
    }
}, false);

document.addEventListener('DOMContentLoaded', function(event) {
    generateCacheList();
}, false);