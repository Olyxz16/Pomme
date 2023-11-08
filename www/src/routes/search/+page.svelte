<script>

  import MediaResult from './MediaResult.svelte';
  import UpdateArea from '../UpdateArea.svelte';

    /** @type {import('./$types').PageData} */
  export let data;

</script>



<svelte:head>
    <title>{data.title ?? ""}</title>
</svelte:head>
<div>
    <div id="update">
      <UpdateArea title={data.title} season={data.season} ep={data.ep}/>
    </div>
    <div id="episode">
      <MediaResult data={data} />
    </div>
</div>


<style>

  #update {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -15%);
    -webkit-transform: translateY(-50%, -15%);
  }
  #episode {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    -webkit-transform: translate(-50%, -40%);
  }
  

</style>
