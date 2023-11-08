

<script> 

    import { fromTimestamp } from "$lib/timestamps";

    /** @type {import('./$types').PageData} */
    export let data;

    /**
     * @type {string}
     */
    $: title = data.title;

    /**
     * @type {number}
     */
    $: season = data.season;
    /**
     * @type {number}
     */
    $: ep = data.ep;
    /**
     * @type {boolean}
     */
    $: safe = data.safe;

    /**
     * @type {Array<number>}
     */
    $: timestamps = data.timestamps;

    $: times = timestamps.map(val => fromTimestamp(val));
    $: undetermined = !safe && timestamps.length == 0;

</script>




<div id="search">

    <h1> {title} </h1>
    <h2> 
        {season != 0 ? "Saison "+season : ""} 
        {ep != 0 ? "Episode "+ep : ""}
    </h2>
    
    {#if safe}
        <p> Est safe ! </p>
    {:else if undetermined}
        <p> Pas de données. </p>
    {:else}
        <p> N'est pas safe ! </p>
        <p> Aux time codes : </p>
        {#each times as {hour, minute, second}}
            <p> {hour}h{minute}m{second}s </p>
        {/each}
    {/if}

</div>
