<template>
  <div>
    <NuxtLayout />
    <div class="container" style="padding: 50px 0 100px 0">
      <Account v-if="currentUser" />
      <Auth v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

const { currentUser } = useAuth()
</script>
