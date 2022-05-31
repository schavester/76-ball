module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/faq2/',
        destination: '/nathan/',
      },
    ]
  },
}