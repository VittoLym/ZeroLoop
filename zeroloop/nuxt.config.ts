export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Zeroloop | Automate the loop.',
      meta: [
        { name: 'description', content: 'We build internal tools, automations, and integrations that eliminate repetitive work and help businesses operate smarter.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts/geist.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts/geist-mono.min.css' },
      ],
    },
  },
})
