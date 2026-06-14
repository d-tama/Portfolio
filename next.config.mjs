/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // public/admin/index.html (Decap CMS) を /admin で表示できるようにする
      { source: "/admin", destination: "/admin/index.html" },
    ];
  },
};

export default nextConfig;
