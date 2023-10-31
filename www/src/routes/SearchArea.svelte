<script>

    /**
     * @type {string}
     */
    export let title;
    /**
     * @type {number}
     */
    export let season;
    /**
     * @type {number}
     */
    export let ep;

    /**
     * @type {string[]}
     */
    let datalist = [];


    async function updateDatalist() {
        const url = '/api/movies?'+ new URLSearchParams([
            ['title', title]
        ]);
        const data = await fetch(url);
        datalist = await data.json();
    }   

</script>


<h3 id="description"> Cherchez un film ou une série pour savoir si elle est safe ! </h3>
<form method="GET" action="/search" autocomplete="off">
    <div id="search-bar-div">
        <input type="text" id="search-bar" name="title" list="title-list" bind:value={title} on:input={updateDatalist}/>
        <datalist id="title-list">
            {#each datalist as data}
                <option value={data}></option>
            {/each}
        </datalist>
        <input type="submit" value="Vérifier" id="search-button">
    </div>
    <div id="numbers-div">
        <label for="season"> Saison </label>
        <input type="number" name="season" bind:value={season}/>
        <label for="ep"> Episode </label>
        <input type="number" name="ep" bind:value={ep}/>
    </div>
</form>



<style>
    #search-bar-div {
        position: relative;
        margin-top: 15px;
        left: 50%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);

        display: flex;
        justify-content: space-between;
    }

    #search-bar {
        width: 130%;
        font-size: 2em;
        border-radius: 25px;
    }

    #search-button {
        width: 50px;
        min-width: 50px;
        height: 50px;
        min-height: 50px;
        border-radius: 25px;
        margin-left: 10px;
    }


    #numbers-div {
        margin-top: 30px;
    }

</style>
