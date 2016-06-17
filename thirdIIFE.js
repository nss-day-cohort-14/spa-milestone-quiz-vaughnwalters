console.log("thirdIIFE.js loaded");

// function to increase border and change bg color executed on click
var CarLot = (function (events) {
  events.increaseBorder = function (domElClickedOn, colorName){
    console.log(domElClickedOn, colorName);
    var color = event.currentTarget.style.borderColor;
    domElClickedOn.style.border = `15px solid ${color}`;
    domElClickedOn.style.backgroundColor = colorName;
  };

// function to reset the border and bg color to orig value
  events.resetValues = function() {
    console.log
  }

  return events;
})(CarLot);



// this worked in events.js

//         card.addEventListener('click', function (clickEvent) {
//           console.log(clickEvent);
//           var targetDiv = clickEvent.currentTarget;
//           console.log("targetDiv", targetDiv)
//           var color = event.currentTarget.style.borderColor;
//           targetDiv.style.border = `15px solid ${color}`;
//           targetDiv.style.backgroundColor = "gray";
//         });
//       }    