module.exports = {
  images: {
    domains: ['live.staticflickr.com'],
  },
  pageExtensions: ['page.tsx'],
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
