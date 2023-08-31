//jalan kalau submit diklik
function simpanNama() {
  let nama = document.getElementById("input-box").value; // Get the current value from the input element

  // Retrieve the existing names from local storage
  let savedNames = localStorage.getItem("names");

  // Convert the saved string of names to an array
  let namesArray = savedNames ? JSON.parse(savedNames) : [];

  // Check if the name already exists in the array
  if (namesArray.includes(nama)) {
    Swal.fire("Nama Sudah Ada"); // Alert if name already exists
  } else if (nama === "") {
    Swal.fire("Nama harus diisi!");
  } else {
    // Add the new name to the array
    namesArray.push(nama);
    window.location.href = "game.html";

    // Save the updated array back to local storage
    localStorage.setItem("names", JSON.stringify(namesArray));

    // Clear the input field for the next name
    document.getElementById("input-box").value = "";
  }
}
//localStorage.getItem(name);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let playerName;
const displayMessage = function (message) {
  document.querySelector("#messageId").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (guess > 20 || guess < 1) {
    displayMessage("Number between 1 and 20");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("#scoreAkhir").textContent = score;
    document
      .querySelector(".check-button")
      .addEventListener("click", function () {
        document.querySelector(".popup").classList.add("active");
      });
    document
      .querySelector(".popup .try-again")
      .addEventListener("click", function () {
        document.querySelector(".popup").classList.remove("active");
        window.location.href = "game.html";
      });

    document
      .querySelector(".popup .back-home")
      .addEventListener("click", function () {
        window.location.href = "home.html";
      });

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector("#scoreId").textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

let nameList = JSON.parse(localStorage.getItem("names"));
let highscoreDisplay = "";
for (let i = 0; i < Math.min(5, nameList.length); i++) {
  highscoreDisplay += `${i + 1} ${nameList[i]}: ${nameList[i]}<br>`;
}

document.querySelector(".leader-board").innerHTML = highscoreDisplay;
