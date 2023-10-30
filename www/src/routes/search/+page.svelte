<script>

  import Episode from './Episode.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

</script>



<div> 
    <Episode 
        title={data.title ?? ""}
        season={data.season}
        episode={data.episode}
        safe={data.safe}
        timestamps={data.timestamps} />
</div>
