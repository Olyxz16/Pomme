import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private';

const MIN_TIME_DIFF = 10; // seconds

const supabase = createClient(
  SUPABASE_URL ?? "",
  SUPABASE_ANON_KEY ?? ""
)


export async function setSafe(title: string, season: number, ep: number) {
  
  const { timestamps } = await getTimestamps(title, season, ep);

  if(timestamps !== undefined && timestamps !== null && timestamps.length !== 0) {
    return {status: 'error'};
  }

  const { error } = await supabase
  .from('pomme')
  .insert({
      title: title,
      season: season,
      ep: ep,
      safe: true,
      timestamps: []
    });

  return {status: 'success'};

}
export async function setUnsafe(title: string, season: number, ep: number, timestamp: number) {
  
  if(isNaN(timestamp)) {
    return;
  }

  let { timestamps } = await getTimestamps(title, season, ep);


  if(timestamps === undefined || timestamps === null) {
    insert(title, season, ep, timestamp);
    return {status: 'success'}
  }


  if(timestamps.length == 0) {
    timestamps.push(timestamp);
  } else {
    for(let ts of timestamps) {
      if(Math.abs(timestamp - ts) < MIN_TIME_DIFF) {
        return {status: "success"};
      }
    }
    timestamps.push(timestamp);
  }
  
  await update(title, season, ep, timestamps);

  return {status: 'success'};

}


async function insert(title: string, season: number, ep: number, timestamp: number) {
  await supabase
    .from('pomme')
    .insert({
      title: title,
      season: season,
      ep: ep,
      safe: false,
      timestamps: [timestamp]
    });
}
async function update(title: string, season: number, ep: number, timestamps: number[]) {
  await supabase
  .from('pomme')
  .update({
      safe: false,
      timestamps: timestamps
    })
  .eq('title', title)
  .eq('season', season)
  .eq('ep', ep);
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
      title: title,
      season: season,
      ep: ep,
      safe: false,
      timestamps: [],
    }
  }

  return {
    title: title,
    season: season,
    ep: ep,
    safe: data[0].safe,
    timestamps: data[0].timestamps
  }
}