'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d0c18ea1088346d48552a0adb408e426",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/100x64.png": "638ceef9b14ed2e7b8deed56e225cc08",
"assets/images/algo.jpg": "95081bf261ed71e1e6c26ca554aad20e",
"assets/images/and.png": "4eb9b0866b267ff86d1ae6168fdb3542",
"assets/images/android.png": "5ed3eb8452b0ecd6cfc97c0d903280ee",
"assets/images/androidstudio.png": "bf0cfaf9d1a437e3262060d109420f19",
"assets/images/baust64.png": "5801a688ebf74f1a75f99ed3357ee970",
"assets/images/baust80x80.png": "839472985e024987a558a07baba0652a",
"assets/images/bussh.png": "62af696bc2a280e91906ee8b73078e69",
"assets/images/busshr.png": "344b688352021b578f665c570ba8371d",
"assets/images/call.png": "cf77260d22ae76c16394a9dff35b7e52",
"assets/images/cl64x64.png": "5ab09969cf6ed759fe9abe4c53fed2a0",
"assets/images/codeblocks.png": "9fab7e035dea329ac87b69598460ec88",
"assets/images/cp.png": "c030a16c6aa2096ae13655e064a03433",
"assets/images/cplus64x64.png": "f65cf2b001b44bfb250a30caf19bc154",
"assets/images/cpscr.png": "24f0fd77238c60bf730f805e94f1dcba",
"assets/images/css64x64.png": "ca1b31e674812e75b98e8e33294f9e3a",
"assets/images/dart64x64.png": "d9ab87f9f79fda14f58739a2ccbf0fd6",
"assets/images/dev.png": "6e2ac86fcb934c33897bbb96a841fb79",
"assets/images/download.png": "75d3acbeda8633b72015010704ef7dde",
"assets/images/ds.jpg": "3a6e5ad7f0e3b92d7ed7259db6b0be8e",
"assets/images/email.png": "efccbc75a6922785880e261b9222038e",
"assets/images/etutor64x64.jpg": "989d3006361edc02891e1f99e1dd1ba5",
"assets/images/facebook.png": "9e8597e2eab2195c07a8345c7a881e84",
"assets/images/firebase64x64.png": "54ba5da64ea862c940d4f4b3a9b1e71e",
"assets/images/fltr.png": "d67c5451d95bec02ea6f8d3920df8c0e",
"assets/images/flutter.png": "bc20ac3c833cdfbb9230c8a0dc483d46",
"assets/images/git24.png": "6c70aef3d38c2280fced516031c60f59",
"assets/images/gith.png": "893e1d0b85195a46c4f8ea91d6d78390",
"assets/images/github.png": "aaa0dc8e18f491b91877ddaf41ab546d",
"assets/images/gmail.png": "bcb7da3b0772db5b4294eeeb8b6c0553",
"assets/images/html64x64.png": "6b459b28b1cb2cad57261d587d9e6f2c",
"assets/images/java64x64.png": "0a241ec5d02be538a5b8433ae950dc14",
"assets/images/jupyter.png": "170711bb8db685acdd3ab25565021f56",
"assets/images/linkedin.png": "6900785d05011bbdf0e140a895a34e6d",
"assets/images/meup.jpg": "5ce2f01262f938a71383c8f3aefd8a5d",
"assets/images/netbeans.png": "f31f9f2bb2f7d5b01efef9551921fdf0",
"assets/images/php64x64.png": "837856e1c990bcfc1c89c9b68c29c2bf",
"assets/images/play.png": "de8a7006907508ba9a74ac2c35300b4c",
"assets/images/playstore24.png": "92b3a5b6c60cb34583c3baa422abd8a6",
"assets/images/powerpoint.jpg": "94232af8985126753fb332136f831181",
"assets/images/problemsolving.png": "b15c04e5d34f576d17d7750725ac80be",
"assets/images/python64x64.png": "6d3e9eb66454d920cd5d56fc1907f022",
"assets/images/sql.png": "81c08c9fad3c072d2218debd1b24d26b",
"assets/images/telephone.png": "00c25303a13c119d9af725482f6c263b",
"assets/images/texstudio.jpg": "405a1ac0d57d987d14a03dc52a8608b1",
"assets/images/TextfilesLaTeXSourceDocument51264x64.png": "9b1ab7151312d25d29ad0334c7182386",
"assets/images/twitter.png": "5b9d396b2b1a64d77c9788c406ed3028",
"assets/images/wdp.png": "14bab4b57650ce491476c2d88c23a339",
"assets/images/word.jpg": "d01809be3645acb8a29920b5df7dd1df",
"assets/images/xd.png": "5f24c4fc28c3f881caf29cff85001d5b",
"assets/NOTICES": "730e5d5aa26918a97d7892ac0f35401d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b1e1f88231adbc2fa4bfab62b4568930",
"/": "b1e1f88231adbc2fa4bfab62b4568930",
"main.dart.js": "e3cdcc5181d0bfd7f8e35d1c9b17324a",
"manifest.json": "0a5e8fbb63f9cb529f03ebd4a038c740",
"version.json": "6dbe2332cbf85ec1853a9a926bfd1045"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
