import { getRandomInt } from "./numbers";

let squares: NodeList;
let guess = 3;


export function runApp() {
    console.log('The app is running');

    //Select a square as the secret square
    //pick a random number from 1-6 inclusive
    const secretNumber = getRandomInt(1, 6);
    console.log(`The number is: ${secretNumber}`);
    //find the correlated square and "bless" it as Azor Ahai
    squares = document.querySelectorAll('.square');
    let currentSquare = 1;
    squares.forEach((sq: HTMLDivElement) => {
        if (currentSquare === secretNumber) {
            //mark it
            sq.dataset.secret = "true";
        }
        sq.addEventListener('click', handleClick);
        currentSquare++;
    });
}

function handleClick() {
    //did they win?
    const isWinner = this.dataset.secret === "true";
    const clickedSquare = this;
    const message = document.getElementById('message') as HTMLElement;

    if (isWinner) {
        //make it pretty
        clickedSquare.classList.add('winner');
        message.innerText = "You are Azor Ahai!";
        squares.forEach((sq: HTMLDivElement) => {
            if (sq !== clickedSquare) {
                sq.classList.add('loser');
                sq.removeEventListener('click', handleClick);
            }
        })

    } else {
        guess--;
        console.log(guess);
        clickedSquare.classList.add('loser');
        clickedSquare.removeEventListener('click', handleClick)
    }
    if (guess == 0) {
        clickedSquare.classList.add('loser');
        clickedSquare.removeEventListener('click', handleClick);
        console.log('loser >.<');
    }
}
