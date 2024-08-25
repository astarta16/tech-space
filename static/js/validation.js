document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".register-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const inputs = form.querySelectorAll("input, textarea, select");
      let isValid = true;

      inputs.forEach((input) => {
        const errorContainer = input.parentNode.querySelector(".error-message");
        if (errorContainer) {
          errorContainer.remove();
        }

        switch (input.id) {
          case "name":
          case "surname":
          case "reason":
            if (input.value.trim() === "") {
              showError(
                input,
                `${
                  input.id.charAt(0).toUpperCase() + input.id.slice(1)
                } is required`
              );
              isValid = false;
            }
            break;
          case "email":
            if (!input.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
              showError(input, "Please enter a valid email address");
              isValid = false;
            }
            break;
          case "age":
            if (input.value <= 0 || input.value.trim() === "") {
              showError(input, "Please enter a valid age");
              isValid = false;
            }
            break;
          case "birthday":
            if (input.value === "") {
              showError(input, "Please enter your birthday");
              isValid = false;
            }
            break;
          case "course":
            if (input.value === "") {
              showError(input, "Please select a course");
              isValid = false;
            }
            break;
        }
      });

      if (isValid) {
        form.submit();
      }
    });

    function showError(input, message) {
      const errorElement = document.createElement("div");
      errorElement.className = "error-message";
      errorElement.innerText = message;
      input.parentNode.appendChild(errorElement);
    }
  } else {
    console.error("Form with class 'register-form' not found.");
  }
});
