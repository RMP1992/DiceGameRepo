//logic first
//html and css second
//attempt to create a random number variable between 1 and 6

// let randonHigh = Math.ceil(Math.random()* 6)
// let randonLow = Math.floor(Math.random()* 6)
const button = document.getElementById('button');
// const submit = document.getElementById('button')
const player1Message = document.getElementById('paragraph');
const Player1Message2 = document.getElementById('divparagraph');
const player1Message3 = document.getElementById('paradiv');
const img1 = document.getElementById('dice1');
const img2 = document.getElementById('dice2');
const player2Message = document.getElementById('paragraph2');
const Player2Message2 = document.getElementById('divparagraph2');
const player2Message3 = document.getElementById('paradiv2');

let player;

// button.addEventListener('click', () =>{

//     const playerToggle = ()=>{
//         if (randomHigh == 1) {
//         player1 == false
//         button.textContent = 'Player 2'
        
//         console.log('this code is running')
//         }else {
//         player1 == true 
//         button.textContent = 'Player 1'
        
        
//         console.log('this code is also running')
//         }
//     }
// })


let randomHigh;
let pointScored = 0;
let player1 = 1

button.addEventListener('click', ()=>{
    randomHigh = Math.ceil(Math.random()* 6);
    
    Player1Message2.innerHTML = `<p>You rolled ${randomHigh}</p>`
    pointScored += randomHigh
    player1Message3.innerHTML = `<p>The total score is ${pointScored}</p>`
    if(randomHigh == 1){
        player1Message.innerHTML = `<p>Better luck next time</p>`
        pointScored = 0;
    }else if(pointScored >= 21){
        player1Message.innerHTML = `<p>You win</p>`
        pointScored = 0;
    }else{
        player1Message.innerHTML = `<p>Lucky</p>`
    }
    
    const playerToggle = ()=>{
        if (player1 == 1) {
            
            button.textContent = 'Player 2'
            img2.src = `img/dice${randomHigh}.png`
            player1 = 0
            console.log('this code is running')
        }else {
            button.textContent = 'Player 1'
            img1.src = `img/dice${randomHigh}.png`
            player1 = 1
        }
    }
    
    playerToggle()

    
    
    
});



// const diceRoll = () => {
//     randomHigh = Math.ceil(Math.random()* 6)
//     alert(`You rolled ${randomHigh}`)
// }

// const scoreAddition = ()=>{
    
//     pointScored += randomHigh
//     console.log(`The total score is ${pointScored}`)
// }

// const winOrLose = ()=>{
//     // randomHigh = 2
//     // pointScored = 21
//     // scoreAddition()
//     if(randomHigh == 1){
//         console.log('RIP')
//         pointScored = 0;
//     }else if(pointScored >= 20){
//         console.log('You win')
//         pointScored = 0;
//     }else{
//         console.log('Lucky')
//     }
// }


// winOrLose()
// winOrLose()
// winOrLose()
// winOrLose()
// winOrLose()
// winOrLose()
// winOrLose()
