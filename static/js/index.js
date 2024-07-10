document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav ul');
  
    burgerMenu.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  });
  