const getStringChild = require('../../code/string/getStringChild');

test("00110011", () => {
  const str = "开开心心开开心心开开心心"
  const result = 10
  expect(getStringChild(str)).toBe(result);
});
