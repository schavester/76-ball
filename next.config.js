module.exports = {
  async redirects() {
    return [
      {
        source: 'tags/zippy-the-pinhead/',
        destination: 'tag/zippy-the-pinhead/',
        permanent: true,
      },
            {
        source: '/nathansucks',
        destination: '/nathan-sucks',
        permanent: true,
      },
     ]
  },
}
