menuBtn = document.querySelector(".hamburger-btn");
menuBtn.addEventListener("click", displayNavLinks);

function displayNavLinks() {
  var links = document.querySelector("#navLinks");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}
