var numSquares = 6;
var colors;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#newColors");
var modeBtns = document.querySelectorAll(".mode");


init();

function init() {
  setupModeBtns();
  setupSquares();
  reset();
}

function setupModeBtns() {
  //mode buttons event listeners
  for (let i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function(){
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    //add event handler to squares
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        colorChange(pickedColor);
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play Again?";
      }
      else {
        messageDisplay.textContent = "Try Again!";
        this.style.backgroundColor = "#232323";
      }
    });
  }
}

function reset() {
  //generate new colors
  colors = generateRandomColors(numSquares);
  //pick random color from array
  pickedColor = chooseColor();
  //display picked color RGB code
  colorDisplay.textContent = pickedColor;
  //reset message display
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  //change color of squares
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});



function colorChange(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function chooseColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(n) {
  var colors = [];
  for (let i = 0; i < n; i++) {
    colors.push(randomColor());
  }
  return colors;
}

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}