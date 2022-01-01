module.exports = {
  images: {
    domains: ['live.staticflickr.com'],
  },
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
