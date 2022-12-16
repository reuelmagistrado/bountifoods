// three (3) select inputs that are populated with the available fruit to put into a drink. Available fruit options must only come from this JSON data source: FRUIT Links to an external site. for full credit consideration.
import { drinksCounter } from "./localStorage.js";

const queryUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function apiFetchFruits() {
  try {
    const response = await fetch(queryUrl);

    if (response.ok) {
      const fruitsData = await response.json();
      setIngredients(fruitsData);
      return fruitsData;
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
const date = new Date().toLocaleDateString();
const modalDate = document.querySelector(".date");
const modalName = document.querySelector(".name");
const modalEmail = document.querySelector(".email");

const fruitsList = await apiFetchFruits();

const modalFruit1 = document.querySelector(".fruit1");
const modalFruit2 = document.querySelector(".fruit2");
const modalFruit3 = document.querySelector(".fruit3");

const modalCarbs = document.querySelector(".carbs");
const modalProtein = document.querySelector(".protein");
const modalFat = document.querySelector(".fat");
const modalCalories = document.querySelector(".calories");
const modalSugar = document.querySelector(".sugar");

modalDate.append(date);

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  drinksCounter();
  const formName = document.querySelector("[name='fullname']").value;
  const formEmail = document.querySelector("[name='email']").value;

  const formFruit1 = document.querySelector("[name='fruit1']").value;
  const formFruit2 = document.querySelector("[name='fruit2']").value;
  const formFruit3 = document.querySelector("[name='fruit3']").value;
  const formInstructions = document.querySelector("[name='message']").value;

  const fruit1 = fruitsList.find(({ name }) => name === formFruit1);
  const fruit2 = fruitsList.find(({ name }) => name === formFruit2);
  const fruit3 = fruitsList.find(({ name }) => name === formFruit3);

  const totalCarbs =
    fruit1.nutritions.carbohydrates +
    fruit2.nutritions.carbohydrates +
    fruit3.nutritions.carbohydrates;

  const totalProtein =
    fruit1.nutritions.protein +
    fruit2.nutritions.protein +
    fruit3.nutritions.protein;

  const totalFat =
    fruit1.nutritions.fat + fruit2.nutritions.fat + fruit3.nutritions.fat;

  const totalCalories =
    fruit1.nutritions.calories +
    fruit2.nutritions.calories +
    fruit3.nutritions.calories;

  const totalSugar =
    fruit1.nutritions.sugar + fruit2.nutritions.sugar + fruit3.nutritions.sugar;

  modalName.append(formName);
  modalEmail.append(formEmail);

  const contactNum = document.querySelector("[name='contact']").value;
  if (contactNum) {
    const phone = `<p class="contact-number">Contact Number: ${contactNum}</p>`;
    modalEmail.insertAdjacentHTML("afterend", phone);
  }

  modalFruit1.append(formFruit1);
  modalFruit2.append(formFruit2);
  modalFruit3.append(formFruit3);

  modalCarbs.append(Math.round(totalCarbs));
  modalProtein.append(Math.round(totalProtein));
  modalFat.append(Math.round(totalFat));
  modalCalories.append(Math.round(totalCalories));
  modalSugar.append(Math.round(totalSugar));

  if (formInstructions) {
    const specialInstructions = `<p class="special-instructions">Special Instructions: ${formInstructions}</p>`;
    modalFruit3.insertAdjacentHTML("afterend", specialInstructions);
  }

  openModal();
});
