const Player = require('../library/Player');

test('creates a player object', () => {
  const player = new Player('Kvothe');

  expect(player.name).toBe('Kvothe');
  expect(player.power).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.health).toEqual(expect.any(Number));
  expect(player.mana).toEqual(expect.any(Number));

  //check for the creation of an inventory
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  )
});

test('gests player stats ans an object', () => {
  const player = new Player('Kvothe');

  expect(player.getStats()).toHaveProperty('potions');
  expect(player.getStats()).toHaveProperty('power');
  expect(player.getStats()).toHaveProperty('agility');
  expect(player.getStats()).toHaveProperty('health');
  expect(player.getStats()).toHaveProperty('mana');
});

test('gets inventory from player or return false if empty', () => {
  const player = new Player('Kvothe');

  expect(player.getInventory()).toEqual(expect.any(Array));
  player.inventory = [];
  expect(player.getInventory()).toEqual(false);
});
