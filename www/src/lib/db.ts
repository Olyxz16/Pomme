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


export async function getSingle(title: string) {
  const { data, error } = await supabase
  .from('pomme')
  .select('safe, timestamps')
  .eq('title', title)

  if(error || data === undefined || data.length === 0) {
    return {};
  }

  return {
    type: "single",
    safe: data[0].safe,
    timestamps: data[0].timestamps
  }
}
export async function getSeason(title: string, season: number) {
  const { data, error } = await supabase
  .from('pomme')
  .select('safe, timestamps')
  .eq('title', title)
  .eq('season', season)

  if(error || data === undefined || data.length === 0) {
    return {};
  }

  return {
    type: "season",
    safe: data[0].safe,
    timestamps: data[0].timestamps
  }
}
export async function getEpisode(title: string, season: number, ep: number) {
  const { data, error } = await supabase
  .from('pomme')
  .select('safe, timestamps')
  .eq('title', title)
  .eq('season', season)
  .eq('season', ep);

  if(error || data === undefined || data.length === 0) {
    return {};
  }

  return {
    type: "episode",
    safe: data[0].safe,
    timestamps: data[0].timestamps
  }
}