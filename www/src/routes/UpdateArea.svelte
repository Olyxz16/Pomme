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
    
    input {
        border-radius: 5px;
        border-color: #00000000;
        background-color: rgb(220, 221, 223, 0.5);
        box-shadow: inset 2px 2px 5px 1px rgba(120, 120, 120, 0.2);
    }
    input[type="number"] {
        width: 10%;
    }
    input:focus {
        border-color: rgb(1,1,0, 0.2);
        outline: 3px solid rgba(255, 255, 0, 0.5);
    }

    button {
        border-radius: 5px;
        border-color: #00000000;
        background-color: rgb(220, 221, 223, 0.5);
        box-shadow: 3px 3px 3px 1px rgba(120, 120, 120, 0.2);
    }

</style>