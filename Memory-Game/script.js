const gameContainer = document.getElementById("game");
let pausedClicking = false;
let cardOne = null;
let cardTwo = null;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  //need to pause here if two cards are currently flipped
  if (pausedClicking) return;
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  //set the background color to the corresponding class. need to do this for 2 cards
  if (cardOne === null) {
    cardOne = event.target;
    cardOne.style.backgroundColor = cardOne.classList[0];
    cardOne.classList.add("flipped");
  } else if (cardOne !== null) {
    cardTwo = event.target;
    cardTwo.style.backgroundColor = cardTwo.classList[0];
    cardTwo.classList.add("flipped");
  }
  //set up logic to determine if there are two cards currently flipped and if so turn off clicks until the cards are unflipped.
  if (cardTwo !== null) {
    pausedClicking = true;
  }
  //logic to check if cards are a match, if not set a delay for one second and flip the cards back over.
  if (cardOne.style.backgroundColor !== cardTwo.style.backgroundColor) {
    setTimeout(function () {
      cardOne.style.backgroundColor = "white";
      cardTwo.style.backgroundColor = "white";
      cardOne = null;
      cardTwo = null;
      pausedClicking = false;
    }, 1000);
  } else {
    cardOne = null;
    cardTwo = null;
    pausedClicking = false;
  }
}
// when the DOM loads
createDivsForColors(shuffledColors);
