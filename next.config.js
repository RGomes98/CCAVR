/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverComponentsExternalPackages: ['@node-rs/argon2'] },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: `${process.env.BLOB_STORE_ID}.public.blob.vercel-storage.com` },
    ],
  },
};

module.exports = nextConfig;
