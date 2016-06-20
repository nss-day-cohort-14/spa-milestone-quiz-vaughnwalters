console.log("events.js loaded");

var targetDiv;

var CarLot = (function (events) {
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
          // events.changeDescription(targetDiv);
          // add event listener within an event listener adding function?
          // so, after click, add event listener to input box?
          })

        // input.addEventListener("keyup", function(keyupEvent) {
        //   var targetDiv = keyup.currentTarget;
        //   console.log(targetDiv);
        // });
// add event listener to input field 
        // When you start typing into the navbar's text input, 
        // the description of the currently selected car should
        //  be bound to what you are typing in and match it exactly.
    //     input.addEventListener("keyup", function(keyupEvent) {
    //           console.log("click", event.currentTarget.id);
    // test = event.currentTarget.id;
    // targetNumberID = test.split("--")[1]
        //   var  = document.getElementById(`bio--${targetNumberID}`);
        //   bio.innerHTML = keyupEvent.target.value;
        // });
      }    
          input.addEventListener("keyup", function (keyupEvent){
            console.log(">>>>",keyupEvent.target.value);

            events.changeDescription(targetDiv, keyupEvent);
            console.log(targetDiv, keyupEvent);
        });
    }
  return events;  
})(CarLot);



// this works:
// card.addEventListener('click', function (clickEvent) {
//           console.log(clickEvent);
//           var targetDiv = clickEvent.currentTarget;
//           console.log("targetDiv", targetDiv)
//           var color = event.currentTarget.style.borderColor;
//           targetDiv.style.border = `15px solid ${color}`;
//           targetDiv.style.backgroundColor = "gray";
//         });


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