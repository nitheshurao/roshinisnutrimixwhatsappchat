/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "res.cloudinary.com",
          "lh3.googleusercontent.com",
          "upload.wikimedia.org",
          "cdn.pixabay.com"
        ],
      },
      // experimental: {
      //   middlewarePrefetch: true,
      // },
};

export default nextConfig;
