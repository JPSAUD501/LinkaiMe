/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/home',
            destination: 'https://bsky.app/profile/linkai.me',
            permanent: false,
            basePath: false
          },
        ]
    },
};

export default nextConfig;
