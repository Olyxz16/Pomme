<script>

  import Episode from './Episode.svelte';

    /** @type {import('./$types').PageData} */
  export let data;

</script>



<svelte:head>
    <title>{data.title ?? ""}</title>
</svelte:head>
<div> 
    <Episode data={data} />
</div>
