const game = () => {
  let pScore = 0;
  let jScore = 0;

  //start the game
  const startGame = () => {
    const PlayBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    PlayBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const bidenHand = document.querySelector(".biden-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Joe Biden Options
    const bidenOptions = ["rock", "paper", "scissors"];

    options.forEach((options) => {
      options.addEventListener("click", function () {
        //Joe Biden Choice
        const bidenNumber = Math.floor(Math.random() * 3);
        const bidenChoice = bidenOptions[bidenNumber];

        setTimeout(() => {
          // comparison for the hands
          compareHands(this.textContent, bidenChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          bidenHand.src = `./assets/${bidenChoice}.png`;
        }, 2000);

        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        bidenHand.style.animation = "shakeJoe 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const bidenScore = document.querySelector(".biden-score p");
    playerScore.textContent = pScore;
    bidenScore.textContent = jScore;
  };

  const compareHands = (playerChoice, bidenChoice) => {
    //something
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === bidenChoice) {
      winner.textContent = "I don't know how to play to tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (bidenChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Joewari Da Byedan Brast";
        jScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (bidenChoice === "scissors") {
        winner.textContent = "Joewari Da Byedan Brast";
        jScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (bidenChoice === "rock") {
        winner.textContent = "Joewari Da Byedan Brast";
        jScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is a call out inner function
  startGame();
  playMatch();
};

//start the game function
game();
