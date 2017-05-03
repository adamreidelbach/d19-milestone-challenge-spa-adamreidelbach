console.log("CarLot.js");

var CarLot = (function () {
  var inventory = [];

  // The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable.

  return {
    loadInventory: function (inventoryFunction) {
        var inventoryLoader = new XMLHttpRequest();

        inventoryLoader.addEventListener("load", function () {
            inventory = JSON.parse(event.target.responseText);
            console.log("Car data is", inventory);
            inventoryFunction(inventory);
        });


        inventoryLoader.addEventListener("error", function() {
            console.log("Oops, an error occured while getting the data")
        });

        inventoryLoader.open("GET", "inventory.json");
        inventoryLoader.send();
    },

      // It should also expose a public getter to read the array of cars (e.g. getInventory).
    getInventory: function () {
            console.log(inventory);
            return inventory;
        }
    }

})();
