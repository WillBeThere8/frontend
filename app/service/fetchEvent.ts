import { supabaseUrl, supabaseKey } from "@/config/supabase";

function fetchEvent({ query }: any) {
  const apiKey = supabaseKey?.toString(); // Optional conversion to string

  if (!apiKey) {
    throw new Error("Supabase API key not found"); // Handle missing key
  }

  return fetch(`${supabaseUrl}/rest/v1/${query}`, {
    headers: {
      apiKey,
    },
    cache: "no-cache",
  });
}

export default fetchEvent;
