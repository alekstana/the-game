
let indexSound = new Audio("./Images/Redbone.mp3");
let clickSound = new Audio("./Images/Redbone.mp3");


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
    newSound(indexSound, 0.8, true)
    }
)



newSound(indexSound, 0.8, true)
