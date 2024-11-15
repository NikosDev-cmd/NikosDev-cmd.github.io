const cacheName = "NikosDev-Charlie-Charlie-0.1";
const contentToCache = [
    "Build/aede95d42df744ae134cc84482225e12.loader.js",
    "Build/bab03bc0dd6a940d2ab43547b5a59ceb.framework.js.br",
    "Build/3fced722139d5871a90f069da28ebeeb.data.br",
    "Build/acd8e61770cbea1593ae4b47bd300c64.wasm.br",
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
