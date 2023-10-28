import { createClient } from '@supabase/supabase-js';

import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private';

const supabase = createClient(
  SUPABASE_URL ?? "",
  SUPABASE_ANON_KEY ?? ""
)

export async function get(title: string, season: number, ep: number) {
  const { data, error } = await supabase
  .from('pomme')
  .select('*')
  .eq('title', title)
  .eq('season', season)
  .eq('season', ep);

  if(error) {
    return {};
  }
  
  if(data === undefined || data.length === 0) {
    return {};
  }

  return {
    safe: data[0].safe,
    timestamps: data[0].timestamps
  }
}