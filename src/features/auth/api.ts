import { supabase } from '../../services/supabaseClient'

// Google login
export const loginWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })

  if (error) throw new Error(error.message)
}

// Email login
export const loginWithEmailPassword = async (
  email: string,
  password: string
) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return {
      data: null,
      error: error.message,
    }
  }

  return {
    data,
    error: null,
  }
}

// Sign up
export const signUpWithEmailPassword = async (
  email: string,
  password: string
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  console.log("SIGNUP:", data, error)
  if (error) throw new Error(error.message)

  return data
}

// Logout
export const logout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) throw new Error(error.message)
}