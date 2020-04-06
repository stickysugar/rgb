var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
    colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#messageDisplay");

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");

var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easybutton");
var hardButton = document.getElementById("hardbutton");


easyButton.addEventListener("click", function() {
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    easyButton.classList.add("select");
    hardButton.classList.remove("select");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function() {
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    hardButton.classList.add("select");
    easyButton.classList.remove("select");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";      
    }
});

resetButton.addEventListener("click", function(){
    messageDisplay.textContent = "";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "new color";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});


for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "CORRECTO";
            changeColor(clickedColor);
            h1.style.backgroundColor= clickedColor;
            resetButton.textContent = "play again?";
        }
    
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "TRY AGAIN"
        }; 
    });
}


function changeColor(color) {
    for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
    }
};

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
};