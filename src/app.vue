<script setup lang="ts">
// Supabaseのクライアント作成
import { createClient } from '@supabase/supabase-js'
const runtimeConfig = useRuntimeConfig()
createClient(
  runtimeConfig.public.supabase.url as string,
  runtimeConfig.public.supabase.key as string
)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
