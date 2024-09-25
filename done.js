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
