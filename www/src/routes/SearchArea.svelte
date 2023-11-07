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
        <input id="season" type="number" name="season" bind:value={season}/>
        <label for="ep"> Episode </label>
        <input id="episode" type="number" name="ep" bind:value={ep}/>
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
        padding-left: 10px;
    }

    #search-button {
        width: 50px;
        min-width: 50px;
        height: 50px;
        min-height: 50px;
        border-radius: 5px;
        margin-left: 10px;
    }


    #search-bar, #season, #episode {
        border-radius: 5px;
        border-color: #00000000;
        background-color: rgb(220, 221, 223, 0.5);
        box-shadow: inset 2px 2px 5px 1px rgba(120, 120, 120, 0.2);
    }
    #search-button {
        border-radius: 5px;
        border-color: #00000000;
        background-color: rgb(220, 221, 223, 0.5);
        box-shadow: 3px 3px 3px 1px rgba(120, 120, 120, 0.2);
    }


    #numbers-div {
        margin-top: 30px;
    }

</style>
