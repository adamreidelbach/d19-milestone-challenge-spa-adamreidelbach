console.log("lastiife.js");

var CarLot = (function(carlotFromBefore) {

    // The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values

    // var carContainer = document.getElementsByClassName("col-md-3");
    // console.log("carContainer", carContainer);

    carlotFromBefore.resetCards = function() {
        var carContainer = document.getElementsByClassName("col-md-3");
        // console.log("carContainer", carContainer);
        for (var i = 0; i < carContainer.length; i++) {
            console.log("carContainer", carContainer[i]);
                carContainer[i].classList.remove("bordered");
                carContainer[i].classList.remove("background");
            }
        }

// The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
// A car DOM element that was clicked on.
// A color name of your choice (see behavior requirement 5 above).

    carlotFromBefore.changeStyle = function(element, color) {
            var userInput = document.getElementById("userInput");
            // INCOMPLETE take this user input and make that string change the color of the background
        }


    return carlotFromBefore;

}(CarLot || {}));
