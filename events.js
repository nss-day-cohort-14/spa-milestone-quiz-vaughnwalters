var CarLot = (function (events) {
  var targetDiv;
  var cards = document.getElementsByClassName("newDiv");
  var input = document.getElementById("inputBox");
  events.activateEvents = function() {
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];

// created card click event. call function. pass element clicked on
// and a color. function will expand border size and change background color,
// on click of the car element, clear the value of the text 
// input in the navbar, and put the cursor in the text input.
      card.addEventListener("click", function (clickEvent) {
        targetDiv = clickEvent.currentTarget;
        // console.log("targetDiv", targetDiv);
        events.resetValues(targetDiv);
        events.increaseBorder(targetDiv, "gray");
        events.clearInput();
      });
    };   

// add Event listener for keyup
    input.addEventListener("keyup", function (keyupEvent){

// if no card has been selected when user types in input field, throw an alert, 
// else change the description to what is being typed.
      if (targetDiv === undefined) {
        alert ("Please select a card");
      } else {
        events.changeDescription(targetDiv, keyupEvent);
      };
    });
  };
  return events;  
})(CarLot);