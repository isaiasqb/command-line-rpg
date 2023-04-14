const Potion = require('./Potion');


function Enemy(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  this.potion = new Potion();

  this.health = Math.floor(Math.random() * 10 + 85);
  this.power = Math.floor(Math.random() * 5 + 5);
  this.agility = Math.floor(Math.random() * 5 + 5);
}


Enemy.prototype.getHealth = function() {
  return `${this.name} now has ${this.health} health points`;
}

Enemy.prototype.isAlive = function() {
  if(this.health === 0) {
    return false;
  }
  return true;
};

Enemy.prototype.reduceHealth = function(health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
};

Enemy.prototype.getPowerValue = function() {
  const minAttack = this.power - 5;
  const maxAttack = this.power + 5;

  return Math.floor(Math.random() * (maxAttack - minAttack) + minAttack)
};

Enemy.prototype.getDescription = function() {
  return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

module.exports = Enemy;