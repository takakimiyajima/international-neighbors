<script setup lang="ts">
  const user = useSupabaseUser()
  const { auth } = useSupabaseAuthClient()

  const loading = ref(false)
  const email = ref('')
  const password = ref('')

  const handleLogin = async () => {
    try {
      loading.value = true
      const { error } = await auth.signInWithPassword({
        email: email.value,
        password: password.value,
      })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      loading.value = false
    }
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
        <input
          type="submit"
          :value="loading ? 'Loading' : 'SignIn'"
          :disabled="loading"
        />
      </div>
      <NuxtLink to="/resendPassword">Forget your password??</NuxtLink>
    </div>
  </form>
</template>
