var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {

  fight();
  
  // Subtract the value of 'playerAttack' form the value of enemyHealth'and use that result to update the value in the 'enemyHealth' variable
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
  //subtract the value of enemyAttack from the value of 'playerHealth' and use that result ot update the value in the 'playerHealth variable
  //Log a resulting message to the console so we know that it worked.
}