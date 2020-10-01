let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

let intervalId = 0;
let gameTime = 0;
let score = 0;
let corgiIndexes = []
let points = 1;


// --------- IMAGES ---------

let bg = new Image()
bg.src = './Images/bg.png'

let floor = new Image ()
floor.src = './Images/Floor.png'

let houses = new Image ()
houses.src = './Images/Houses.png'

let trees = new Image ()
trees.src = './Images/Trees.png'

let clouds = new Image ()
clouds.src = './Images/Clouds.png'

let bill = new Image ()
bill.src = './Images/bill_skateboard.png'

// let billHoover = new Image ()
// billHoover.src = './Images/bill_hooverboard.png'


let shark = new Image ()
shark.src = './Images/shark.png'

let corgi = new Image ()
corgi.src = './Images/corgi_love.png'

let ghost = new Image ()
ghost.src = './Images/ghost.png'

let groundhog = new Image ()
groundhog.src = './Images/groundhog.png'
//start screen
let gameStart = new Image ()
gameStart.src = './Images/Game_Start.png'

let btPlay = new Image ()
btPlay.src = './Images/play_bt.png'

let horray = new Image ()
horray.src =`./Images/hooraymurray!!!.png`

let almost = new Image ()
almost.src =`./Images/almostthere.png`

let sun = new Image ()
sun.src =`./Images/sun.png`

//--------------/Score Sound/---------------//


let scoreSound = new Audio("./Images/bark.mp3");

function winSound(sound, level){
    sound.volume = level;
    sound.play();
}

// --------- Elements & Characters---------

let billX = 100;
let billY = 290;

let housesMove =[
    {x:0, y: 160}
]

let treesMove =[
    {x:0, y: 260}
]

let cloudsMove =[
    {x:0, y: 40}
]

let sunMove =[
    {x:0, y: 0}
]

let villianImages = [corgi, shark, groundhog, ghost]
let lanes = [350, 430]
let villians = [
    {
        img: villianImages[Math.floor(Math.random() * villianImages.length)],
        x: canvas.width,
        y: lanes[Math.floor(Math.random() * lanes.length-10)]
    }
]




// --------- Event Listeners--------->Character control
let yofBill = 0
document.addEventListener('keydown', e => {
    switch (e.keyCode) {
        case 40: 
        if (billY < canvas.height){
            billY=billY+30;
              };
             break;
        case 38:
        if (billY>290){
            billY=billY-30;
             };
             break;
        case 32: {
                if (billY > 200) {
                    billY=billY-100
                }
            
              }
            break;
        }
     
})


document.addEventListener(`keyup`, e =>{
    if (e.keyCode == `32`){
        billY= billY+100

    }
})

// document.addEventListener(`keyup`, e =>{
//     if (e.keyCode == `32`){
//         billY= yofBill
//     }else {
//     billY =billY
// }
// })




// --------- Game & Animation---------

function startGame(){
    ctx.drawImage(bg, 0, 0 )      
    // ctx.drawImage(horray,500,50) 


     ///random 
         for(let i=0; i< sunMove.length; i++){
            ctx.drawImage(sun, sunMove[i].x, sunMove[i].y)
            sunMove[i].x -= 1
            
                    if (sunMove[i].x == -5000) {
                        sunMove.push({
                            x: canvas.width-1,
                            y: 60
                        })
                    } 
                }



    /// clouds
        for(let i=0; i< cloudsMove.length; i++){
            ctx.drawImage(clouds, cloudsMove[i].x, cloudsMove[i].y)
            cloudsMove[i].x -= 0.2 
        
                if (cloudsMove[i].x == -1) {
                    cloudsMove.push({
                        x: canvas.width-1,
                        y: -20
                    })
                }   
            }


        ///houses
        for(let i=0; i< housesMove.length; i++){
        ctx.drawImage(houses, housesMove[i].x, housesMove[i].y)
        housesMove[i].x -= 0.5
    
            if (housesMove[i].x == -1) {
                housesMove.push({ 
                    x: canvas.width-1,
                    y: 160
                })
            }   
        }
        ///floor
        ctx.drawImage(floor, 0, 385 )

        ///trees
        for(let i=0; i< treesMove.length; i++){
            ctx.drawImage(trees, treesMove[i].x, treesMove[i].y)
            treesMove[i].x -= 1
        
                if (treesMove[i].x == -1) {
                    treesMove.push({
                        x: canvas.width-1,
                        y: 260
                    })
                }   
            }

    


        // --------- Character -------- 
        ctx.drawImage(bill, billX, billY)


        // --------- Score -------- 
        let speed = 1

        if (score >= 1){
            speed = speed++;
            function billSwap(){
            bill.src = './Images/bill_hooverboard.png'
            bill.onload = draw();
            };
        }
         
        // --------- Villains -------- 
        for(let i=0; i< villians.length; i++){
        ctx.drawImage(villians[i].img, villians[i].x, villians[i].y)
        villians[i].x -= speed

            if (villians[i].x == 1100) {
                villians.push({
                    img: villianImages[Math.floor(Math.random() * villianImages.length)],
                    x: canvas.width,
                    y:lanes[Math.floor(Math.random() * lanes.length)]
                })

        
            }

        // --------- Collision--------- 
            console.log()
            if (
                billX < villians[i].x + villians[i].img.width &&
                billX + bill.width > villians[i].x &&
                    billY < villians[i].y + villians[i].img.height &&
                    billY + bill.height > villians[i].y
            ) {
                if (villians[i].img.src.includes(`corgi`) && !corgiIndexes.includes(i)){
                    corgiIndexes.push(i)
                    winSound(scoreSound, 0.2, true)
                    score++;
                }
                else if (!villians[i].img.src.includes(`corgi`) ) { 
                    clearInterval(intervalId)
                    window.location.href = './gameover.html';
                    // alert('Game Over')
                }

                else if (villians[i].img.src.includes(`corgi`)){
                    villians.splice(i, 1)
                }
                
            }
           if (score === 10){
                window.location.href = './gamewon.html';
            }


        }


    //    --------- Score---------   
    ctx.font = "bold 16px verdana, sans-serif, white";
    ctx.fillStyle = "#14818e"
    ctx.fillText(`Score: ${score}`, 30, 30 )  
    if (score === 2){
        ctx.drawImage(horray,500,50);
    } else if (score === 7){
        ctx.drawImage(almost,500,50);
    } 
    

}





intervalId = setInterval(() => {
    requestAnimationFrame(startGame)
}, 1)




//    --------- Sound---------  

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

