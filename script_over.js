
//--------------/Sound/---------------//

let indexSound = new Audio("./Images/GameOver.mp3");
function newSound(sound, level, looping){
    sound.volume = level;
    sound.play();
    // sound.loop = looping;
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


//--------------/Button/---------------//
let btn = document.querySelector(".btn_play_again")
btn.addEventListener(`mouseover`, function( event ) {   
    btn.style.background= "#ffbe3b";
    btn.style.color= "#ff414d";
    // btn.style.borderColor= "white";
});
btn.addEventListener(`mouseout`, function( event ) {   
    btn.style.color= "#ffbe3b";
    btn.style.background= "#ff414d";
    btn.style.borderColor= "#ffbe3b";

});
