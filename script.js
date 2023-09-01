  // Your existing simpanNama function
  function simpanNama() {
    let nama = document.getElementById("input-box").value; // Get the current value from the input element
  
    // Retrieve the existing names from local storage
    let savedNames = localStorage.getItem("names");
  
    // Convert the saved string of names to an array
    let namesArray = savedNames ? JSON.parse(savedNames) : [];
  
    // Check if the name already exists in the array
    // if (namesArray.includes(nama)) {
    //   Swal.fire("Nama Sudah Ada"); // Alert if name already exists
    //} 
     if (nama === "") {
      Swal.fire("Nama harus diisi!");
    } else {
      // Add the new name to the array
      namesArray.push(nama);
      
  
      // Save the updated array back to local storage
      localStorage.setItem("names", JSON.stringify(namesArray));
  
      // Clear the input field for the next name
      document.getElementById("input-box").value = "";
      window.location.href = "game.html";
    }
  }


// Function to update and display leaderboard
function updateLeaderboard() {
    let leaderboardData = localStorage.getItem("leaderboard");
    let leaderboardArray = leaderboardData ? JSON.parse(leaderboardData) : [];
  
    const leaderboardList = document.getElementById("leaderboard-list");
    leaderboardList.innerHTML = ""; // Clear previous entries
  
    // Populate leaderboard entries
    leaderboardArray.forEach((entry) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${entry.name} ${entry.score}`;
      leaderboardList.appendChild(listItem);
    });
  }
  
  // Initial leaderboard update when the page loads
  updateLeaderboard();
  
 // Your existing secretNumber, score, and playerName variables
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  let highscore = 0;
  let playerName;
  
  // Your existing displayMessage function
  const displayMessage = function (message) {
    document.querySelector("#messageId").textContent = message;
  };
  
  // Function to handle the player's guess
  document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
  
    // When there is no input
    if (!guess) {
        displayMessage("⛔️ No number!");
    } else if (guess > 20 || guess < 1) {
        displayMessage("Number between 1 and 20");
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        document.querySelector(".number").textContent = secretNumber;

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
            window.location.href = "index.html";
          });
  

            // Retrieve the existing names from local storage
            let savedNames = localStorage.getItem("names");
           
            // Convert the saved string of names to an array
            let namesArray = savedNames ? JSON.parse(savedNames) : [];
            
            let latestName = namesArray.length > 0 ? namesArray[namesArray.length - 1] : "Unknown";
            // Find the player's name based on their score
            playerName = namesArray.find(entry => entry.score === score)?.name || "Unknown";
        
            // Save the score and name to local storage
            let leaderboardData = localStorage.getItem("leaderboard");
            let leaderboardArray = leaderboardData ? JSON.parse(leaderboardData) : [];
        
            leaderboardArray.push({ name:  latestName, score: score });

            // Sort leaderboard by score in descending order
            leaderboardArray.sort((a, b) => b.score - a.score);
        
            // Keep only the top 5 scores
            leaderboardArray = leaderboardArray.slice(0, 5);
        
            // Save updated leaderboard to local storage
            localStorage.setItem("leaderboard", JSON.stringify(leaderboardArray));
        
            document.querySelector("#scoreAkhir").textContent = score;
            document.querySelector("#namaPemain").textContent = latestName;
            
            updateLeaderboard(); // Update and display the leaderboard
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
  
  

  
 