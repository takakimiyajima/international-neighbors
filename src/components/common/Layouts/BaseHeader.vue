<script setup lang="ts">
const { user, signOut } = useAuth()
// console.log("user")
// console.log(user.value)
</script>

<template>
  <VAppBar color="background">
    <VAppBarTitle>International Neighbors</VAppBarTitle>
    <template #append>
      <VBtn v-if="user" class="text-capitalize" @click="() => signOut()">
        SignOut
      </VBtn>
    </template>
  </VAppBar>
</template>
