// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  typescript: {
    shim: false, // shimsファイル生成の無効化（VSCodeでVolarを使う場合はfalseにする）
    strict: true, // 型チェックを厳格化
    typeCheck: false // nuxt devまたはnuxt build時に型チェックを実行
  },
  modules: ['@nuxtjs/supabase'],
  runtimeConfig: {
    // サーバーサイドでのみ使用可能なキー
    public: {
      // この中に書かれているものはクライアントサイドでも利用可能
    }
  },
  devtools: { enabled: true }
})
