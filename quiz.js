const submit = document.getElementById("submit-answer");
const feedback = document.getElementById("feedback");

function checkAnswer() {
  const correctAnswer = "4";
  const checked = document.querySelector("input[name='quiz']:checked");
  const userAnswer = checked ? checked.value : null;
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else if (userAnswer === null) {
    feedback.textContent = "Please select an option!";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

submit.addEventListener("click", checkAnswer);
