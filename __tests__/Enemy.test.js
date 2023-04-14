const Enemy = require('../library/Enemy');
const Potion = require('../library/Potion');

jest.mock('../library/Potion.js');

test('creates an Enemy object', () => {
  const enemy = new Enemy('Uruk-hai', 'morningstar');

  expect(enemy.name).toBe('Uruk-hai');
  expect(enemy.weapon).toBe('morningstar');
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.power).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
})


test("gets the enemy's health value", () => {
  const enemy = new Enemy('Uruk-hai', 'morningstar');

  expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()))
});

test('checks if enemy is alive or not', () => {
  const enemy = new Enemy('Uruk-hai', 'morningstar');

  expect(enemy.isAlive()).toBeTruthy();
  enemy.health = 0;
  expect(enemy.isAlive()).toBeFalsy()
});

test("substracts points form enemy's health", () => {
  const enemy = new Enemy('Uruk-hai', 'morningstar');
  const previousHealth = enemy.health;

  enemy.reduceHealth(5);
  expect(enemy.health).toBe(previousHealth - 5);

  enemy.reduceHealth(99999);
  expect(enemy.health).toBe(0);
});

test("gets the enemy's ttack points", () => {
  const enemy = new Enemy('Uruk-hai', 'morningstar');
  enemy.power = 10;

  expect(enemy.getPowerValue()).toBeGreaterThanOrEqual(5);
  expect(enemy.getPowerValue()).toBeLessThanOrEqual(15);
});

test('gets the description of the enemy', () => {
  const enemy = new Enemy('Witch', 'Poisoned apple');

  expect(enemy.getDescription()).toEqual(expect.stringContaining('Witch'));
  expect(enemy.getDescription()).toEqual(expect.stringContaining('apple'));
})