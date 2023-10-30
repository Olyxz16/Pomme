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

async function getTimestamps(title: string, season: number, ep: number): Promise<any> {
  const { data, error } = await supabase
  .from('pomme')
  .select('timestamps')
  .eq('title', title)
  .eq('season', season)
  .eq('ep', ep);
  if(data === undefined || data === null || data.length === 0) {
    return [];
  }
  return {
    timestamps: data[0].timestamps
  };
} 





export async function getSingle(title: string) {
  const { data, error } = await supabase
  .from('pomme')
  .select('title, season, ep, safe, timestamps')
  .eq('title', title)

  if(error) {
    throw error;
  }

  if(data === undefined || data.length === 0) {
    return {
      type: "single",
      title: title,
      season: 0,
      episode: 0,
      safe: false,
      timestamps: []
    }
  }

  return {
    type: "single",
    title: title,
    season: 0,
    episode: 0,
    safe: data[0].safe,
    timestamps: data[0].timestamps
  }
}
export async function getEpisode(title: string, season: number, ep: number) {
  const { data, error } = await supabase
  .from('pomme')
  .select('title, season, ep, safe, timestamps')
  .eq('title', title)
  .eq('season', season)
  .eq('ep', ep);

  if(error) {
    throw error;
  }
  if(data === undefined || data.length === 0) {
    return {
      type: "episode",
      title: title,
      season: season,
      episode: ep,
      safe: false,
      timestamps: [],
    }
  }

  return {
    type: "episode",
    title: title,
    season: season,
    episode: ep,
    safe: data[0].safe,
    timestamps: data[0].timestamps
  }
}