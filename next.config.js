module.exports = {
  async redirects() {
    return [
      {
        source: '/tags/zippy-the-pinhead/',
        destination: 'tag/zippy-the-pinhead/',
        permanent: true,
      },
            {
        source: '/zippysays/',
        destination: '2006/06/09/zippysays/',
        permanent: true,
      },
     ]
  },
}
