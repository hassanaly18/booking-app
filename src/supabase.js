
// import { createBrowserClient } from "@supabase/ssr";

// export const createClient = () =>
//   createBrowserClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
//   );



import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

export const supabase = createBrowserSupabaseClient();