import { createClient } from '@supabase/supabase-js';

import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private';

const supabase = createClient(
  SUPABASE_URL ?? "",
  SUPABASE_ANON_KEY ?? ""
)


export async function setSafe(title: string, season: number, ep: number) {
  const { error } = await supabase
  .from('pomme')
  .insert({
      title: title,
      season: season,
      ep: ep,
      safe: true,
      timestamps: null
    });
}
export async function setUnsafe(title: string, season: number, ep: number, timestamp: number) {
  const { error } = await supabase
  .from('pomme')
  .insert({
      title: title,
      season: season,
      ep: ep,
      safe: false,
      timestamps: [timestamp]
    });
}

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