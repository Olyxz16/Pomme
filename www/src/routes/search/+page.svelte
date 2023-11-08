<script>

  import Episode from './Episode.svelte';

    /** @type {import('./$types').PageData} */
  export let data;

</script>



<svelte:head>
    <title>{data.title ?? ""}</title>
</svelte:head>
<div> 
    <div id="episode">
      <Episode data={data} />
    </div>
</div>
<style>

  #episode {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    -webkit-transform: translate(-50%, -40%);
  }

</style>
