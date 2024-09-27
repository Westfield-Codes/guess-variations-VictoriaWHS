/* Define a function called rollDice */
function rollDice(){}
  // create a variable called roll, set it equal to random 1-6
  let roll = Math.floor(Math.random()*6+1);
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
