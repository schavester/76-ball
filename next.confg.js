const redirects = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/tags/',
        destination: '/tag/',
        permanent: true,
      },
     ]
  },
}
