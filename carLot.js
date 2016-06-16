var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {

    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send()
      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(event.target.responseText).inventory;
        callback(inventory);
      });
    }
  };
})();



// The first IIFE should add a public function
// (e.g. loadInventory) that loads the inventory.json
// file and stores the inventory in a private variable.
// It should also expose a public getter to read the
// array of cars (e.g. getInventory).

    //     // Invoke the callback function so that the caller knows
    //     // that the process is complete. Make sure to pass the 
    //     // carnivore array as an argument.
    //     callbackToInvoke(carnivores);
    //   });
    // },
