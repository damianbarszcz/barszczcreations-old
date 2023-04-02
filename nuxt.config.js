export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Barszcz Creations',
    htmlAttrs: {
      lang: 'pl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0' }
    ],
    
  },

  router: {
    // Przykład konfiguracji niestandardowych ścieżek routingu
    // Ustawiamy alias dla strony '/about-us' na '/o-nas'
    extendRoutes(routes, resolve) {
      routes.push(
        {
        name: 'about',
        path: '/o-mnie',
        component: resolve(__dirname, 'pages/about.vue')
        },
        {
          name: 'contact',
          path: '/kontakt',
          component: resolve(__dirname, 'pages/contact.vue')
        },
        {
          name: 'login',
          path: '/logowanie',
          component: resolve(__dirname, 'pages/login.vue')
        },
        {
          name: 'privacy',
          path: '/polityka-prywatnosci',
          component: resolve(__dirname, 'pages/privacy.vue')
        },
        {
          name: 'project',
          path: '/projekt',
          component: resolve(__dirname, 'pages/project.vue')
        },

        {
          name: 'search',
          path: '/wyszukaj/',
          component: resolve(__dirname, 'pages/search.vue')
        },

        {
          name: 'overview',
          path: '/przeglad',
          component: resolve(__dirname, 'pages/overview.vue')
        },
      )
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/app.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-purgecss',
  ],

  purgecss: {
    enabled: true, // Always enable purgecss
  },

  'vue/multi-word-component-names': 'off',

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
