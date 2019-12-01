const reverseString = require('../../code/string/reverseString');

test("Let's take LeetCode contest to equal s'teL ekat edoCteeL tsetnoc", () => {
  const str = "Let's take LeetCode contest"
  const result = "s'teL ekat edoCteeL tsetnoc"
  expect(reverseString(str)).toBe(result);
});
