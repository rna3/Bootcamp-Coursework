function guessingGame() {
    let answer = Math.floor((Math.random() * 100));
    let count = 0;
    let victory = false;
    //return a function 
    return function game(num){
        
        // check if num === answer
        if (victory === true){
            return "The game is over, you already won!"
        } else if (num === answer) {
            count ++;
            victory = true;
            return `You win! You found ${answer} in ${count} guesses.`
        } else if(num > answer) {
            count ++ ;
            return `${num} is too high!`
        } else if(num < answer) {
            count ++;
            return `${num} is too low!`
        }
    }

}

module.exports = { guessingGame };
