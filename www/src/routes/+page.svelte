
<div>
    <h1 id="title"> Pomme </h1>
    
    <div id="search">
        <h3 id="description"> Cherchez un film ou une série pour savoir si elle est safe ! </h3>
        <form method="GET" action="/search">
            <div id="search-bar-div">
                <input type="text" id="search-bar" name="title"/>
                <input type="submit" id="search-button">
            </div>
        </form>
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



</style>