//--------------/Sound/---------------//
let indexSound = new Audio("./Images/Redbone.mp3");
// let clickSound = new Audio("./Images/Redbone.mp3");


function newSound(sound, level, looping){
    sound.volume = level;
    sound.play();
    sound.loop = looping;
}


let soundOff = document.getElementById("soundOFFLogo");
let soundOn = document.getElementById("soundONLogo");


soundOff.addEventListener("click", function(){
    indexSound.pause();
    }
)


soundOn.addEventListener("click", function(){
    newSound(indexSound, 0.1, true)
    }
)

newSound(indexSound, 0.1, true)





// //--------------/Add ons/---------------//

// let canvas = document.querySelector('.canvas')
// let ctx = canvas.getContext('2d')

// let heart = new Image ()
// heart.src = './Images/heart.png'
// ctx.drawImage(heart,10,10);


//--------------/Button/---------------//
let btn = document.querySelector(".btn_play")
btn.addEventListener(`mouseover`, function( event ) {   
    btn.style.background= "#ffbe3b";
    btn.style.color= "#e7759a";
    ctx.drawImage(heart,1000,500);

});
btn.addEventListener(`mouseout`, function( event ) {   
    btn.style.color= "#ffbe3b";
    btn.style.background= "#e7759a";
    btn.style.borderColor= "#ffbe3b";

});


btn.addEventListener(`mouseover`, function( event ) {   
    ctx.drawImage(heart,10,10);

});


