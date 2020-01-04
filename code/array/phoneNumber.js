// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
const sourseData = [
  { key: 2, value: 'abc' },
  { key: 3, value: 'def' },
  { key: 4, value: 'ghi' },
  { key: 5, value: 'jkl' },
  { key: 6, value: 'mno' },
  { key: 7, value: 'pqrs' },
  { key: 8, value: 'tuv' },
  { key: 9, value: 'wxyz' },
]

function getCodeCombination (str) {
  const source = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const numbers = str.split('')
  const code = []
  numbers.map(item => {
    if (source[item]) code.push(source[item])
  })
  if (code.length === 0) return [];
  if (code.length === 1) return code[0].split('');
  const result = comb(code)
  return result
}

function comb (arr) {
  let com = []
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[1].length; j++) {
      com.push(`${arr[0][i]}${arr[1][j]}`)
    }
  }
  arr.splice(0, 2, com)
  if (arr.length > 1) {
    comb(arr)
  } else {
    return com
  }
  return arr[0]
}

module.exports = getCodeCombination