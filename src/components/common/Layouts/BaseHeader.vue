<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

const { user, signOut } = useAuth()
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
