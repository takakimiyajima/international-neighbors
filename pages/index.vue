<template>
  <div>
    <NuxtLayout />
    <Suspense>
      <template #default>
        <div class="container" style="padding: 50px 0 100px 0">
          <Account v-if="currentUser" />
          <Auth v-else />
        </div>
      </template>
      <template #fallback>
        <span>読み込み中…</span>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

const { currentUser } = useAuth()
const router = useRouter()

onMounted(() => {
  if (!currentUser.value) {
    router.replace('/signin')
  }
})
</script>
