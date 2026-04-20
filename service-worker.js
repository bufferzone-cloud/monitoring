const CACHE_NAME = 'driver-monitor-v1';
const urlsToCache = [
  '/monitoring/',
  '/monitoring/index.html',
  '/monitoring/admin.html',
  '/monitoring/driver.html',
  '/monitoring/logo.png',
  '/monitoring/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
