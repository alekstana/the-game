# Project's name
Bill Murray tries to crash your party

## Description
Help Bill Murray to crash your party in this simple entertaining 8bit game. Bill Murray, the protagonist of the game, continously moves horizontally and tries to jump over "bad" obstacles that include: sticky ghosts, nasty sharks and angry groundhogs. Once Bill Murray avoided the obtacle his score goes up by 1. Bill Murray will be able to triple the score by collecting "good" obstacles, which include: puppies, whisky bottles and red hats.
The game will be over when: Bill Murray didn't manage to avoid a "bad" obstacle.
LEVEL UP (implemented if time allows)
The game will be won if Bill Murray will reach your house after reaching a score of 2020 Units. Winning bonus - a selfie with Bill. :)


## MVP (DOM - CANVAS)
 - Bill Murray, the character, moving horizontally (LEVEL UP (implemented if time allows): animated legs)
 - Bill Murray jumping up to avoid collision with bad obstacles
 - "Bad" and "good" obstacles appearing in random order from the right side of the frame in the continious loop
 - GAME OVER if Bill Murray collides with "bad" obstacle
 - Score +1 if  Bill Murray collides with "good" obstacle
 - LEVEL UP (implemented if time allows) GAME WON if the score reaches 2020 Units


## Backlog
- add Character animation (moving legs, two images in a loop)
- add GameWon screen
- add soundtrack and sounds

## Data structure
main.js
 - buildStartGame() {}
 - buildGamePlay() {}
 - buildGameOver() {}
 - buildGameWon() {} (Backlog)


game.js
- drawCanvas(){}
- Game(){} // <- here goes all game function
- checkGoodCollisions(){}
- checkBadCollisions(){}
- clearCanvas(){}
- GameOver(){}

bill.js
- bill () { this.x; this.y; this.direction; this.size }
- draw(){}
- jump(){}


obstacles.js
- drawBadObstacle(){}
- drawGoodObstacle(){}
- loopAllObstacles(){}

## States y States Transitions
Definition of the different states and their transition (transition functions)

- startScreen
- gameScreen
- gameoverScreen
- winScreen


## Task
- main - buildDom;
- main - buildStartScreen
- main - addEventListener
- main - buildGameOverScreen
- main - buildGameWonScreen (backlog)

- game - buildGameScreen
- game - buildCanvas
- game - drawCanvas
- game - startLoop

- bill - draw
- bill - move - >jump
- bill - animate (backlog)

- obstacles - draw
- obstacles - move/loop

- game - checkCollision
- game - addEventListener
- game - GameOver
- game - GameWon (backlog)



## Links


### Trello
https://trello.com/b/wG4MLreJ/the-game


### Git
https://github.com/alekstana/the-game

### Slides
in the progress