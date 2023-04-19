const Potion = require('../library/Potion');
const Character = require('./Character')

// jest.mock('../library/Potion') //replaces the constructor's implementation with our faked data.

console.log(new Potion)

class  Player extends Character { 
  constructor (name = '') {

    // call parent constructor so it can be properly initialized, before adding the properties of this consructor:
    super(name);

    //power, agility, health and mana properties are inherited from the parent constructor Character

    this.inventory = [new Potion('health'), new Potion()];
  };

  //returns an object with player properties
  getStats() {
    return {
      potions: this.inventory.length,
      power: this.power,
      agility: this.agility,
      health: this.health,
      mana: this.mana,
    }
  };

  //returns an object with player properties
  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  };

  addPotion(potion) {
    this.inventory.push(potion);
  };

  usePotion(index) {
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
  }
}

module.exports = Player;

