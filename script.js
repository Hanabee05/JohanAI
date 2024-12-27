const questions = [
  { question: "Apa kategori trik yang Anda inginkan? (misal: meluluhkan hati wanita, membangun rasa percaya)", key: "kategori" },
  { question: "Metode atau pendekatan apa yang Anda pilih? (misal: romantis, misterius, kejujuran, dukungan)", key: "pendekatan" }
];

let currentQuestionIndex = 0;
let answers = {};

function showQuestion() {
  const questionContainer = document.getElementById("question-container");
  const output = document.getElementById("output");
  const nextBtn = document.getElementById("next-btn");

  const question = questions[currentQuestionIndex];
  if (question) {
    questionContainer.innerHTML = `
      <label>${question.question}</label>
      <input type="text" id="answer-input">
    `;
    nextBtn.style.display = "block";
    output.textContent = "Jawaban Anda akan muncul di sini.";
  } else {
    submitAnswers();
  }
}

function submitAnswers() {
  fetch('/process', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answers })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").innerHTML = `
        <h3>Hasil:</h3>
        <p>${data.result}</p>
      `;
      document.getElementById("question-container").innerHTML = "";
      document.getElementById("next-btn").style.display = "none";
    })
    .catch(error => {
      document.getElementById("output").textContent = "Terjadi kesalahan: " + error;
    });
}

document.getElementById("next-btn").addEventListener("click", () => {
  const input = document.getElementById("answer-input").value;
  const question = questions[currentQuestionIndex];

  if (input.trim() !== "") {
    answers[question.key] = input;
    currentQuestionIndex++;
    showQuestion();
  } else {
    alert("Jawaban tidak boleh kosong!");
  }
});

showQuestion();