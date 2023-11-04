<script>

  import Episode from './Episode.svelte';

    /** @type {import('./$types').PageData} */
  export let data;

</script>



<svelte:head> 
    <title>{data.title ?? ""}</title>
</svelte:head>
<div> 
    <Episode 
        title={data.title ?? ""}
        season={data.season}
        ep={data.ep}
        safe={data.safe}
        timestamps={data.timestamps} />
</div>
