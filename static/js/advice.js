const fetchAdvice = () => {
  axios
    .get("https://api.adviceslip.com/advice")
    .then((response) => {
      const { advice } = response.data.slip;
      document.getElementById("advice-text").innerText = `"${advice}"`;
    })
    .catch((error) => {
      console.log("Error fetching advice:", error);
      document.getElementById("advice-text").innerText =
        "Failed to fetch advice. Please try again.";
    });
};

document.getElementById("show-advice").addEventListener("click", fetchAdvice);
