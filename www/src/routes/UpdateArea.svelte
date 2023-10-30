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
    let hour;
    /**
     * @type {number}
     */
    let minute;
    /**
     * @type {number}
     */
    let second;

    async function Update() {
        fetch("/update", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                season: season,
                ep: ep,
                hour: hour,
                minute: minute,
                second: second
            })
        });
    }

</script>



<div>

    <h3> Remplissez ces champs pour ajouter un avertissement </h3>

    <div id="time-div">
        <label for="hour"> H: </label>
        <input type="number" name="hour" bind:value={hour}>
        <label for="minute"> M: </label>
        <input type="number" name="minute" bind:value={minute}>
        <label for="second"> S: </label>
        <input type="number" name="second" bind:value={second}>
        <button on:click={Update}> update </button>
    </div>

    

</div>





<style> 

    input {
        width: 10%;
    }

</style>