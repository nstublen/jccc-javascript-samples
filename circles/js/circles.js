/**
 * Created by neal on 8/24/16.
 */

/*
 When the user enters a number into the "radius" input field, read the
 value from the element and update the page with area and circumference
 calculations.

 Define a 'circle' object to store the radius and perform the calculations.
 */

function initializeCircleCalculations() {

    var circle = {
        radius: 0,

        area: function () {
            return Math.PI * this.radius * this.radius;
        },

        circumference: function () {
            return 2 * Math.PI * this.radius;
        }
    };

    var $radius = document.getElementById("radius");
    $radius.addEventListener("input", function () {
        circle.radius = parseInt($radius.value);

        var $area = document.getElementById("area");
        $area.innerText = circle.area().toFixed(1);

        var $circumference = document.getElementById("circumference");
        $circumference.innerText = circle.circumference().toFixed(2);
    });
}

// Wait for the page to load, then call initializeCircleCalculations()
// to initialize the page and have the navigation buttons begin cycling
// through the snippets.
window.addEventListener("load", initializeCircleCalculations);
