<footer style="bottom: 1%; position: absolute; left:0; width: 100%; margin: 0; overflow: hidden;">
    <div style="text-align: center;"> Alpha version | Made with 🍑 by <a href="https://github.com/Olyxz16"> Cédric Sazos </a> </div>
</footer>


<style> 

    :global(body) {
        background-image: url(/background.svg);
        background-repeat: no-repeat;
        background-size: 100vw 100vh;

        display: flex;
        flex-direction: column;
        text-align: center;

        font-family: MochiyPopOne;
    }
    @font-face {
        font-family: 'MochiyPopOne';
        font-style: normal;
        font-weight: 500;
        src: url('/fonts/MochiyPopOne.ttf');
    }

    a:visited {
        color: rgb(0,0,0,1);
    }

</style>


<slot />