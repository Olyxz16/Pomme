<script>
  
  import SearchArea from "./SearchArea.svelte";
  import UpdateArea from "./UpdateArea.svelte";

  /**
   * @type {string}
   */
  let title = '';
  /**
   * @type {number}
   */
  let season = 0;
  /**
   * @type {number}
   */
  let ep = 0;

</script>

<svelte:head>
    <title>Pomme</title>
</svelte:head>
<div>
    <h1 id="title"> Pomme </h1>
    
    <div id="search">
        <SearchArea bind:title={title} bind:season={season} bind:ep={ep}/>
        <hr>
        <UpdateArea bind:title={title} bind:season={season} bind:ep={ep}/>
    </div>
</div>




<style>

    #title {
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translate(-50%, -5%);
        -webkit-transform: translate(-50%, -5%);
    }

    #search {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
    }

    hr {
        margin-top: 50px;
        filter: blur(1.3px);
    }

</style>