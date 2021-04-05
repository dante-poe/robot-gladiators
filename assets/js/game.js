// Game States
// "WIN" - Player robot has defeated all enemy-robots
//      *fight all robots
//      *beat all robots
// "LOSE" - Player robot's health is zero or less
//      *player robot dies
//      *player quits

//window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot-gladiator's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Crushinator','Billy Bob Robot','Project X'];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // Alert players that they are starting the round
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight)
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has been smashed!");
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    
        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has been reduced to a pile of bolts!");
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chickened out this time. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }

        // if no (false), ask question again by running fight() again
        else {
            fight();
        }


    
    } else {
        window.alert("What did you say? Try again!");
        fight ();
    }
        
    };

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  } 