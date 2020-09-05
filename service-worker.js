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

var precacheConfig = [["D:/blog/MaxMa/public/404.html","303f71e5b8021901f0de766cd61f9e3d"],["D:/blog/MaxMa/public/Gallery/index.html","09d4d7223f17617256b7b3eb4dc7ffad"],["D:/blog/MaxMa/public/Gallery/life/index.html","99b7e052cb8ab47eb53f41812fcb43fa"],["D:/blog/MaxMa/public/Gallery/life/其他/index.html","261fea8724ff3ffbdc5a16cf9fa7ee90"],["D:/blog/MaxMa/public/Gallery/life/兼职/index.html","2a4a78d1cc4a08ae3490f7ed06428fbd"],["D:/blog/MaxMa/public/Gallery/life/家/index.html","a0f0a90f0e87c20f32dde45470b47c1e"],["D:/blog/MaxMa/public/Gallery/stills/index.html","d34a632cd421731531e90b9865beec56"],["D:/blog/MaxMa/public/Gallery/travel/index.html","4310290375816bfaa70d76f117e27d2e"],["D:/blog/MaxMa/public/Gallery/travel/上海/index.html","96b287aa086853c066b6c90384b7ca70"],["D:/blog/MaxMa/public/Gallery/travel/云南/index.html","7b8a747a979bc6b5d8e06fcb1e038760"],["D:/blog/MaxMa/public/Gallery/travel/北京/index.html","1973848512bb472074063104cce52799"],["D:/blog/MaxMa/public/Gallery/travel/山东/index.html","2dde7d62388ca840df411744aa871bee"],["D:/blog/MaxMa/public/Gallery/travel/摩尔曼斯克/index.html","63c2ec04350a12163a2ab8fd5309c37a"],["D:/blog/MaxMa/public/Gallery/travel/江苏/index.html","dd49741ae9329e4b30aae015bb57590f"],["D:/blog/MaxMa/public/Gallery/travel/泰国/index.html","328d07fb857c78726e1262c695900eaa"],["D:/blog/MaxMa/public/Gallery/travel/海南/index.html","341110c0db857c9860896d6c6a5fb0c2"],["D:/blog/MaxMa/public/Gallery/travel/湖北/index.html","44fecd28852ac3a4f0995eacd7692606"],["D:/blog/MaxMa/public/Gallery/travel/莫斯科/index.html","01ab8aab6dc2a8e46a3fb63b2645b6ff"],["D:/blog/MaxMa/public/Gallery/travel/香港/index.html","dc9726cc23a1ce8c4c1c31aaed61a26f"],["D:/blog/MaxMa/public/Gallery/youth/hqzx/index.html","b28600d20127c6398d2b450603fbc2fd"],["D:/blog/MaxMa/public/Gallery/youth/index.html","b37ba485ff09cf7c6b5288f634f370dc"],["D:/blog/MaxMa/public/Gallery/youth/jjxx/index.html","7c585bdb9892a10d5b79eeb44bbe9bb8"],["D:/blog/MaxMa/public/Gallery/youth/msu/index.html","5112403fa93237819b9a576e95cec98f"],["D:/blog/MaxMa/public/Gallery/youth/yxzx/index.html","3af9e3acbde37ba7c05c17ede1aeb70f"],["D:/blog/MaxMa/public/about/index.html","8e412152b525363c6e542ba75dd03267"],["D:/blog/MaxMa/public/archives/2020/07/index.html","f882a20442111a22f70a13dcdea66cfd"],["D:/blog/MaxMa/public/archives/2020/08/index.html","db4ff56d04ca405ebf0cc37326e18f27"],["D:/blog/MaxMa/public/archives/2020/09/index.html","7b5f4db522ea5db908b0633f2a399695"],["D:/blog/MaxMa/public/archives/2020/index.html","bd984304d02666d009b2345c619234d6"],["D:/blog/MaxMa/public/archives/index.html","c0525d16031f11bd857c15c35c8a5e08"],["D:/blog/MaxMa/public/categories/index.html","0da4079a967ba88666442eb93c029306"],["D:/blog/MaxMa/public/categories/学习-教程/index.html","a421e17bcb54f2aaa2951cdb8e0da0ae"],["D:/blog/MaxMa/public/categories/笔记/index.html","10c905041d69f9f9c99839ae6f30d119"],["D:/blog/MaxMa/public/css/changecss.css","ecfd1aba7bf144206dcc67a19a756b12"],["D:/blog/MaxMa/public/css/index.css","e67849e627efe3f12bffe0e128f6138e"],["D:/blog/MaxMa/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/blog/MaxMa/public/icon/alipay.png","51a35add6a48edc9f6eed2b39807d518"],["D:/blog/MaxMa/public/icon/icon1.png","2922542a29ab906f957c729bec273e9a"],["D:/blog/MaxMa/public/icon/icon2.png","0766d2d7d7223e7b128dc2442190f447"],["D:/blog/MaxMa/public/icon/paypal.png","1056e927b9156c1933257164a2bb301d"],["D:/blog/MaxMa/public/icon/wechatpay.png","0975b712ab8177acb26c4a119fe94c6f"],["D:/blog/MaxMa/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/blog/MaxMa/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/blog/MaxMa/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/blog/MaxMa/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/blog/MaxMa/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/blog/MaxMa/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/blog/MaxMa/public/index.html","283e48a3ed48f387df9c99e5a564a09e"],["D:/blog/MaxMa/public/js/changejs.js","a679ac367956093aef9410e9b7e47609"],["D:/blog/MaxMa/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/blog/MaxMa/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/blog/MaxMa/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/blog/MaxMa/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/blog/MaxMa/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/blog/MaxMa/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/blog/MaxMa/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/blog/MaxMa/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/blog/MaxMa/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/blog/MaxMa/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/blog/MaxMa/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/blog/MaxMa/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/blog/MaxMa/public/link/index.html","8ee9b5657f2ad2315a2d6780f31b6959"],["D:/blog/MaxMa/public/movies/index.html","c831e0e6f83a608075fa7f5ded239419"],["D:/blog/MaxMa/public/posts/16107/index.html","dfe4dfb1e8c0b6c5395c5df97d3fcf5f"],["D:/blog/MaxMa/public/posts/252214153/index.html","1e7ab84babcaac2df4c6bb177167382d"],["D:/blog/MaxMa/public/posts/3149592280/index.html","19204e44feda86d0d8682d49a83c2ab9"],["D:/blog/MaxMa/public/posts/3149592280/turing1.jpg","791914b74293074f92ab56755a16990b"],["D:/blog/MaxMa/public/posts/36867/index.html","0665e97d81738ae57ce9f7dfbb178a2c"],["D:/blog/MaxMa/public/posts/36867/zeal1.png","3c9ae58ad6c3d8b368803a2e7c70e62c"],["D:/blog/MaxMa/public/posts/36867/zeal2.png","cec78b0036a7a03cf367fe72047029e1"],["D:/blog/MaxMa/public/posts/36867/zeal3.png","bac7d8f06b9f7630f84131237ee7a0a2"],["D:/blog/MaxMa/public/posts/36867/zeal4.png","4cc30f9210b310cb4271f44bd903c2a7"],["D:/blog/MaxMa/public/posts/36867/zeal5.png","ef64d6ab6d855ff60b8da53fa21820fb"],["D:/blog/MaxMa/public/posts/36867/zeal6.png","3524dc8cda20e25f23712abbf62698ae"],["D:/blog/MaxMa/public/posts/36867/zeal7.png","9a8dc00cbedeac868a4ec44d0547a0d1"],["D:/blog/MaxMa/public/posts/56606/biaoqian.png","8908426852239b471459f8a7662296e0"],["D:/blog/MaxMa/public/posts/56606/index.html","5763346e3e73cb3a46278395c95831ef"],["D:/blog/MaxMa/public/tags/Hexo/index.html","fe66fd996c1563612e3235ac4ae06676"],["D:/blog/MaxMa/public/tags/index.html","499e127f1280017b8bac61112c6103cc"],["D:/blog/MaxMa/public/tags/图灵机/index.html","a9405511565a7139284963c628199a94"],["D:/blog/MaxMa/public/tags/编程思维训练/index.html","6c87ace44525ae852ac1351aa11f97ee"]];
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







