// 215：数组中第K个最大元素

// 原始解法
const sort5_1 = (nums, k) => {
  return nums.sort((a, b) => b - a)[k]
}

const sort5_2 = function (nums, k) {
  let len = nums.length - 1
  for (let i = len, temp; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j + 1] < nums[j]) {
        temp = nums[j + 1]
        nums[j + 1] = nums[j]
        nums[j] = temp
      }
    }
  }
  return nums[len - (k - 1)]
};