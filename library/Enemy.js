const Potion = require('./Potion');
const Character = require('./Character')


class Enemy extends Character{
  constructor(name, weapon) {
        
    // call parent constructor so it can be properly initialized, before adding the properties of this consructor:
    super(name);

    //power, agility, health and mana properties are inherited from the parent constructor Character

    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();
  }

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
};

module.exports = Enemy;
