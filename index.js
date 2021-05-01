//We search for the button and we add an event listener to that button,
//so that it listens for clicks that happen on it.
var buttons = document.querySelectorAll(".drum");
var i = 0;
var tom1 = new Audio('sonidos/tom-1.mp3');
var tom2 = new Audio('sonidos/tom-2.mp3');
var tom3 = new Audio('sonidos/tom-3.mp3');
var tom4 = new Audio('sonidos/tom-4.mp3');
var crash = new Audio('sonidos/crash.mp3');
var kick = new Audio('sonidos/kick-bass.mp3');
var snare = new Audio('sonidos/snare.mp3');

// Button listener

for (i; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}
//We dont use parenthesis on the function declaration because if we do it,
//the function triggers as soon as the js file is loaded
function handleClick() {
  var pressedButton = this.innerHTML;
  buttonAnimation(pressedButton);
  switch (pressedButton) {
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      snare.play();
      break;
    case "k":
      crash.play();
      break;
    case "l":
      kick.play();
      break;
    default:
  }
}

// Key listener

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key){
  switch (key) {
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      snare.play();
      break;
    case "k":
      crash.play();
      break;
    case "l":
      kick.play();
      break;
    default:
  }
}

// Animation

function buttonAnimation(key){
  let activeButton = document.querySelector("."+key);

  activeButton.classList.toggle("pressed");

  setTimeout(function(){
    activeButton.classList.toggle("pressed");
  }, 100);
}
