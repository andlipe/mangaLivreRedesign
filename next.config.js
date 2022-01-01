module.exports = {
  images: {
    domains: ['live.staticflickr.com'],
  },
  pageExtensions: ['page.tsx', 'page.ts'],
  redirects() {
    return [
      {
        source: '/',
        destination: '/Home',
        permanent: true,
      },
    ]
  },
}
