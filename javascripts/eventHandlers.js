console.log("eventHandlers.js");

var carContainer = document.getElementsByClassName("col-md-3");
var userInput = document.getElementById("userInput");
var submitButton = document.getElementById("button");

// The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application. Name the function activateEvents.

var CarLot = (function(carlotFromBefore) {

    var text = "";
    carlotFromBefore.activateEvents = function(event) {
        console.log(event);
        for (var i = 0; i < carContainer.length; i++) {
            carContainer[i].addEventListener("click", function(event) {
            //when clicked, the cards are resest to white and then immediately the clicked card has the styling added
                CarLot.resetCards(event);
            // When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
                CarLot.changeStyle(event.currentTarget, "selected");
                // Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
                text = event.target.closest("div").querySelector(".card-description");
                userInput.value = "";
                userInput.focus();
                // When you start typing into the navbar's text input, the description, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.
                userInput.addEventListener("keyup", function(event) {
                    text.innerHTML = event.target.value;
                    if (event.keyCode === 13) {
                        text = userInput;
                        userInput.value = "";
                    }
                })
            })
        }
    }

    return carlotFromBefore;

}(CarLot || {}));
