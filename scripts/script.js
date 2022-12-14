menuBtn = document.querySelector(".hamburger-btn");
menuBtn.addEventListener("click", displayNavLinks);

function displayNavLinks() {
  const links = document.querySelector(".navLinks");

  links.classList.toggle("showHide");
}

const now = new Date();
const yearHolder = document.querySelector(".date-modified");
const currentYear = now.getFullYear();
const time1 = document.createElement("time");

function displayYear() {
  time1.dateTime = now;
  time1.innerHTML = `&copy; ${currentYear} |`;
  yearHolder.insertAdjacentElement("afterbegin", time1);
}

const time2 = document.createElement("time");

function displayDateModified() {
  time2.dateTime = now;
  time2.innerHTML = `Last&nbsp;Modified:&nbsp;${document.lastModified}`;
  yearHolder.insertAdjacentElement("beforeend", time2);
}

displayYear();
displayDateModified();
