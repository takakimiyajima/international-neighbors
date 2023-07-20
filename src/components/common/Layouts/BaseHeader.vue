<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

const { user, signOut } = useAuth()
</script>

<template>
  <VAppBar>
    <VAppBarTitle>International Neighbors</VAppBarTitle>
    <template #append>
      <VBtn v-if="user" @click="() => signOut()">SignOut</VBtn>
      <!-- <v-btn icon>
        <v-icon color="purple-darken-2" icon="mdi-dots-vertical"></v-icon>
      </v-btn> -->
    </template>
  </VAppBar>
</template>
