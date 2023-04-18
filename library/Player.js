const Potion = require('../library/Potion');

// jest.mock('../library/Potion') //replaces the constructor's implementation with our faked data.

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
};

//returns an object with player properties
Player.prototype.getInventory = function() {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};

Player.prototype.getHealth = function() {
  return `${this.name} now has ${this.health} health points`;
}

Player.prototype.isAlive = function() {
  if(this.health === 0) {
    return false;
  }
  return true;
};

Player.prototype.reduceHealth = function(health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
};

Player.prototype.getPowerValue = function() {
  const minAttack = this.power - 5;
  const maxAttack = this.power + 5;

  return Math.floor(Math.random() * (maxAttack - minAttack) + minAttack)
};

Player.prototype.addPotion = function(potion) {
  this.inventory.push(potion);
};

Player.prototype.usePotion = function(index) {
  const potion = this.getInventory().splice(index, 1)[0];

  switch (potion.name) {
    case 'agility':
      this.agility += potion.value;
      break;
    case 'health':
      this.health += potion.value;
      break;
    case 'power':
      this.power += potion.value;
      break;
  }
};

module.exports = Player;

