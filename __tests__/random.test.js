const randomNum = require("../library/random.js");

test('gets a random number betweent 1 - 10', () => {
  expect(randomNum()).toBeGreaterThanOrEqual(1);
  expect(randomNum()).toBeLessThanOrEqual(10);
});