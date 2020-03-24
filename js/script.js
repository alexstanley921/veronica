var hamburger = document.querySelectorAll(".hamburger")[0];
var hamburgerTwo = document.querySelectorAll(".hamburger")[1];
var nav = document.getElementsByTagName("nav")[0];
var body = document.getElementsByTagName("body")[0];

function mobileMenu() {
  if (nav.style.display === "none") {
    nav.style.display = "flex"
    body.style.overflow = "hidden";
  } else {
    nav.style.display = "none";
    body.style.overflow = "initial";
  }
}

console.log(hamburger);
console.log(hamburgerTwo);

hamburger.addEventListener("click", mobileMenu);
hamburgerTwo.addEventListener("click", mobileMenu);
