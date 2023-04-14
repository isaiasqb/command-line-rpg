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
    console.log(this.currentEnemy, this.player)
  });
 }

 module.exports = Game;


