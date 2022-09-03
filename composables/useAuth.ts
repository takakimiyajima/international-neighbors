import { Session, User } from '@supabase/supabase-js'

export const useAuth = () => {
  const supabase = useSupabaseClient()
  const currentSession = ref<Session>(null)
  const currentUser = ref<User>(null)

  const session = supabase.auth.session()
  if (session) {
    currentSession.value = session
    currentUser.value = session.user
  }

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      currentSession.value = session
      currentUser.value = session.user
    }
  })

  return {
    currentSession,
    currentUser,
  }
}
