self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

// Custom runtime caching strategy
workbox.routing.registerRoute(
  /^https:\/\/tfm\.2cubedtest\.com\/.*$/,
  new workbox.strategies.NetworkFirst({
    cacheName: 'graphql-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

// Add more routes as needed
