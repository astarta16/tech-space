let currentScore = 0;
let questionCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startNextQuiz").style.display = "block"; 
  document.getElementById("question").style.display = "none";
  document.getElementById("answers-list").style.display = "none";
});

function loadQuiz() {
  if (questionCount > 0) {
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
      .then((response) => response.json())
      .then((data) => displayQuestion(data.results[0]))
      .catch((error) => console.error("Error fetching quiz:", error));
  }
  questionCount++;
  document.getElementById("startNextQuiz").textContent = "Next Question"; 
  document.getElementById("question").style.display = "block";
  document.getElementById("answers-list").style.display = "block";
}

function displayQuestion(questionData) {
  const questionElement = document.getElementById("question");
  questionElement.innerText = questionData.question;

  const answers = [
    ...questionData.incorrect_answers,
    questionData.correct_answer,
  ];
  shuffleArray(answers); 

  const answersList = document.getElementById("answers-list");
  answersList.innerHTML = "";
  answers.forEach((answer) => {
    const answerItem = document.createElement("li");
    const answerButton = document.createElement("button");
    answerButton.textContent = answer;
    answerButton.onclick = () =>
      selectAnswer(answer, questionData.correct_answer);
    answerItem.appendChild(answerButton);
    answersList.appendChild(answerItem);
  });
}

function selectAnswer(selected, correct) {
  const allButtons = document.querySelectorAll("#answers-list button");
  allButtons.forEach((button) => {
    button.disabled = true; 
    if (button.textContent === correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("wrong");
    }
  });

  if (selected === correct) {
    currentScore += 10;
    document.getElementById("resultMessage").textContent = "Correct Answer!";
  } else {
    document.getElementById("resultMessage").textContent = "Wrong Answer!";
  }

  document.getElementById("score").textContent = `Score: ${currentScore}`;

  if (currentScore >= 20) {
    document.getElementById("resultMessage").textContent =
      "Congratulations! You are a winner!";
    document.getElementById("startNextQuiz").style.display = "none"; 
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
