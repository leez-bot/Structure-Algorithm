// 反转字符串中单词的顺序 leetcode:557. 反转字符串中的单词 III
// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc" 

function reverseString (str) {
  // 常规法
  // return str.split(' ').map(item => item.split('').reverse().join('')).join(' ')
  // 正则法
  // return str.split(/\s/g).map(item => item.split('').reverse().join('')).join(' ')
  // match法（\w匹配字符，+至少一次）
  return str.match(/[\w']+/g).map(item => item.split('').reverse().join('')).join(' ')
}

module.exports = reverseString
