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
          events.resetValues(targetDiv);
          events.increaseBorder(targetDiv, "gray");
          events.clearInput();
        });
      };   

// add Event listener for keyup
      input.addEventListener("keyup", function (keyupEvent){
        events.changeDescription(targetDiv, keyupEvent);
      });
    };
  return events;  
})(CarLot);