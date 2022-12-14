const drinksDisplay = document.querySelector(".drinks");
let numDrinks = Number(window.localStorage.getItem("drinks-ls"));

function displayDrinks() {
  if (numDrinks !== 0) {
    drinksDisplay.textContent = numDrinks;
  } else {
    drinksDisplay.textContent = `0`;
  }

  numDrinks++;
  localStorage.setItem("drinks-ls", numDrinks);
}

displayDrinks();
