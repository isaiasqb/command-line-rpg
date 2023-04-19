class Potion {
  constructor(name) {
    this.types = ['power', 'agility', 'health', 'mana']

    const randomName = this.types[Math.floor(Math.random() * this.types.length)]
    this.name = name || randomName;

    if(this.name === 'health') {
      this.value = Math.floor(Math.random()* 10 + 30) //any value between 30 - 40
    } else {
      this.value = Math.floor(Math.random()* 5 + 7) //any number between 7 -12
    }
  }
}

module.exports = Potion;