// // next.config.js
// module.exports = {
//     async rewrites() {
//         return [
//           {
//             source: '/api/:path*',
//             destination: 'http://localhost:3000/:path*',
//           },
//         ]
//       },
//   };
module.exports = {
    async headers() {
      return [
        {
          source: "/(.*)", // Apply to all routes
          headers: [
            {
              key: "Cache-Control",
              value: "no-store, max-age=0", // Prevent caching
            },
          ],
        },
      ];
    },
  };
  