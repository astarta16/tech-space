document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq-question");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      const answer = faq.nextElementSibling;
      if (faq.classList.contains("active")) {
        faq.classList.remove("active");
        answer.style.display = "none";
      } else {
        // Close any other open answers
        document.querySelectorAll(".faq-answer").forEach((ans) => {
          ans.style.display = "none";
          ans.previousElementSibling.classList.remove("active");
        });
        faq.classList.add("active");
        answer.style.display = "block";
      }
    });
  });
});
