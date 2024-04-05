import { update as update_snake, draw as draw_snake , snake_speed
, getSnakeHead,snakeIntersection} from './snake.js'

import { update as updateFood, draw as drawFood } from './food.js';

import { outsideGrid } from './grid.js';



let lastRederTime =0
let gaveOver =false
const gameBoard =document.getElementById('game_board')


function main(currentTime) {

    if(gaveOver){
      if (confirm ('you lost, press ok to restart')){
        window.location='/'
      }
      return
    }



    window.requestAnimationFrame(main);
    const secondsSinceLastRender =(currentTime-lastRederTime)/1000   // covert milli seconds into seconds
    if (secondsSinceLastRender < 1 / snake_speed) return

    lastRederTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    update_snake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML='' //remove the previouse piece of the snake on view when moving
    draw_snake(gameBoard)
    drawFood(gameBoard)
}
function checkDeath(){
    gaveOver =outsideGrid(getSnakeHead()) || snakeIntersection()
}