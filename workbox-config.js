// // workbox-config.js
// module.exports = {
//   runtimeCaching: [
//     {
//       urlPattern: /^https:\/\/tfm\.2cubedtest\.com\/.*$/, // Change to your GraphQL endpoint
//       handler: 'NetworkFirst', // or 'CacheFirst', depending on your preference
//       options: {
//         cacheName: 'graphql-cache',
//         expiration: {
//           maxEntries: 50,
//           maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//         },
//         networkTimeoutSeconds: 10, // Fallback to cache if network request takes longer than 10 seconds
//       },
//     },
//     {
//       urlPattern: /\/api\/contact/,
//       handler: 'NetworkFirst',
//       options: {
//         cacheName: 'api-cache',
//         expiration: {
//           maxEntries: 50,
//           maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
//         },
//       },
//     },
//     {
//       urlPattern: /^https?.*/, // Cache all others
//       handler: 'StaleWhileRevalidate',
//       options: {
//         cacheName: 'general-cache',
//         expiration: {
//           maxEntries: 200,
//           maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//         },
//       },
//     },
//   ],
// };

