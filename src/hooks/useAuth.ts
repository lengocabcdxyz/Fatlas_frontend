import { useEffect } from 'react'
import { supabase } from '../services/supabaseClient'

export function useAuth() {
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("AUTH EVENT:", event)

        if (session?.user) {
          console.log("USER:", session.user.email)
          console.log("PROVIDER:", session.user.app_metadata?.provider)
        } else {
          console.log("NO USER")
        }
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])
}