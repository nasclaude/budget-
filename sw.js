// Offline support.
// Pages: fetched fresh when online (so updates show right away), from the cache when offline or slow.
// Icons and other files: from the cache, refreshed in the background.
const CACHE = 'budget-v3';
const FILES = ['./', './index.html', './manifest.json', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const network = fetch(req).then(res => {
    if (!res.ok) return res;
    const copy = res.clone();
    return caches.open(CACHE).then(c => c.put(req, copy)).then(() => res);
  });
  e.waitUntil(network.catch(() => {}));
  const cached = caches.match(req, { ignoreSearch: true });
  if (req.mode === 'navigate') {
    const slow = new Promise(resolve => setTimeout(resolve, 3000)).then(() => cached).then(c => c || network);
    e.respondWith(Promise.race([network, slow]).catch(() => cached.then(c => c || Response.error())));
  } else {
    e.respondWith(cached.then(c => c || network));
  }
});
