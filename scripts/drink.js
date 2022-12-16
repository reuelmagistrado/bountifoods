// three (3) select inputs that are populated with the available fruit to put into a drink. Available fruit options must only come from this JSON data source: FRUIT Links to an external site. for full credit consideration.
import { drinksCounter } from "./localStorage.js";

const queryUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function apiFetchFruits() {
  try {
    const response = await fetch(queryUrl);

    if (response.ok) {
      const fruitsData = await response.json();
      setIngredients(fruitsData);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function setIngredients(fruitsData) {
  fruitsData.forEach((fruit) => {
    const fruit1 = document.querySelector("[name='fruit1']");
    const option = document.createElement("option");
    option.setAttribute("value", fruit.name);
    option.textContent = fruit.name;
    fruit1.append(option);
  });

  fruitsData.forEach((fruit) => {
    const fruit2 = document.querySelector("[name='fruit2']");
    const option = document.createElement("option");
    option.setAttribute("value", fruit.name);
    option.textContent = fruit.name;
    fruit2.append(option);
  });

  fruitsData.forEach((fruit) => {
    const fruit3 = document.querySelector("[name='fruit3']");
    const option = document.createElement("option");
    option.setAttribute("value", fruit.name);
    option.textContent = fruit.name;
    fruit3.append(option);
  });
}

apiFetchFruits();

// Display Modal

const modal = document.querySelector("#myModal");

// Get the button that opens the modal
const btn = document.querySelector(".form__btn");

// Get the <span> element that closes the modal
const span = document.querySelector(".close");

// When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

const openModal = () => {
  modal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  drinksCounter();
  openModal();
});
