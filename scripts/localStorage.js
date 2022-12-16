const drinksDisplay = document.querySelector(".drinks");
let numDrinks = Number(window.localStorage.getItem("drinks-ls"));

function displayDrinks() {
  if (drinksDisplay) {
    drinksDisplay.textContent = numDrinks;
  }
}

export function drinksCounter() {
  let numDrinks = Number(window.localStorage.getItem("drinks-ls"));

  numDrinks++;
  localStorage.setItem("drinks-ls", numDrinks);
}

displayDrinks();
