const SUPABASE_URL = https:"https://wxekjgjiumfjkvkogsdu.supabase.co/rest/v1/" ;
const SUPABASE_ANON_KEY = "sb_publishable_IbYynHShQgJyz_Ix9UWABw_iMnwN3Ju";
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function getProfile() {
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return null;
  const { data } = await sb.from("profiles").select("*").eq("id", user.id).single();
  return data;
}

async function logout() {
  await sb.auth.signOut();
  location.href = "index.html";
}