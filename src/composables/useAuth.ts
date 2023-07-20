export const useAuth = () => {
  const user = useSupabaseUser()
  const { auth } = useSupabaseAuthClient()

  const email = ref('takaki.mz@gmail.com')
  const password = ref('Drumsdrums1')

  const signInWithPassword = async () => {
    try {
      const { error } = await auth.signInWithPassword({
        email: email.value,
        password: password.value,
      })
      if (error) throw error

      clearPassword()
    } catch (error: any) {
      alert(error.error_description || error.message)
    }
  }

  const resetPasswordForEmail = async () => {
    try {
      const { error } = await auth.resetPasswordForEmail(email.value, {
        redirectTo: 'http://localhost:3000/resetPassword',
      })
      if (error) throw error

      alert('Check your email for the login link!')
      clearPassword()
    } catch (error: any) {
      alert(error.error_description || error.message)
    }
  }

  const updateUser = async () => {
    try {
      const { error } = await auth.updateUser({
        password: password.value,
      })
      if (error) throw error

      alert('Check your email for the login link!')
      clearPassword()
    } catch (error: any) {
      alert(error.error_description || error.message)
    }
  }

  const signOut = async () => {
    await auth.signOut()
    await navigateTo('/signIn')
  }

  const clearPassword = () => {
    password.value = ''
  }

  return {
    user,
    email,
    password,
    signInWithPassword,
    resetPasswordForEmail,
    updateUser,
    signOut,
    clearPassword,
  }
}
