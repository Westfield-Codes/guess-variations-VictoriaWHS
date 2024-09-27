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