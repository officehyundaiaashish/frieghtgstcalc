const CACHE_NAME = "gst-calculator-v3"; // Increment cache version for new changes

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./service-worker.js", // Added service worker itself to cache
  "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
