/**
 * Created by neal on 8/24/16.
 */

/*
 Add event listeners to all the keys on the page and
 add the key value to the keypad-entry element as digits
 are entered by the user.
 */

function initializeKeypad() {

    // Append a single digit to the current contents of the
    // entry field.
    function appendDigit(digit) {
        var $entry = document.getElementById("keypad-entry");
        $entry.innerText += digit;
    }

    // Event callback function that will respond to a key
    // click by appending the digit within the key to the
    // entry field.
    function appendDigitFromKey(event) {
        appendDigit(event.target.innerText);
    }

    // Listen for click events on the keypad keys.
    var $keys = document.getElementsByClassName("keypad-key");
    for (var index = 0; index < $keys.length; ++index) {
        var $key = $keys[index];
        $key.addEventListener("click", appendDigitFromKey);
    }

    // Listen for a click event on the Clear button.
    var $clear = document.getElementById("clear");
    $clear.addEventListener("click", function () {
        var $entry = document.getElementById("keypad-entry");
        $entry.innerText = "";
    });
}

window.addEventListener("load", initializeKeypad);
