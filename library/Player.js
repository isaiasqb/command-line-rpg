const Potion = require('../library/Potion');

jest.mock('../library/Potion') //replaces the constructor's implementation with our faked data.

console.log(new Potion)

function Player (name = '') {
  this.name = name;

  this.power = Math.floor(Math.random() * 10 + 95);
  this.agility = Math.floor(Math.random() * 5 + 7);
  this.health = Math.floor(Math.random() * 5 + 7);
  this.mana = Math.floor(Math.random() * 5 + 7)
  //any new character must start with 2 potions in their inventory
  this.inventory = [new Potion('health'), new Potion()];
};

//returns an object with player properties
Player.prototype.getStats = function() {
  return {
    potions: this.inventory.length,
    power: this.power,
    agility: this.agility,
    health: this.health,
    mana: this.mana,
  }
}
//returns an object with player properties
Player.prototype.getInventory = function() {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
}


module.exports = Player;

