<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseAuthClient()

watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})
</script>

<template>
  <div class="col-6 form-widget">
    <h1 class="header">Supabase + Nuxt 3</h1>
    <p class="description">Sign in via magic link with your email below</p>
    <button @click="auth.signInWithOAuth({ provider: 'github' })">
      GitHub
    </button>
  </div>
</template>
