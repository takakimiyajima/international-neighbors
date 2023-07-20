<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

const { signInWithPassword, user, email, password } = useAuth()

const handleLogin = async () => {
  await signInWithPassword()
}

watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})
</script>

<template>
  <form @submit.prevent="handleLogin">
    <div class="">
      <h1 class="">Supabase + Nuxt 3</h1>
      <p class="">Sign in via magic link with your email below</p>
      <div>
        <input v-model="email" type="email" placeholder="Your email" />
        <input v-model="password" type="password" placeholder="Your password" />
      </div>
      <div>
        <VBtn>SignIn!!</VBtn>
      </div>
      <NuxtLink to="/resend">Forget your password??</NuxtLink>
    </div>
  </form>
</template>
