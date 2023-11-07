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

        font-family: WorkSans;
    }
    @font-face {
        font-family: 'WorkSans';
        font-style: normal;
        font-weight: 500;
        src: url('/fonts/WorkSans.ttf');
    }

    a:visited {
        color: rgb(0,0,0,1);
    }

</style>


<slot />