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
     * @type {number}
     */
    let hour = 0;
    /**
     * @type {number}
     */
    let minute = 0;
    /**
     * @type {number}
     */
    let second = 0;
    /**
     * @type {boolean}
     */
    let safe = false;


    async function Update() {
        fetch("/api", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                season: season,
                ep: ep,
                hour: hour,
                minute: minute,
                second: second,
                safe: safe
            })
        });
    }

</script>



<div>

    <h3> Remplissez ces champs pour ajouter un avertissement </h3>

    <div id="time-div">
        <label for="hour"> Safe ? </label>
        <input type="checkbox" name="safe" bind:checked={safe}>
        <label for="hour"> H: </label>
        <input type="number" name="hour" bind:value={hour} disabled={safe}>
        <label for="minute"> M: </label>
        <input type="number" name="minute" bind:value={minute} disabled={safe}>
        <label for="second"> S: </label>
        <input type="number" name="second" bind:value={second} disabled={safe}>
        <button on:click={Update}> update </button>
    </div>

</div>





<style> 

    input[type="number"] {
        width: 10%;
    }

</style>