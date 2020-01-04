const getCodeCombination = require('../../code/array/phoneNumber')

test('23', () => {
  expect(getCodeCombination('23')).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
});