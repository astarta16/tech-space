const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function openModal() {
  document.getElementById("loginModal").style.display = "block";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector(".faq-icon");

      if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
      } else {
        answer.style.display = "block";
        icon.textContent = "-";
      }
    });
  });

  const form = document.querySelector(".register-form");

  form.addEventListener("submit", function (event) {
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach((message) => message.remove());

    let isValid = true;

    const name = document.getElementById("name");
    if (name.value.trim() === "") {
      showError(name, "Name is required");
      isValid = false;
    }

    const surname = document.getElementById("surname");
    if (surname.value.trim() === "") {
      showError(surname, "Surname is required");
      isValid = false;
    }

    const email = document.getElementById("email");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      showError(email, "Please enter a valid email address");
      isValid = false;
    }

    const age = document.getElementById("age");
    if (age.value <= 0 || age.value === "") {
      showError(age, "Please enter a valid age");
      isValid = false;
    }

    const birthday = document.getElementById("birthday");
    if (birthday.value === "") {
      showError(birthday, "Please enter your birthday");
      isValid = false;
    }

    const course = document.getElementById("course");
    if (course.value === "") {
      showError(course, "Please select a course");
      isValid = false;
    }

    const reason = document.getElementById("reason");
    if (reason.value.trim() === "") {
      showError(reason, "Please explain your reasons");
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  function showError(input, message) {
    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.innerText = message;
    input.parentNode.appendChild(errorElement);
  }
});
