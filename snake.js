import { getInputDirection } from "./input.js"

export const snake_speed =5  // snake moved per sec is the value
const snakeBody =[{x:11,y:11}] // create snake in x and y axis
let newSegment =0


export function update() {
    addSegment();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

 export function draw(gameBoard){
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart=segment.y
        snakeElement.style.gridColumnStart=segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
 }

 export function expandSnake(amount){
    newSegment += amount
 }

 export function onSnake(position, {igonreHead = false } ={}){  // if any part snakeBody is equal to position onSnake is true
    return snakeBody.some((segment,Index) => {
        if (igonreHead && Index === 0) return false
        return equalPosition(segment,position) // it return true when equal position is true
    });
 }

export function getSnakeHead(){
    return snakeBody[0]
}

export function snakeIntersection()
{
    return onSnake(snakeBody[0],{igonreHead :true})
}

 function equalPosition(pos1,pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;
 }

 function addSegment(){ // making a snake longer by adding new segment to body 
    for(let i =0; i <newSegment; i++){  // if newsegment is 3 it runs the loop 3 time
       snakeBody .push({...snakeBody[snakeBody.length -1]}) //Inside the loop, it takes the last segment of the snake's body (the one at the end) and makes a copy of it.
       //It then adds this copied segment to the end of the snake's body, making the snake longer.
    }
    newSegment = 0
 }