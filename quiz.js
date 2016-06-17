console.log("quiz.js loaded");
var outputEl = document.getElementById("outputEl")
function populatePage (inventory) {
  var counter = null;
  // Loop over the inventory and populate the page
  // build up the string to output to DOM
  for (var i=0; i<inventory.length; i++) {
    counter++;
    var car = inventory[i];
    if (car.purchased === false) {
      car.purchased = "STILL AVAILABLE!";
    } else if (car.purchased === true) {
      car.purchased = "SOLD"
    };
    outputEl.innerHTML += `
      <div class="col-sm-4 newDiv" id="cardWrapper--${counter}">
        <div class="center">
          <div>${car.make}</div>
          <div>${car.model}</div>
          <div>${car.year}</div>
          <div>${car.price}</div>
          <div id="carColor--${counter}">${car.color}</div>
          <div>${car.purchased}</div>
          <div id="description--${counter}">${car.description}</div>
        </div>
      </div>
      `
  // get car color and apply to border color    
    var color = document.getElementById(`carColor--${counter}`).innerText;
    var addBorderColor = document.getElementById(`cardWrapper--${counter}`);
    addBorderColor.style.border = `5px solid ${color}`;
  }


  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);





