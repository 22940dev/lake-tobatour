"use strict";

//Set default state for navigation toggle
function uncheckNav() {
  document.getElementById("nav-toggle").checked = false;
}

// set navigation state once clicked
function setNavOnclick() {
  Array.from(document.getElementsByClassName("navigation__link")).map(
    (navLink) => navLink.addEventListener("click", uncheckNav)
  );
}

// invoke function
function main() {
  setNavOnclick();
}

main();
