<script setup lang="ts">
  const { signInWithPassword, user, email, password } = useAuth()

  watchEffect(() => {
    if (user.value) {
      navigateTo('/')
    }
  })
</script>

<template>
  <VContainer>
    <VCard max-width="500" class="mx-auto">
      <template #title>
        <div class="font-weight-bold text-center">
          Let's get started International Neighbors!!
        </div>
      </template>
      <VCardActions>
        <VCol>
          <VTextField v-model="email" label="email" type="email" />
          <VTextField v-model="password" label="password" type="password" />
          <div class="d-flex flex-column">
            <VBtn
              color="primary"
              variant="tonal"
              class="text-capitalize"
              @click="() => signInWithPassword()"
            >
              SignIn!!
            </VBtn>
            <NuxtLink class="mt-4" to="/resend">Forget your password?</NuxtLink>
          </div>
        </VCol>
      </VCardActions>
    </VCard>
  </VContainer>
</template>
