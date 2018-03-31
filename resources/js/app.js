/*  RULES OF THE GAME
- player must guess a letter
- player gets a number of guesses equal to number of tiles that make up person, 8
- Notify player of guesses remaining
- Tile the figure when guess is incorrect
- When figure is fully tiled game is over, player has lost
- Show letters that are correct in order of the word they spell
- If all letters are filled in before all tiles that make up a person are displayed, then user has won
- Notify player of the correct answer if they lose
- Let the player choose to play again
*/

// VARIABLE DECLARATION
let winningWord = "CAT",
      winWordArray = ["C", "A", "T"],
      // winWhenEmpty = ["C", "A", "T"],
      winWhenAllOnes = [0,0,0];
      guessedWrong = 0,
      numberGuessedRight = 0,
      guessesLeft = 8,
      guessedAlready = [],
      guessedRight = false,
      whatToRemove = [],
      guessedWrongUI = [],
      guessedRightUI = [],
      incorrectGuessIndex = -1;

// VARIABLE DECLARATION


// UI ELEMENTS

const game = document.querySelector('#game'),
      correctGuessUI = document.querySelector('#correctUILetterList'),
      incorrectUI = document.querySelector('#incorrect-guesses'),
      emmetHead01 = document.querySelector('#a01-head'),
      emmetTorso02 = document.querySelector('#a02-torso'),
      emmetRtArm03 = document.querySelector('#a03-rt-arm'),
      emmetLftArm04 = document.querySelector('#a04-lft-arm'),
      emmetRtLeg05 = document.querySelector('#a05-rt-leg'),
      emmetLftLeg06 = document.querySelector('#a06-lft-leg'),
      emmetRtFoot07 = document.querySelector('#a07-rt-foot'),
      emmetLftFoot08 = document.querySelector('#a08-lft-foot'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      listMsg = document.querySelector('#special-message'),
      resetBtn = document.querySelector('#reset-btn');



      
      emmetUI = [
            emmetHead01,
            emmetTorso02,
            emmetRtArm03,
            emmetLftArm04,
            emmetRtLeg05,
            emmetLftLeg06,
            emmetRtFoot07,
            emmetLftFoot08];

var contains = function (haystack, needle) {
   return !!~haystack.indexOf(needle);
};

// Listen for Guess
guessBtn.addEventListener('click', function () {
      //e.preventDefault();
      let guess = guessInput.value;
      console.log("guess is " + guess);

      // Validate - Has this letter been guessed?
      // guessedAlready.includes(guess) {
       
      if (guessedAlready.includes(guess)){
            setMessage(`${guess} has already been guessed, try a different letter`, "red");
            // Hoping that setting guess = empty string allows me to proceed
            guessInput.value = " ";
      }

      for (i = 0; i < winningWord.length; i++) {
                  if (guess === winWordArray[i]) {
                        console.log("guess " + guess + " equals " + winWordArray[i]);
                        guessedRight = true;
                        winWhenAllOnes[i] = 1;
                        guessedRightUI[i] = guess;
                        numberGuessedRight++;
                       // Create button element
                        const buttonCorrectGuess = document.createElement('button');
                        // Add Class
                        buttonCorrectGuess.className = 'btn btn-primary';
                        buttonCorrectGuess.appendChild(document.createTextNode(guess));
                        correctGuessUI.appendChild(buttonCorrectGuess);

                  } else {
                        console.log("index is " + i);
                        console.log("guess " + guess + " !== " + winWordArray[i]);
                        console.log()

                  }

            } 
            // UPDATE WHAT WAS GUESSED
            guessedAlready.push(guess);

            // UPDATES IF GUESS WAS INCORRECT
            if(guessedRight === false) {
                  console.log("guessed wrong and value of guess is " + guess);
                  incorrectGuessIndex ++;
                  guessesLeft--;
                  // Create button element
                  const buttonWrongGuess = document.createElement('button');
                  // Add Class
                  buttonWrongGuess.className = 'btn btn-light';
                  buttonWrongGuess.appendChild(document.createTextNode(guess));
                  incorrectUI.appendChild(buttonWrongGuess);

                  console.log(buttonWrongGuess);
                  // guessedWrongUI[incorrectGuessIndex].innerHTML = "M";
                  emmetUI[incorrectGuessIndex].style.opacity = "1.0"
                  
            }
            // CHECK iF LOST
             if(guessesLeft === 0) {
                   console.log("it's done");
                  

             }

           

            // expected output: 12


            // CHECK IF WON
            if (numberGuessedRight === 3) {
                   // success
                   // change class btn-primary to btn-success
                   // clear and disable input field
                   // show Emmet in paradise
                  // Disable input
                  //guess.guessInput.disabled = true;
                  // Change border color
                  guessInput.style.borderColor = 'green';
                  // Declare won
                  //setMessage("you won", 'green');
                  setMessage(`${winningWord} is correct, you win!`, 'green');

            } else if (guessesLeft > 1) {
                  setMessage("try again, " + guessesLeft + " guesses left.", 'blue');
                  guessesLeft--;
            

            } else {
                  setMessage("Sorry, you didn't win this time", 'blue');
                  guessInput.value = "";

            }
            guessInput.value = " ";
            
      
      });
            // PLAY RESET EVENT LISTENER 
            // RESET guessesLeft, clear message
            // NEED to RESET THE winningNum

            resetBtn.addEventListener('click', function () {
                  window.location.reload();


            });

            // GENERATE COMPUTER"s GUESS
            function getRandomNum(min, max) {
                  return Math.floor(Math.random() * (max - min + 1) + min);
            }


            // Set Message - buggy, maybe alert, ugh
            function setMessage(msg, color) {
                  listMsg.style.color = color;
                  listMsg.textContent = msg;
            }

          