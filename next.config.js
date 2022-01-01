module.exports = {
  images: {
    domains: ['static3.mangalivre.net'],
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
