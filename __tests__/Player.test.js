const Player = require('../library/Player');
const Potion = require('../library/Potion')

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

test("gets the player's health value", () => {
  const player = new Player('Kvothe');

  expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()))
});

test('checks if player is alive or not', () => {
  const player = new Player('Kvothe');

  expect(player.isAlive()).toBeTruthy();
  player.health = 0;
  expect(player.isAlive()).toBeFalsy()
});

test("substracts points form player's health", () => {
  const player = new Player('Kvothe');
  const previousHealth = player.health;

  player.reduceHealth(5);
  expect(player.health).toBe(previousHealth - 5);

  player.reduceHealth(99999);
  expect(player.health).toBe(0);
});

test("gets the player's ttack points", () => {
  const player = new Player('Kvothe');
  player.power = 10;

  expect(player.getPowerValue()).toBeGreaterThanOrEqual(5);
  expect(player.getPowerValue()).toBeLessThanOrEqual(15);
});

test('adds a potion to the inventory', () => {
  const player = new Player('Dave');
  const oldCount = player.inventory.length;

  player.addPotion(new Potion());

  expect(player.inventory.length).toBeGreaterThan(oldCount);
});