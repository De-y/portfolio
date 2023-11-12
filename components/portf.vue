<template>

        <h1 class="title" href="https://github.com/de-y">de-y</h1> <br>
        <div class="sidebyside">
            <div class="introimg">
                <img class="" src="https://avatars.githubusercontent.com/u/61808223" alt="De-y's avatar" width="300" height="300"> <br>
            </div>
            <div class="columnside">
                <h3>I'm De-y, a 15 year old developer.</h3>
                <p>I've been programming since I was 8 (first in Scratch and now in Python and many more).</p>

            </div>
        </div>
</template>
<style scoped>

    .columnside {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        word-wrap: break-word;
        width: fit-content;
    }
    .adiv {
        text-align: center;
    }
    .columnside h3 {
        font-size: 30px;
    }
    .columnside p {
        width: 70%;
        text-align: center;
        font-size: 20px;
    }
   .introimg img {
        transition: 500ms;
        transform: rotate(-5deg);
   }
   .introimg img:hover {
        transform: rotate(5deg);
        scale: 1.1;
        border-radius: 100%;
   }
    .title {
        font-size: 3rem;
        text-align: center;
        color: rgb(255, 255, 255);
        transition: 250ms;
    }
    .title:hover {
        color: navajowhite;
        transition: 250ms;
        text-decoration: line-through;
        text-decoration-color: red;
    }

    .card_portfolio_corner img {
        border-radius: 10px;
        width: 50%;
        height: 1%;
        margin-left: 15px;
    }
    .introimg {
        border-radius: 100px;
        width: min-content;
    }
    .introimg img {
        border-radius: 10px;
    }
    .sidebyside {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    } 
</style>