module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'page-transitions-travelapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Native-like Page Transitions with Vue and Nuxt, A Travel App'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Josefin+Sans|Playfair+Display'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fontlibrary.org/face/aileron'
      }
    ]
  },
  router: {
    middleware: 'pages'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#0c4498' },
  /*
  ** Build configuration
  */
 
  build: {}
}
