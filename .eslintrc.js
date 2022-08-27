module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/script-setup-no-uses-vars': 'off',
    'vue/script-setup-uses-vars': 'error',
  },
}
