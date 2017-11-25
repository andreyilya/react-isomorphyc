self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('mysite-dynamic').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/bundle.js',
      ]);
    })
  );
});
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       return response || fetch(event.request);
//     })
//   );
// });
