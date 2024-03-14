/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [{
         protocol: 'https',
         hostname: 'image.tmdb.org',
         pathname: '**'
      }]
   },
   typescript: {
      ignoreBuildErrors: true
   },
   eslint: {
      ignoreBuildErrors: true,
      ignoreDuringBuilds: true
   }
};

export default nextConfig;