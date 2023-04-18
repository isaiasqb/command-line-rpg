//Player and Enemy have many of the same properties and methods, like name and isAlive(). 
//this constructor allows them to pull these methods from a shared location instead of being defined twice.
function Character() {}

Character.prototype.isAlive = function() {
  if (this.health === 0) {
    return false;
  }
  return true;
};

Character.prototype.getHealth = function() {
  return `${this.name}'s health is now ${this.health}!`;
};

Character.prototype.getAttackValue = function() {
  const min = this.power - 5;
  const max = this.power + 5;
  
  return Math.floor(Math.random() * (max - min) + min);
};

Character.prototype.reduceHealth = function(health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
};

module.exports = Character;

console.log(new Character().getHealth());
