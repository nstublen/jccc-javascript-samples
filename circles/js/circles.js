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
        radius: undefined,
        area: undefined,
        circumference: undefined
    }

}

// Wait for the page to load, then call initializeCircleCalculations()
// to initialize the page and have the navigation buttons begin cycling
// through the snippets.
window.addEventListener("load", initializeCircleCalculations);
