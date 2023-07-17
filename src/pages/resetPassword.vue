<script setup lang="ts">
const router = useRouter()
const { auth } = useSupabaseAuthClient()

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await auth.resetPasswordForEmail(email.value, {
      redirectTo: '/',
    })
    if (error) throw error
    alert('Check your email for the login link!')

    router.push({ path: '/' })
  } catch (error: any) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin">
    <div class="">
      <h1 class="">Please type your email to send the link</h1>
      <div>
        <input v-model="email" type="email" placeholder="Your email" />
      </div>
      <div>
        <input
          type="submit"
          :value="loading ? 'Loading' : 'Reset Password'"
          :disabled="loading"
        />
      </div>
      <NuxtLink to="/resendPassword">Forget your password??</NuxtLink>
    </div>
  </form>
</template>
