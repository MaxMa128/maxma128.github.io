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

var precacheConfig = [["D:/blog/MaxMa/public/404.html","a6e9b30c95b3efaedd8ce0f6a2f77d18"],["D:/blog/MaxMa/public/Gallery/index.html","f343a77dbc9bd311585a52ca7ea8eb82"],["D:/blog/MaxMa/public/Gallery/life/index.html","bfeb124cd2d18b56eda332434a731fad"],["D:/blog/MaxMa/public/Gallery/life/其他/index.html","ca07eaa61bdaaa0bceeb878fcee07b77"],["D:/blog/MaxMa/public/Gallery/life/兼职/index.html","b89f9f3cb3fab7a40f643da739972117"],["D:/blog/MaxMa/public/Gallery/life/家/index.html","5984abf0edf81dddbd48cfa3499917d9"],["D:/blog/MaxMa/public/Gallery/stills/index.html","9050a54214cd4b16305fdbfa74a874b2"],["D:/blog/MaxMa/public/Gallery/travel/index.html","bd0873e8d778c4320076be015229e6cd"],["D:/blog/MaxMa/public/Gallery/travel/上海/index.html","c434b3978d3d1259779582f7d000c51d"],["D:/blog/MaxMa/public/Gallery/travel/云南/index.html","b4a8e77babeff0a9d5ef575b5c4013e7"],["D:/blog/MaxMa/public/Gallery/travel/北京/index.html","714649143fdce1b008345dbf3f3278dc"],["D:/blog/MaxMa/public/Gallery/travel/山东/index.html","fe493c5bc07f1853e5eaca7ba3aa6cff"],["D:/blog/MaxMa/public/Gallery/travel/摩尔曼斯克/index.html","c16bb5704adb4a71bb197760b56e33db"],["D:/blog/MaxMa/public/Gallery/travel/江苏/index.html","84d0880841de2c5842d0f6be41d26675"],["D:/blog/MaxMa/public/Gallery/travel/泰国/index.html","38bc10e33afa5ada9aea22d51f31dd44"],["D:/blog/MaxMa/public/Gallery/travel/海南/index.html","e675499b20ceceb75e4376e69669e757"],["D:/blog/MaxMa/public/Gallery/travel/湖北/index.html","4c14924f84b29ce6ab3e4372916be49f"],["D:/blog/MaxMa/public/Gallery/travel/莫斯科/index.html","8d371db00295fe0c147723bc8ccd4e5c"],["D:/blog/MaxMa/public/Gallery/travel/香港/index.html","b60541e17db776f7d1dbdc3dc4e68515"],["D:/blog/MaxMa/public/Gallery/youth/hqzx/index.html","2038f6b65268b540d11f8b0c7835451c"],["D:/blog/MaxMa/public/Gallery/youth/index.html","308617113952df01166efec6313ea77d"],["D:/blog/MaxMa/public/Gallery/youth/jjxx/index.html","c74d8fbad829cfdd1382d22de950e661"],["D:/blog/MaxMa/public/Gallery/youth/msu/index.html","17ef381d0ba510b03c71c2b51c652d06"],["D:/blog/MaxMa/public/Gallery/youth/yxzx/index.html","40ecf963ff76205a9e806a45aa5af38d"],["D:/blog/MaxMa/public/about/index.html","2bb516e557b2bf936bee8902c9f75427"],["D:/blog/MaxMa/public/archives/2020/07/index.html","28e7698db50b1ad96741a3fb6e44fc6f"],["D:/blog/MaxMa/public/archives/2020/08/index.html","6ccdcca958e55e1b37e871ffcef57a20"],["D:/blog/MaxMa/public/archives/2020/index.html","3b028a1980568f4b8c812bd60bc0bcfa"],["D:/blog/MaxMa/public/archives/index.html","4fdf0b143010fcb3fdd00c6e20b4decf"],["D:/blog/MaxMa/public/categories/index.html","8475b4ab452f61575067fe83284c7310"],["D:/blog/MaxMa/public/categories/笔记/index.html","fced999175b553075004c7e840612748"],["D:/blog/MaxMa/public/css/changecss.css","ecfd1aba7bf144206dcc67a19a756b12"],["D:/blog/MaxMa/public/css/index.css","e67849e627efe3f12bffe0e128f6138e"],["D:/blog/MaxMa/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/MaxMa/public/icon/alipay.png","51a35add6a48edc9f6eed2b39807d518"],["D:/blog/MaxMa/public/icon/icon1.png","2922542a29ab906f957c729bec273e9a"],["D:/blog/MaxMa/public/icon/icon2.png","0766d2d7d7223e7b128dc2442190f447"],["D:/blog/MaxMa/public/icon/paypal.png","1056e927b9156c1933257164a2bb301d"],["D:/blog/MaxMa/public/icon/wechatpay.png","0975b712ab8177acb26c4a119fe94c6f"],["D:/blog/MaxMa/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/blog/MaxMa/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/MaxMa/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/blog/MaxMa/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/MaxMa/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/blog/MaxMa/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/blog/MaxMa/public/index.html","642e50d5577fa697d0565fe6710ffc8c"],["D:/blog/MaxMa/public/js/changejs.js","a679ac367956093aef9410e9b7e47609"],["D:/blog/MaxMa/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/blog/MaxMa/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/blog/MaxMa/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/blog/MaxMa/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/blog/MaxMa/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/blog/MaxMa/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/blog/MaxMa/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/blog/MaxMa/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/blog/MaxMa/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/MaxMa/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/blog/MaxMa/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/blog/MaxMa/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/blog/MaxMa/public/link/index.html","5e976719b3eee34eae66bd42bcca1106"],["D:/blog/MaxMa/public/movies/index.html","45e37322e9a01ffb2ddff162b7cf708c"],["D:/blog/MaxMa/public/posts/16107/index.html","8b684b672e619cb56b156b2cca8a5b9d"],["D:/blog/MaxMa/public/posts/3149592280/index.html","595bf40f3421e2fce1077b94a3054b51"],["D:/blog/MaxMa/public/posts/3149592280/turing1.jpg","791914b74293074f92ab56755a16990b"],["D:/blog/MaxMa/public/posts/36867/index.html","83e44c94b9b1e37fef67793a7950adf9"],["D:/blog/MaxMa/public/posts/36867/zeal1.png","3c9ae58ad6c3d8b368803a2e7c70e62c"],["D:/blog/MaxMa/public/posts/36867/zeal2.png","cec78b0036a7a03cf367fe72047029e1"],["D:/blog/MaxMa/public/posts/36867/zeal3.png","bac7d8f06b9f7630f84131237ee7a0a2"],["D:/blog/MaxMa/public/posts/36867/zeal4.png","4cc30f9210b310cb4271f44bd903c2a7"],["D:/blog/MaxMa/public/posts/36867/zeal5.png","ef64d6ab6d855ff60b8da53fa21820fb"],["D:/blog/MaxMa/public/posts/36867/zeal6.png","3524dc8cda20e25f23712abbf62698ae"],["D:/blog/MaxMa/public/posts/36867/zeal7.png","9a8dc00cbedeac868a4ec44d0547a0d1"],["D:/blog/MaxMa/public/posts/56606/biaoqian.png","8908426852239b471459f8a7662296e0"],["D:/blog/MaxMa/public/posts/56606/index.html","95ea96606efe5274eed155a6d7090459"],["D:/blog/MaxMa/public/tags/Hexo/index.html","25cc25af0d9722ee6eed354a94fae400"],["D:/blog/MaxMa/public/tags/index.html","1e3e66b44672443d9065d9e19e5d7ae6"]];
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







