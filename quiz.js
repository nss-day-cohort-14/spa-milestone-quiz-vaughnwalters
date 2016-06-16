console.log("quiz.js loaded");
var outputEl = document.getElementById("outputEl")
function populatePage (inventory) {
  // Loop over the inventory and populate the page
  // build up the string to output to DOM
  for (var i=0; i<inventory.length; i++) {
    var car = inventory[i];
    outputEl.innerHTML += `
      
    `
    console.log(car);
  }



  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);





