

<script> 

    import { fromTimestamp } from "$lib/timestamps";

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
    export let episode;
    /**
     * @type {boolean}
     */
    export let safe;
    /**
     * @type {Array<number>}
     */
    export let timestamps;

    $: times = timestamps.map(val => fromTimestamp(val));
    $: undetermined = !safe && timestamps.length == 0;

</script>




<div>

    <h1> {title} </h1>
    <h2> S:{season} E:{episode} </h2>
    
    {#if safe}
        <p> Is Safe ! </p>
    {:else if undetermined}
        <p> Undetermined </p>
    {:else}
        <p> Is Unsafe ! </p>
        {#each times as {hour, minute, second}}
            <p> At : {hour}h{minute}m{second}s </p>
        {/each}
    {/if}

</div>