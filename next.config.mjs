/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "isgmfnmowrovgewtashx.supabase.co",
      },
    ],
  },
};

export default nextConfig;
