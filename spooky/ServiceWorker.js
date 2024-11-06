const cacheName = "NikosDev-Spooky Island-0.1";
const contentToCache = [
    "Build/0e4acddc2507cd81174c8375e5c7b738.loader.js",
    "Build/e347d52f796dc5b9e5a105e3a6deb53b.framework.js.unityweb",
    "Build/b484523474539adf73e3f8fd681640a2.data.unityweb",
    "Build/2668e3be5e913b169b460aaa5f1c5205.wasm.unityweb",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
