/**
 * Created by neal on 8/24/16.
 */

/*
 When the user selects the number of dice to roll and submits the
 form, randomly select which dice to show and display one of the
 dice images on the page for each random die.

 If the animation option is selected, use a timer to flash random
 dice selections before displaying the final images.
 */

function initializeDiceRoller() {
    function clearDiceImageElements() {
        var $rolledDice = document.getElementsByClassName("dice");
        while ($rolledDice.length > 0) {
            $rolledDice[0].remove();
        }
    }

    function createDiceImageElement(number) {
        var $img = document.createElement("img");
        $img.className = "dice";
        $img.src = "./images/dice-" + number + ".svg";
        return $img;
    }

    function createRandomDiceImageElement() {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        return createDiceImageElement(randomNumber);
    }

    function rollDice() {
        var $diceCount = document.getElementById("dice-count");
        console.log("Roll " + $diceCount.value + " dice");
        rollDiceCount($diceCount.value);
    }

    function rollDiceCount(count) {
        clearDiceImageElements();

        var $rolledDice = document.getElementById("rolled-dice");

        for (var index = 0; index < count; ++index) {
            var $die = createRandomDiceImageElement();
            $rolledDice.appendChild($die);
        }
    }

    function rollDiceWithAnimation() {
        rollDice();

        var $diceAnimation = document.getElementById("dice-animation");
        if ($diceAnimation.checked) {
            var spin = 10;
            var timerId = setInterval(function () {
                rollDice();
                spin--;
                if (spin <= 0) {
                    clearInterval(timerId);
                }
            }, 100)
        }
    }

    var $form = document.getElementsByTagName("form")[0];
    $form.addEventListener("submit", function (e) {
        e.preventDefault();
        rollDiceWithAnimation();
    });
}

window.addEventListener("load", function () {
    initializeDiceRoller();
});
