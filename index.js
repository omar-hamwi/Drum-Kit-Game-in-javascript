// The Document method querySelector() returns the first Element within the
// document that matches the specified selector,
// or group of selectors. If no matches are found, null is returned.

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("you have clicked on the button ");
// }

// first way
// document.querySelectorAll(".drum").forEach((item) => {
//   item.addEventListener("click", (event) => {

//
//   });
// });

// detecting button press by mouse click

var numberOfDrumbButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumbButtons; i++) {
  // we add querySelectorAll to document to specific element
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// detectting keyboard press
// document that mean we add the addEventListener to entaire webpage not to specsific things
document.addEventListener("keypress", function (event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      console.log(key);
  }
}

// The Element.classList is a read-only property that returns
// a live DOMTokenList collection of the class attributes of the element.
// This can then be used to manipulate the class list.

function buttonAnimation(currentkey) {
  var activebutton = document.querySelector("." + currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function () {
    activebutton.classList.remove("pressed");
  }, 100);
}
