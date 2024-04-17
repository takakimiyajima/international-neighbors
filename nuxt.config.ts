import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'International Family',
      meta: [
        {
          name: 'description',
          content: 'Enjoy to connect with your international neighbor',
        },
      ],
      // link: [{ rel: 'icon', href: '/favicon.png' }],
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],
  css: ['vuetify/lib/styles/main.sass'],
  devtools: { enabled: true },
  debug: true,
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  modules: ['@nuxtjs/supabase'],
  runtimeConfig: {
    // サーバーサイドでのみ使用可能なキー
    public: {
      // この中に書かれているものはクライアントサイドでも利用可能
      supabase: {
        url: process.env.NUXT_PUBLIC_SUPABASE_URL,
        key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
      },
    },
  },
  srcDir: 'src/',
  supabase: {
    // Options
  },
  ssr: false,
  typescript: {
    shim: false, // shimsファイル生成の無効化（VSCodeでVolarを使う場合はfalseにする）
    strict: true, // 型チェックを厳格化
    typeCheck: false, // nuxt devまたはnuxt build時に型チェックを実行
  },
})
