//logic first
//html and css second
//attempt to create a random number variable between 1 and 6

// let randonHigh = Math.ceil(Math.random()* 6)
// let randonLow = Math.floor(Math.random()* 6)
const button = document.getElementById('myBtn');
const message = document.getElementById('paragraph');
const message2 = document.getElementById('divparagraph')
const message3 = document.getElementById('paradiv');
const img = document.getElementById('dice1')


let randomHigh;
let pointScored = 0;

button.addEventListener('click', ()=>{
    randomHigh = Math.ceil(Math.random()* 6);
    img.src = `img/dice${randomHigh}.png`

    

    message2.innerHTML = `<p>You rolled ${randomHigh}</p>`
    pointScored += randomHigh
    message3.innerHTML = `<p>The total score is ${pointScored}</p>`
    if(randomHigh == 1){
        message.innerHTML = `<p>Better luck next time</p>`
        pointScored = 0;
    }else if(pointScored >= 21){
        message.innerHTML = `<p>You win</p>`
        pointScored = 0;
    }else{
        message.innerHTML = `<p>Lucky</p>`
    }
    
});



// const diceRoll = () => {
//     randomHigh = Math.ceil(Math.random()* 6)
//     alert(`You rolled ${randomHigh}`)
// }

// const scoreAddition = ()=>{
    
//     pointScored += randomHigh
//     console.log(`The total score is ${pointScored}`)
// }

const winOrLose = ()=>{
    // randomHigh = 2
    // pointScored = 21
    // scoreAddition()
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


winOrLose()
winOrLose()
winOrLose()
winOrLose()
winOrLose()
winOrLose()
winOrLose()
