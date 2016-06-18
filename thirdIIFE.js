console.log("thirdIIFE.js loaded");

// function to increase border and change bg color executed on click

var CarLot = (function (events) {
  events.increaseBorder = function (domElClickedOn, colorName){
    var color = event.currentTarget.style.borderColor;
    domElClickedOn.style.border = `15px solid ${color}`;
    domElClickedOn.style.backgroundColor = colorName;
  };

// function resets the border thickness and background color 
// for each car element back to the original values. 

  events.resetValues = function() {
    var divs = document.getElementsByClassName("newDiv");
    for (var k=0; k<divs.length; k++) {
      item=divs[k]
      item.style.backgroundColor = "white";
      item.style.borderWidth = "5px";
    };
  };

  return events;
})(CarLot);