// console.log("working");

// let emptyWhenLengthZed = ["D","O","G"];
// let guessedA = ["C","A"];
// let guessInput3 = "C";

// let found = guessedA.find(function(element){
//   return element === guessInput3
//   console.log(element);
// });
// console.log("found is " + found);

// console.log(guessedA.includes("C"))


// if(guessedA.includes(guessInput3)) {
//   console.log("you already guessed this, try a different letter");
  
// }
// console.log("I am moving on in the code");

// var

// VARIABLE DECLARATION
let winWhenEmpty = ["Z", "Z", "Z"];
let guess = "Z";
let guessesLeft = 8;
let guessedRight = false;
let whatToRemove = [];

console.log("winWhenEmpty initial " + winWhenEmpty)
for(i=0; i < winWhenEmpty.length; i++) {
  if(guess === winWhenEmpty[i]){
    console.log("guess " + guess + " equals " + winWhenEmpty[i]);
    console.log("update UI");
    guessedRight = true;
    whatToRemove.push(i);
    console.log("whatToRemove " + whatToRemove);
    console.log(winWhenEmpty);
    console.log("have we won?");

  } else {
    console.log("index is "+ i);
    console.log("guess " + guess + " !== " + winWhenEmpty[i]);
    console.log()
    
  };
  
}
console.log("whatToRemove Before the loop" + whatToRemove);

for(c = 0; c < whatToRemove.length; c++){
  console.log("hello from in here"); 
  console.log("counter c = " + c);
  winWhenEmpty.splice(c,1);
  console.log("winWhenEmpty " + winWhenEmpty);
  
}

console.log("guessedRight " + guessedRight);
if(guessedRight === false){
  guessesLeft--;
  
}
console.log
console.log("gueesesLeft " + guessesLeft);
console.log("winwhenEmpty " + winWhenEmpty);