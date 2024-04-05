let inputDirection ={x: 0 ,y:0}  // snake postion has been fixed here that snake not move any more

let lastInputDirection ={x:0,y:0} // it stop the arrown when it moveward direction is opposite

window.addEventListener('keydown',e =>{
    switch(e.key){
        case 'ArrowUp':
            if(lastInputDirection.y !==0)break
            inputDirection={x:0,y:-1}
            break
        case 'ArrowDown':
            if(lastInputDirection.y !==0)break
            inputDirection={x:0,y:1}
            break
        case 'ArrowLeft':
            if(lastInputDirection.x !==0)break
            inputDirection={x:-1,y:0}
            break
        case 'ArrowRight':
            if(lastInputDirection.x !==0)break
            inputDirection={x:1,y:0}
            break
    }
})
export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}