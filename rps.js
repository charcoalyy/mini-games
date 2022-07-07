// Landing screen
const allPlayCenters = document.querySelectorAll('.play-center')
const landingScreen = document.getElementById('landing-screen')

for (let i = 0; i < allPlayCenters.length; i++) {
    allPlayCenters[i].classList.remove('active')
}

landingScreen.classList.add('active')

const openingButtons = Array.prototype.slice.call(landingScreen.getElementsByTagName('button'))
openingButtons.forEach(button => button.addEventListener('click', () => {
    const desiredCenter = document.getElementById(`${button.id}-center`)
    desiredCenter.classList.add('active')
    if ((desiredCenter.id).includes('rps'))
    playRPSRound();

}))


// Rock paper scissors
let playRPSRound = () => {
    let playArray = ['rock', 'paper', 'scissors']
    let playedArray = []
    let user;

    const clickables = Array.prototype.slice.call(document.querySelectorAll('.clickable')) // create an array of the clickable icons

    clickables.forEach(clickable => clickable.addEventListener('click', () => { // when any of them are selected
        clickables.forEach(clickable => clickable.classList.remove('selected')) // unselect all icons

        let clickedPlay = ['rock', 'paper', 'scissors']
        for (let i = 0; i < clickedPlay.length; i++) {
            if ((clickable.id).includes(clickedPlay[i])) { // loop through array of plays and check for play
                let relevantClickable = document.getElementById(`${clickedPlay[i]}-clickable`) // determine the ID of the clicked icon
                    relevantClickable.classList.add('selected') // otherwise, add selection
                    user = clickedPlay[i]
            }
        }
    }))

    let submitRPSRound = () => {
        playedArray = []
        let comp = playArray[Math.floor(Math.random() * 3)] // randomly assign computer one of three choices in play array

        let assignComp = play => { // add numerized version of computer play to played array
            if (play === 'scissors') {
                play = 2;
            } else if (play === 'rock') {
                play = 3;
            } else if (play === 'paper' && user === 'scissors' || play === 'paper' && user === 'paper') {
                play = 1;
            } else if (play === 'paper' && user === 'rock') {
                play = 4;
            }
            playedArray.push(play);
        }

        let assignUser = play => { // add numerized version of user play to playedArray
            if (play === 'scissors') {
                play = 2;
            } else if (play === 'rock') {
                play = 3;
            } else if (play === 'paper' && comp === 'scissors' || play === 'paper' && comp === 'paper') {
                play = 1;
            } else if (play === 'paper' && comp === 'rock') {
                play = 4;
            }
            playedArray.push(play);
        }
    
        assignComp(comp);
        assignUser(user);
        console.log(playedArray)

        document.querySelector('#computer-play').innerText = `The computer played ${comp}`;
        document.querySelector('#user-play').innerText = `You played ${user}`
        if (playedArray[1] > playedArray[0]) { // compare numerized versions of plays to determine who wins
            document.querySelector('#final-result').innerText = "You win!"
        } else if (playedArray[1] < playedArray[0]) {
            document.querySelector('#final-result').innerText = "You lose!"
        } else if (playedArray[1] === playedArray[0]) {
            document.querySelector('#final-result').innerText = "Tie!"
        }  

        clickables.forEach(clickable => clickable.classList.remove('selected')) // unselect all icons
    } 

    document.getElementById('rps-play-button').addEventListener('click', () => {submitRPSRound()})
}


// const playButtons = Array.prototype.slice.call(document.getElementsByClassName('play-button'))
// playButtons.forEach(button => button.addEventListener('click', () => {
//     if ((button.id).includes('rps')) {
//         submitRPSRound(); // if in-center button is clicked, 'shoot' the answer
//     } else if ((button.id).includes('hangman')) {
//         playHangmanRound();
//     }
// }))

    

    
    
    


// Hangman
let playHangmanRound = () => {
    console.log('not available')
}
















// Capitalize string
let capitalize = string => {
    string = string.toLowerCase();
    let stringArray = string.split('');
    stringArray[0] = stringArray[0].toUpperCase();
    console.log(stringArray.join(''));
}

// Last letter of string
let lastLetter = string => {
    let i = string.length - 1;
    console.log(string[i]);
}

// FizzBuzz
let FizzBuzz = () => {
    let num = window.prompt('Enter a number: ');

    for (var i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}