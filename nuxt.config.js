
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  env: {
    VUE_APP_BASE_URL: process.env.VUE_APP_BASE_URL
  },
  head: {
    title: 'Agent-ERP-Homebolttech',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/icon.jpeg' },
      { rel: 'stylesheet', href: "/css/bootstrap.css" },
      { rel: 'stylesheet', href: "/css/common.css" }
    ],
    script: [
      { src: "/js/poly.js", body: true },
      { src: "/js/adonis.js", body: true },
      { src: "/js/external_api.js", body: true },
      { src: "https://www.google.com/recaptcha/api.js", body: true }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'iview/dist/styles/iview.css',
    '@/assets/css/form.css',
    '@/assets/css/main.css',
    '@/assets/css/responsive.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/iview',
    '@/plugins/common.js',
    { src: '@/plugins/vue-html2pdf', mode: 'client' }

  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/moment',
    '@nuxtjs/recaptcha'
  ],
   recaptcha: {
     hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
     siteKey: '6LdDMNMZAAAAAJbRimJFcaf0bvGqznvDib9x88QH', // Site key for requests
     version: 2, // Version
     size: 'normal' // Size: 'compact', 'normal', 'invisible' (v2)
   },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // baseURL: "http://localhost:3333/",
    // baseURL: "https://api.hombolttech.net/",
    baseURL: process.env.BASE_URL,
    credentials: true


  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  server: {
    // port: 8000, // default: 3000
    port: 8086, // default: 3000
    host: 'localhost' // default: localhost
    // port: 4544, // default: 3000
    // host: 'localhost' // default: localhost
  },

}
