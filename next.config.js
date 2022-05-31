module.exports = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/faq2/',
        destination: '/nathan/',
      },
    ]
  },
}