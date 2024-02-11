    game();
function game() {
    let num = Math.random() * 100 + 1;
    num = Number.parseInt(num);
    let score = 0;
    score = Number.parseInt(score);
    let guess;


    while (num != guess) {

        guess = prompt("guess the right number");
        guess = Number.parseInt(guess);
        if (num < guess) {
            console.log("your guess is higher");
            ++score;
            continue;

        }
        else if (num > guess) {
            console.log("your guess is smaller");
            ++score;
            continue;
        }
    }
    while (num == guess) {
        console.log("your guess is correct", guess, "is the right answer");
        console.log("the score of the user is", 100 - score);
        break;

    }
}