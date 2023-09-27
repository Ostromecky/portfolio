// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],
  /*
   ** Global CSS
   */
  css: [
    'assets/css/tailwind.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  app: {
    head: {
      link: [
        {
          rel: 'preload',
          as: 'font',
          href: '_nuxt/assets/fonts/Poppins/Poppins-Regular.ttf',
          type: 'font/ttf',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          as: 'font',
          href: '_nuxt/assets/fonts/Poppins/Poppins-Bold.ttf',
          type: 'font/ttf',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          as: 'font',
          href: '_nuxt/assets/fonts/Poppins/Poppins-Italic.ttf',
          type: 'font/ttf',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          as: 'font',
          href: '_nuxt/assets/fonts/Poppins/Poppins-Light.ttf',
          type: 'font/ttf',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
})
