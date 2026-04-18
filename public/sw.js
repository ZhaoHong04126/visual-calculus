const CACHE_NAME = 'calculus-v2';
const ASSETS = [
  './',
  './index.html',
  './favicon.svg',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  // 強制更新 Service Worker，不要等待舊的 SW 關閉
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('activate', (event) => {
  // 啟動後立即接管所有頁面
  event.waitUntil(clients.claim());
  // 清理舊版本的快取
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // 優先返回快取，若無快取則發起網路請求
      return response || fetch(event.request);
    })
  );
});
