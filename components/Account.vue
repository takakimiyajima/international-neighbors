<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="user?.email" disabled />
    </div>
    <div>
      <label for="username">Username</label>
      <input id="username" v-model="username" type="text" />
    </div>

    <div>
      <input
        type="submit"
        class="button primary block"
        :value="isLoading ? 'Loading ...' : 'Update'"
        :disabled="isLoading"
      />
    </div>

    <div>
      <button class="button block" :disabled="isLoading" @click="signOut">
        Sign Out
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
const supabaseClient = useSupabaseClient()

const isLoading = ref(true)
const username = ref('')
const avatarPath = ref('')

isLoading.value = true
const user = useUser()
const { data } = await supabaseClient
  .from('profiles')
  .select(`username, first_name, last_name`)
  .eq('id', user.value?.id)
  .single()
if (data) {
  username.value = data.username
  avatarPath.value = data.avatar_url
}
isLoading.value = false

const updateProfile = async () => {
  try {
    isLoading.value = true
    const user = useUser()
    const updates = {
      id: user.value?.id,
      username: username.value,
      avatar_url: avatarPath.value,
      updated_at: new Date(),
    }
    const { error } = await supabaseClient.from('profiles').upsert(updates, {
      returning: 'minimal', // Don't return the value after inserting
    })
    if (error) throw error
  } catch (error: any) {
    alert(error.message)
  } finally {
    isLoading.value = false
  }
}

const signOut = async () => {
  try {
    isLoading.value = true
    const { error } = await supabaseClient.auth.signOut()
    if (error) throw error
  } catch (error: any) {
    alert(error.message)
  } finally {
    isLoading.value = false
  }
}
</script>
