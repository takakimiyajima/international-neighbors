<script setup lang="ts">
const { auth } = useSupabaseAuthClient()

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await auth.resetPasswordForEmail(email.value, {
      redirectTo: 'http://localhost:3000/resetPassword',
    })
    if (error) throw error
    alert('Check your email for the login link!')
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
          :value="loading ? 'Loading' : 'Resend'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>
