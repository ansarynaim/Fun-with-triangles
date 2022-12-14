const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswer = ["90°", "right angled", "Isosceles", "5cm", "Vertex"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResult = new FormData(quizForm);
  for (let value of formResult.values()) {
    if (value === correctAnswer[index]) {
      score = score + 1;
    }
    index = index + 1;
  }

  outputEl.innerText = "Your score is " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);
