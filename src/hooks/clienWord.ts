import { createClient } from '@supabase/supabase-js'

export const supabaseWord = createClient(
  import.meta.env.VITE_WORD_SUPABASE_URL,
  import.meta.env.VITE_WORD_SUPABASE_ANON_KEY
);