console.log("main.js");

// Load the inventory and send a callback function to be
// invoked after the process is complete

function populatePage (inventory) {
  // Loop over the inventory and populate the page
        var text = "";
        // Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of container. Hint: You must build up the entire string of columns/rows before injecting into the DOM. Use a counter variable to know when to close a row after three columns.
        for (var i = 0; i < inventory.cars.length; i++) {
            for (var j = 0; j < inventory.cars[i].make[j].length; j++) {
                            text += `<div class="container">
                                            <div class="row">
                                                <div class="col-md-3">
                                                        <p class="card-make">${inventory.cars[i].make}</p>
                                                        <p class="card-model">${inventory.cars[i].model}</p>
                                                        <p class="card-year">${inventory.cars[i].year}</p>
                                                        <p class="card-price">${inventory.cars[i].price}</p>
                                                        <p class="card-description">${inventory.cars[i].description}</p>
                                    </div>`;
            }
        }
        outputArea.innerHTML = text;
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents(inventory);
}

CarLot.loadInventory(populatePage);
