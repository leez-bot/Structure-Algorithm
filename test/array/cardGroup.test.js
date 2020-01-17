const hasGroupsSizeX = require('../../code/array/cardGroup')

test('[1,2,3,4,4,3,2,1]', () => {
  expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true);
});

test('[0,0,0,0,0,1,1,2,3,4]', () => {
  expect(hasGroupsSizeX([0, 0, 0, 0, 0, 1, 1, 2, 3, 4])).toBe(false);
});