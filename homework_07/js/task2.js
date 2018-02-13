var startGame = confirm("Do you want to play a game?");
var max = 5;
var userPrize = 0;
var maxPrize = 10;
if (startGame) {
    do {
        var possiblePrize = maxPrize;
        var guessed = false;
        for (var i = 3; i > 0; i--) {
            var rnd = Math.floor(Math.random() * (max + 1));
            var number = Number(
                prompt(
                    "Enter a number from 0 to " +
                        max +
                        "\nAttempts: " +
                        i +
                        "\nTotal prize: " +
                        userPrize +
                        "$" +
                        "\nPossible prize on current attempts: " +
                        possiblePrize +
                        "$"
                )
            );
            if (number == rnd) {
                guessed = true;
                userPrize = userPrize + possiblePrize;
                break;
            } else {
                possiblePrize = Math.floor(possiblePrize / 2);
            }
        }
        var continueGame;
        if (guessed) {
            continueGame = confirm("Do you want to continue a game?");
            if (continueGame) {
                max = max * 2;
                maxPrize = maxPrize * 3;
            }
        }
        if (!guessed || (guessed && !continueGame)) {
            console.log(
                "Thank you for a game. Your prize is: " + userPrize + "$"
            );
            var playAgain = confirm("Do you want to play again?");
            if (playAgain) {
                userPrize = 0;
                max = 5;
                maxPrize = 10;
            } else {
                break;
            }
        }
    } while (true);
} else {
    console.log("You did not become a millionaire");
}
