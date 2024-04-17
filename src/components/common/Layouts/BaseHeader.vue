<script setup lang="ts">
  const { user, signOut } = useAuth()
  const router = useRouter()

  const moveToProfile = () => router.push({ path: '/profile' })
</script>

<template>
  <VAppBar color="background">
    <VAppBarTitle>International Neighbors</VAppBarTitle>
    <template #append>
      <VBtn
        v-if="user"
        variant="outlined"
        class="text-capitalize mr-4"
        @click="() => moveToProfile()"
      >
        Profile
      </VBtn>
      <VBtn
        v-if="user"
        variant="outlined"
        class="text-capitalize"
        @click="() => signOut()"
      >
        SignOut
      </VBtn>
    </template>
  </VAppBar>
</template>
