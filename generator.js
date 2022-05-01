document.addEventListener("DOMContentLoaded", start)
let memes = ["img/chad.jpg","img/cheems.jpg","img/eminem.jpg","img/m&b.jpg","img/globalwarmin.jpg","img/kanye.jpg",
"img/idiot.jpg","img/horse.png","img/ricardo.webp","img/dooomerboy.jpg", "img/pikachu.png"]
function start(){
    let btnrandom = document.getElementById("random")
    btnrandom.addEventListener("click", random)
}

function random(){
    let randomMeme = Math.floor(Math.random(1,10)*11);
    if(randomMeme == 0){
        document.getElementById("meme").src= memes[0];
        document.body.removeChild(document.getElementById("random"))
    }else if(randomMeme == 1){
        document.getElementById("meme").src= memes[1];
        document.body.removeChild(document.getElementById("random"))
    }else if(randomMeme == 2){
        document.getElementById("meme").src= memes[2];
        document.body.removeChild(document.getElementById("random"))
    }else if(randomMeme == 3){
        document.getElementById("meme").src= memes[3];
        document.body.removeChild(document.getElementById("random"))
    }else if(randomMeme == 4){
        document.getElementById("meme").src= memes[4];
        document.body.removeChild(document.getElementById("random"))
    }else if(randomMeme == 5){
        document.getElementById("meme").src= memes[5];
        document.body.removeChild(document.getElementById("random"))
    }else if(randomMeme == 6){
        document.getElementById("meme").src= memes[6];
        document.body.removeChild(document.getElementById("random"))
    }else if(randomMeme == 7){
        document.getElementById("meme").src= memes[7];
        document.body.removeChild(document.getElementById("random"))
    }else if(randomMeme == 8){
        document.getElementById("meme").src= memes[8];
        document.body.removeChild(document.getElementById("random"))
    }else if(randomMeme == 9){
        document.getElementById("meme").src= memes[9];
        document.body.removeChild(document.getElementById("random"))
    }else if(randomMeme == 10){
        document.getElementById("meme").src= memes[10];
        document.body.removeChild(document.getElementById("random"))
    }
}