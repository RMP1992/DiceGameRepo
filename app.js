//logic first
//html and css second
//attempt to create a random number variable between 1 and 6

// let randonHigh = Math.ceil(Math.random()* 6)
// let randonLow = Math.floor(Math.random()* 6)
let randomHigh;
let pointScored = 0;

const diceRoll = () => {
    randomHigh = Math.ceil(Math.random()* 6)
    console.log(`You rolled ${randomHigh}`)
    
}

const winOrLose = ()=>{
    // randomHigh = 2
    // pointScored = 21
    scoreAddition()
    if(randomHigh == 1){
        console.log('RIP')
        pointScored = 0;
    }else if(pointScored >= 20){
        console.log('You win')
        pointScored = 0;
    }else{
        console.log('Lucky')
    }
}
const scoreAddition = ()=>{
    diceRoll()
    pointScored += randomHigh
    console.log(`The total score is ${pointScored}`)
}
winOrLose()
winOrLose()
winOrLose()
winOrLose()
winOrLose()
winOrLose()
//pointScored += randomHigh

// diceRoll();
// winOrLose();