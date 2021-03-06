var CarLot = (function (events) {

// on click, expand border size, change background color,
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
      item=divs[k];
      item.style.backgroundColor = "white";
      item.style.borderWidth = "5px";
    };
  };

// On click of the car element, clear the value of the
// text input in the navbar, and put the cursor in the text input.
  events.clearInput = function() {
    var inputDiv = document.getElementById("inputBox");
    inputDiv.value = "";
    inputDiv.focus();
  };

// When you start typing into the navbar's text input, the 
// description of the currently selected car should be bound
//  to what you are typing in and match it exactly.
  events.changeDescription = function(domElClickedOn, keyUpEvent) {
    var domElNum = domElClickedOn.id.split("--")[1];
    var description = document.getElementById(`description--${domElNum}`);
    description.innerHTML = keyUpEvent.target.value;
  };
  
  return events;
})(CarLot);