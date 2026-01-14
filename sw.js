const CACHE_NAME = 'bd-jp-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// インストール時にファイルを保存
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// ネットがない時はキャッシュから読み込む
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});