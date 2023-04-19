//Player and Enemy have many of the same properties and methods, like name and isAlive(). 
//this constructor allows them to pull these methods from a shared location instead of being defined twice.
class Character {

  constructor(name = '') {
    this.name = name;
    this.health = Math.floor(Math.random() * 10 + 95);
    this.power = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.mana = Math.floor(Math.random() * 5 + 7);
  }

  isAlive() {
    if (this.health === 0) {
      return false;
    }
    return true;
  };

  getHealth() {
    return `${this.name}'s health is now ${this.health}!`;
  };

  getPowerValue() {
    const min = this.power - 5;
    const max = this.power + 5;
    
    return Math.floor(Math.random() * (max - min) + min);
  };

  reduceHealth(health) {
    this.health -= health;

    if (this.health < 0) {
      this.health = 0;
    }
  };
}

module.exports = Character;
