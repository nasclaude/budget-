// Offline support: answer from the cache right away, refresh the cache from the network in the background.
const CACHE = 'budget-v1';
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
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(cached => cached || network));
});
