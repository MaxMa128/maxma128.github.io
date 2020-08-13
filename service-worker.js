/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/blog/MaxMa/public/404.html","6aaea9335ac952ab954054ecfdc09b30"],["D:/blog/MaxMa/public/Gallery/index.html","860b9d9034cc67cc9269b46e802b1ecd"],["D:/blog/MaxMa/public/Gallery/life/index.html","95b66978deca2fedbd3088e5732f7806"],["D:/blog/MaxMa/public/Gallery/life/其他/index.html","b035a36fd34305600a9ff34e2e9c3c29"],["D:/blog/MaxMa/public/Gallery/life/兼职/index.html","a2e0be7cda8e89b80879b133a586c195"],["D:/blog/MaxMa/public/Gallery/life/家/index.html","f901c5d86d071acae5ca7193e7e96cf4"],["D:/blog/MaxMa/public/Gallery/stills/index.html","71a1a00c97dee95d5ff30d3276bba013"],["D:/blog/MaxMa/public/Gallery/travel/index.html","3cf4e07eeac4a8534f3e8fa520cf0321"],["D:/blog/MaxMa/public/Gallery/travel/上海/index.html","fa1f052ba4455fc90e4ddd0ea2ad69df"],["D:/blog/MaxMa/public/Gallery/travel/云南/index.html","84f8b6e0b3eb1838a0d139833f29d7b9"],["D:/blog/MaxMa/public/Gallery/travel/北京/index.html","9fa34f66504894994d9aa9005f1fda5c"],["D:/blog/MaxMa/public/Gallery/travel/山东/index.html","59f9df74d51b3028936bc2344bf9d22a"],["D:/blog/MaxMa/public/Gallery/travel/摩尔曼斯克/index.html","5f9a39242b88ca8f2310297edafd4296"],["D:/blog/MaxMa/public/Gallery/travel/江苏/index.html","d41d78f0f87804fe96a6b64a660a327f"],["D:/blog/MaxMa/public/Gallery/travel/泰国/index.html","7d06de371d38ad81466b5d69f07ca062"],["D:/blog/MaxMa/public/Gallery/travel/海南/index.html","b1f77cc62d2f19a001c0557a150dd93a"],["D:/blog/MaxMa/public/Gallery/travel/湖北/index.html","cdd957b4666f168fe6e586a664644025"],["D:/blog/MaxMa/public/Gallery/travel/莫斯科/index.html","f7c43bf37c15dd5893a6f4f4007481e3"],["D:/blog/MaxMa/public/Gallery/travel/香港/index.html","355368c8996cdfb3307f545a9beb7137"],["D:/blog/MaxMa/public/Gallery/youth/hqzx/index.html","4b585d770a1fc3fccecada1271e91734"],["D:/blog/MaxMa/public/Gallery/youth/index.html","3db2baad8ccb03cffc77db2a34b9ec43"],["D:/blog/MaxMa/public/Gallery/youth/jjxx/index.html","1d76b89bc23eea329ff28114b0af0817"],["D:/blog/MaxMa/public/Gallery/youth/msu/index.html","40973863d536c7eefea1e889cbb20f66"],["D:/blog/MaxMa/public/Gallery/youth/yxzx/index.html","ea0575a6731344e0720c2b20ab9b71b6"],["D:/blog/MaxMa/public/about/index.html","4860cbe105e499043b5db2814c18eae1"],["D:/blog/MaxMa/public/archives/2020/07/index.html","fab49e014ab596299d2055a3131e9f73"],["D:/blog/MaxMa/public/archives/2020/08/index.html","fcc278703379923c08d09962c58600d5"],["D:/blog/MaxMa/public/archives/2020/index.html","5a52507a0f3eeac8f7793128781e1f6e"],["D:/blog/MaxMa/public/archives/index.html","dc4441aece240608a81bf2d475a8b8f9"],["D:/blog/MaxMa/public/categories/index.html","32d1fb687d2f07d26f235d5d0e53e65a"],["D:/blog/MaxMa/public/categories/学习-教程/index.html","573e007d939a58e4d232b3ebe11fbb5c"],["D:/blog/MaxMa/public/categories/笔记/index.html","98801d1803f16fdbfe77a08c83693274"],["D:/blog/MaxMa/public/css/changecss.css","ecfd1aba7bf144206dcc67a19a756b12"],["D:/blog/MaxMa/public/css/index.css","e67849e627efe3f12bffe0e128f6138e"],["D:/blog/MaxMa/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/MaxMa/public/icon/alipay.png","51a35add6a48edc9f6eed2b39807d518"],["D:/blog/MaxMa/public/icon/icon1.png","2922542a29ab906f957c729bec273e9a"],["D:/blog/MaxMa/public/icon/icon2.png","0766d2d7d7223e7b128dc2442190f447"],["D:/blog/MaxMa/public/icon/paypal.png","1056e927b9156c1933257164a2bb301d"],["D:/blog/MaxMa/public/icon/wechatpay.png","0975b712ab8177acb26c4a119fe94c6f"],["D:/blog/MaxMa/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/blog/MaxMa/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/MaxMa/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/blog/MaxMa/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/MaxMa/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/blog/MaxMa/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/blog/MaxMa/public/index.html","0c8fc642af06196ea3c5588cf33d94de"],["D:/blog/MaxMa/public/js/changejs.js","a679ac367956093aef9410e9b7e47609"],["D:/blog/MaxMa/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/blog/MaxMa/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/blog/MaxMa/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/blog/MaxMa/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/blog/MaxMa/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/blog/MaxMa/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/blog/MaxMa/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/blog/MaxMa/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/blog/MaxMa/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/MaxMa/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/blog/MaxMa/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/blog/MaxMa/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/blog/MaxMa/public/link/index.html","0dd3b1498d0ff4c9d5c3ba8907ec56f3"],["D:/blog/MaxMa/public/movies/index.html","14d876e38e3f80850c7bce6e33e2395b"],["D:/blog/MaxMa/public/posts/16107/index.html","43e39669a4b4e85425c6efe1ded32493"],["D:/blog/MaxMa/public/posts/3149592280/index.html","d2e1035f6ec6908c86abb34ba621257b"],["D:/blog/MaxMa/public/posts/3149592280/turing1.jpg","791914b74293074f92ab56755a16990b"],["D:/blog/MaxMa/public/posts/36867/index.html","37149386ddb038286b15d0672b49c4ab"],["D:/blog/MaxMa/public/posts/36867/zeal1.png","3c9ae58ad6c3d8b368803a2e7c70e62c"],["D:/blog/MaxMa/public/posts/36867/zeal2.png","cec78b0036a7a03cf367fe72047029e1"],["D:/blog/MaxMa/public/posts/36867/zeal3.png","bac7d8f06b9f7630f84131237ee7a0a2"],["D:/blog/MaxMa/public/posts/36867/zeal4.png","4cc30f9210b310cb4271f44bd903c2a7"],["D:/blog/MaxMa/public/posts/36867/zeal5.png","ef64d6ab6d855ff60b8da53fa21820fb"],["D:/blog/MaxMa/public/posts/36867/zeal6.png","3524dc8cda20e25f23712abbf62698ae"],["D:/blog/MaxMa/public/posts/36867/zeal7.png","9a8dc00cbedeac868a4ec44d0547a0d1"],["D:/blog/MaxMa/public/posts/56606/biaoqian.png","8908426852239b471459f8a7662296e0"],["D:/blog/MaxMa/public/posts/56606/index.html","d61d5457d9ad21da9cda4460c3f0f4e5"],["D:/blog/MaxMa/public/tags/Hexo/index.html","c91231bcb024993bc18410992a00cb89"],["D:/blog/MaxMa/public/tags/index.html","b4d3fafa0f69ce9b8be9c3bc96e63954"],["D:/blog/MaxMa/public/tags/图灵机/index.html","97f8102a4c0eb26e8a06ec8cc664674f"],["D:/blog/MaxMa/public/tags/编程思维训练/index.html","6a3e07daab9cdc3074abb712c0718bff"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







