const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
