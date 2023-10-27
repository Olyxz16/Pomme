



<div>
    <h1 id="title"> Pomme </h1>
    
    <div id="search">
        <h3 id="description"> Cherchez un film ou une série pour savoir si elle est safe ! </h3>
        <input type="text" id="search-bar"/>
    </div>

    <footer style="bottom: 1%; position: absolute; left:0; width: 100%; margin: 0; overflow: hidden;">
        <div style="text-align: center;"> Made with 🍑 by <a href="https://github.com/Olyxz16"> Cédric Sazos </a> </div>
    </footer>

</div>




<style>

    :global(body) {
        background-color: rgb(82, 76, 146);
        display: flex;
        flex-direction: column;
        text-align: center;
    }

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

    #search-bar {
        position: relative;
        margin-top: 15px;
        left: 50%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);

        width: 130%;
        font-size: 2em;

        border-radius: 25px;
    }



</style>