console.log("events.js loaded");

var CarLot = (function (events) {
  var cards = document.getElementsByClassName("newDiv");
  var input = document.getElementById("input");
    events.activateEvents = function() {
      // console.log(cards);
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        // console.log(card);
        card.addEventListener('click', function (clickEvent) {
          var targetDiv = clickEvent.currentTarget;
          var color = event.currentTarget.style.borderColor;
          targetDiv.style.border = `10px solid ${color}`;
        });
      }    
    }
  return events;
})(CarLot);




  // newDiv.addEventListener("click", function (clickEvent) {
  //   targetDiv = clickEvent.currentTarget;
  //   targetDiv.classList.toggle("addBorder");
  //   // if i wanted to keep this class, add instead of toggle
  //   // When you click on one of the person elements, the text 
  //   // input should immediately gain focus so that you can start typing.
  //   textInput.focus();
  //   // event is event.target.id, event.target.value;
  //   // currentTarget is the element that the event listener was placed on
  //   // it bubbles up from whatever element was clicked on to the div that 
  //   // eventlistener was placed
  //   console.log("click", event.currentTarget.id);
  //   test = event.currentTarget.id;
  //   targetNumberID = test.split("--")[1]
  // });




// // This SandwichMaker IIFE augments the original one
// var SandwichMaker = (function(maker) {

//   // Private variable to store the different meat prices
//   var cheesePrices = {
//     "swiss": 0.60,
//     "cheddar":0.60,
//     "mozz": 0.70,
//     "none": 0
//   };

//   // Augment the original object with another method
//   maker.addCheese = function(cheese) {
//     return cheesePrices[cheese];
//   };

//   // Return the new, augmented object with the new method on it
//   return maker;
// })(SandwichMaker || {});