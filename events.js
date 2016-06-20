var CarLot = (function (events) {
  var targetDiv;
  var cards = document.getElementsByClassName("newDiv");
  var input = document.getElementById("inputBox");
    events.activateEvents = function() {
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
// on click, expand border size, change background color,
// clear the input element and focus on it


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

// When you start typing into the navbar's text input, 
// the description of the currently selected car should
// be bound to what you are typing in and match it exactly.
      input.addEventListener("keyup", function (keyupEvent){
        events.changeDescription(targetDiv, keyupEvent);
      });
    };
  return events;  
})(CarLot);