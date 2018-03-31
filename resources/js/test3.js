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
      winWordArrayForUI = ["C", "A", "T"],
      winWhenEmpty = ["C", "A", "T"],
      guessedWrong,
      guessesLeft = 8,
      guessedAlready = ["M"],
      guessedRight = false,
      whatToRemove = [];

// VARIABLE DECLARATION


// UI ELEMENTS

const game = document.querySelector('#game'),
      letter0 = document.querySelector('#letter-0'),
      letter1 = document.querySelector('#letter-1'),
      letter2 = document.querySelector('#letter-2'),
      guessedWrong0 = document.querySelector('btn-guessed-wr-0'),
      guessedWrong1 = document.querySelector('btn-guessed-wr-1'),
      guessedWrong2 = document.querySelector('btn-guessed-wr-2'),
      guessedWrong3 = document.querySelector('btn-guessed-wr-3'),
      guessedWrong4 = document.querySelector('btn-guessed-wr-4'),
      guessedWrong5 = document.querySelector('btn-guessed-wr-5'),
      guessedWrong6 = document.querySelector('btn-guessed-wr-6'),
      guessedWrong7 = document.querySelector('btn-guessed-wr-7'),
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


// Listen for Guess
guessBtn.addEventListener('click', function () {
                  //e.preventDefault();
                  let guess = guessInput.value;
                  console.log("guess is " + guess);

                  // Validate - Has this letter been guessed?
                  // guessedAlready.includes(guess) {
                  //             setMessage(`${guess} has already been guessed, try a different letter`, "red");
                  //             // Hoping that setting guess = empty string allows me to proceed
                  //             guess = " ";
                  //       };



                        // console.log("winWhenEmpty initial " + winWhenEmpty) 
                        
                        for (i = 0; i < winWhenEmpty.length; i++) {
                              if (guess === winWhenEmpty[i]) {
                                    console.log("guess " + guess + " equals " + winWhenEmpty[i]);
                                    // console.log("update UI");
                                    // letter0.innerHTML = guess;
                                    guessedRight = true;
                                    whatToRemove.push(i);
                                    console.log("whatToRemove " + whatToRemove);
                                    console.log(winWhenEmpty);
                                    // console.log("have we won?");

                              } else {
                                    console.log("index is " + i);
                                    console.log("guess " + guess + " !== " + winWhenEmpty[i]);
                                    console.log()

                              };

                        }
                        console.log("whatToRemove Before the loop " + whatToRemove);

                        for (var c = whatToRemove.length - 1; c >= 0; c--) {
                              console.log("hello from in here");
                              console.log("counter c = " + c);
                              console.log("winWhenEmpty Before Splice " + winWhenEmpty);
                              console.log("splice c value " + c)
                              // winWhenEmpty.splice(c,1);
                              // for (var i = removeValFromIndex.length -1; i >= 0; i--)
                              winWhenEmpty.splice(whatToRemove[i], 1);
                              console.log("winWhenEmpty After Splice " + winWhenEmpty);

                        }

                        console.log("guessedRight " + guessedRight);
                        if (guessedRight === false) {
                              guessesLeft--;

                        }
                        console.log("gueesesLeft " + guessesLeft); 
                        console.log("winwhenEmpty " + winWhenEmpty);

                        // expected output: 12


                        // CHECK IF WON
                        if (winWhenEmpty.length === 0) {

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
                              guessedAlready.push(guess);

                        } else {
                              setMessage("Sorry, you didn't win this time", 'blue');
                              guessInput.value = "";

                        }
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

            // List what has been guessed - not working
            function setGuessed(guessedVal) {
                  listGuessed.textContent = guessedAlready;
            };