/* Define a function called rollDice */
function rollDice(){}
  // create a variable called roll, set it equal to random 1-6
  let roll= Math.floor(Math.random()*6+1);
  // if roll equals 6, display "6! You win!"
if (roll == "6")  alert("6, you win!");
  // otherwise use a confirm and say: "You rolled a [roll]"
else alert("You rolled a " + roll);

// close the function block

function rollDice(){} 
  let roll = Math.floor(Math.random()*6+1);
if (roll == 6) alert("6! You win!");
else alert("you rolled "+ roll);

/* Define a function called rollDice */
function rollDice(){}
  // create a variable called roll, set it equal to random 1-6
  let roll = Math.floor(Math.random()*6+1);
  // if roll equals 6, display "6! You win!"
if (roll == "6")  alert("6, you win!");
  // otherwise use a confirm and say: "You rolled a [roll]"
else {
rollDice();
confirm("You rolled a " + roll);

/* Simple Guess Program */

// create global variable guess, set to 0
var guess= 0;
// create a global variable called answer and store a random integer 1-100
 var answer= Math.floor(Math.random()*100+1);
// define function guessGame
function guessGame() {
// display the answer for testing purposes only
alert(answer)
// set guess equal to prompt asking user to "Guess a number, 1-100"
var guess =prompt("Guess a number 1-100");
// if guess equals answer display "Correct!" 
if (guess==answer) alert("correct!");
// or if guess is greater than answer create a code block
else if(answer<guess){
    alert("Nope too high.");
    guessGame();
}
// otherwise open a code block
else{
// display "Too low!" 
alert("too low!");
// call guessGame
guessGame();
// close the else code block
}
// end the function
}

// create global variable guess, set to 0
var guess= 0;
// create a global variable called answer and store a random integer 1-100
 var answer= Math.floor(Math.random()*100+1);
// define function guessGame
function guessGame() {
// display the answer for testing purposes only
alert(answer)
// set guess equal to prompt asking user to "Guess a number, 1-100"
var guess =prompt("Guess a number 1-100");
// if guess equals answer display "Correct!" 
if (guess==answer) alert("correct!");
// or if guess is greater than answer create a code block
else if(answer<guess){
    alert("Nope too high.");
    guessGame();


    /* Simple Guess Program */

// define function guessGame
function guessGame() { 
  // generate a random integer 1-100
var answer= Math.floor(Math.random()*100+1);
  // display the integer for testing purposes only
alert(answer);
  // create guess and set equal to 0 
var guess=0;
  // loop while guess is not equal to answer
while (guess != answer){
    // set guess equal to asking user to "Guess a number, 1-100"
guess= prompt ("Guess a number1 -100");
    // if guess equals answer display "Correct!" 
if(guess == answer) alert("Correct!");
    // or if guess is greater than answer display "Too high!" 
else if(guess<answer)  alert("toooooo lowwwwww");
    // or if guess is less than answer display "Too low!" 
else if (guess>answer) alert("too high");

    // else say "Bad input"

  // end the loop
}
// end the function
}