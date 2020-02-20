// 41. 缺失的第一个正数

const sort6_1 = (nums) => {
  // 过滤负数和0
  nums = nums.filter(item => item > 0)
  if (nums.length) {
    // 排序(升)：方便从左到右取最小值
    nums.sort((a, b) => a - b)
    if (nums[0] !== 1) {
      return 1
    } else {
      for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] - nums[i] > 1) {
          return nums[i] + 1
        }
      }
      return nums.pop() + 1
    }
  } else {
    return 1
  }
}

// 方法二：改进sort排序，改为选择排序，从小到大排列，实时对比
const sort6_2 = (arr) => {
  arr = arr.filter(item => item > 0)
  for (let i = 0, len = arr.length, min; i < len; i++) {
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let c = min
        min = arr[j]
        arr[j] = c
      }
    }
    arr[i] = min
    if (i > 0) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i - 1] + 1
      }
    } else {
      if (min !== 1) {
        return 1
      }
    }
  }
  return arr.length ? arr.pop() + 1 : 1
}