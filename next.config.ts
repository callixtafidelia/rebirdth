/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this for static export
  trailingSlash: true, // Add this for GitHub Pages
  images: {
    unoptimized: true // Add this for static export
  }
}

export default nextConfig