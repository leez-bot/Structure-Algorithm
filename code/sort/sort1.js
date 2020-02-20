// 冒泡排序

export default (arr) => {
  for (let i = arr.length - 1, temp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      temp = arr[j]
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}