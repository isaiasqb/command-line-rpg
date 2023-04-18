const Enemy = require('./Enemy');
const Player = require('./Player');
// inquirer is needed in order to collect usert iput
const inquirer = require('inquirer')


function Game() {
  this.roundNumber = 0;
  this.isPlayerTurn = false;
  this.enemies = [];
  this.currentEnemy;
  this.player;
}

Game.prototype.initializeGame = function () {
  //populate the enemies array
  this.enemies.push(new Enemy('Witch', 'Gnarled wooden staff'));
  this.enemies.push(new Enemy('Minotaur', 'Battle Axe'));
  this.enemies.push(new Enemy('Undead Thrall', 'Bloody Spiked chain'));

  //keep track of which enemy is fighting the player
  this.currentEnemy = this.enemies[0];

  //prompt the user for their name
  inquirer.prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name, adventurer?'
  })
  //destructure the name form the prompt object
  .then(({ name }) => {
    this.player = new Player(name);
    //kick off the first battle and to be  called again anytime a new round starts.
    this.startNewBattle()
  });
 }

Game.prototype.startNewBattle = function () {
  if (this.player.agility > this.currentEnemy.agility) {
    this.isPlayerTurn = true;
  } else {
    this.isPlayerTurn = false;
  }

  // print a formatted table of data to display stats
  console.log('These are your current stats');
  console.table(this.player.getStats());

  console.log(this.currentEnemy.getDescription())

  this.battle()
};

Game.prototype.battle = function () {
  if (this.isPlayerTurn) {
    inquirer
    .prompt({
      type: 'list',
      message: 'What will you do?',
      name: 'action',
      choices: ['Attack', 'Use Potion']
    })
    .then(({ action }) => {
      if (action === 'Use Potion') {
        if(!this.player.getInventory()) { //getInventory() method that returns false if the inventory is empty
          console.log('You have no potions in your inventory!')
          return
        }
        inquirer
        .prompt({
          type: 'list',
          message: 'Which potion do you want to use?',
          name: 'potionChoice',
          //populate the choices array with strings that contain the Potion name and its index 
          choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)  //map() callback has a second optional parameter to capture the index of the item.
        })
        // the returned value will be a string like '2: agility'
        .then(({ potionChoice }) => {
          const potionDetails = potionChoice.split(': ');
      
          this.player.usePotion(potionDetails[0] - 1);
          console.log(`You used a ${potionDetails[1]} potion.`);
        });


      }
      else {
        const damage = this.player.getPowerValue();
        this.currentEnemy.reduceHealth(damage);

        console.log(`You attacked the evil ${this.currentEnemy.name}`);
        console.table(this.currentEnemy.getHealth())
      }
    })
  } else {
    const damage = this.currentEnemy.getPowerValue(); //DOUBLE check name of this function
    this.player.reduceHealth(damage)

    console.log(`You were attacked by the ${this.currentEnemy.name}`) 
    console.table(this.player.getHealth());
  }
}

 module.exports = Game;


