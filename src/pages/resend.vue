<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

const { resetPasswordForEmail, email } = useAuth()

const loading = ref(false)

const handleLogin = async () => {
  await resetPasswordForEmail()
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
