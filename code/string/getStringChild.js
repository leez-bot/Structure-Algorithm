// 链接：https://leetcode-cn.com/problems/count-binary-substrings
// 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

// 输入: "00110011"

// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

function getStringChild (str) {
  const children = []
  for (let i = 0; i < str.length - 1; i++) {
    children.push(matchChild(str.slice(i)))
  }
  return children.filter(i => i).length
}

function matchChild (str) {
  let _preCount = 0;
  let _nextCount = 0;
  const _str = str.split('')
  for (let i = 0; i < _str.length; i++) {
    if (i === 0) {
      _preCount++
    } else if (i > 0 && _str[i] === _str[0]) {
      _preCount++
    } else if (i > 0 && _str[i] !== _str[0]) {
      _nextCount++
      if (_preCount === _nextCount) {
        return str.slice(0, i + 1)
      }
    }
  }
  if (_preCount !== _nextCount) {
    return ''
  }
}

// getStringChild("00110011")

module.exports = getStringChild
