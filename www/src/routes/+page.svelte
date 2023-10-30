<script>
  
  import SearchArea from "./SearchArea.svelte";
  import UpdateArea from "./UpdateArea.svelte";

  /**
   * @type {string}
   */
  let title;
  /**
   * @type {number}
   */
  let season;
  /**
   * @type {number}
   */
  let ep;

</script>

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
    }

</style>