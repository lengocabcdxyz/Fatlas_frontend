import { supabase } from "../lib//supabase";

export async function searchWords(
  q: string
) {
  return await supabase.rpc(
    "search_dictionary",
    {
      q,
    }
  );
}

export async function getWords(
  page: number,
  limit = 50
) {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  return await supabase
    .from("words")
    .select("*")
    .order("word", {
      ascending: true,
    })
    .range(from, to);
}