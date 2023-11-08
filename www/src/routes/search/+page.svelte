<script>

  import Episode from './Episode.svelte';
  import UpdateArea from '../UpdateArea.svelte';

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
    <div id="update">
      <UpdateArea title={data.title} season={data.season} ep={data.ep}/>
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
  #update {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -70%);
    -webkit-transform: translateY(-50%, -70%);
  }

</style>
