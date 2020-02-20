// 最大间距问题

// leecode:164
const maxArr = (arr) => {
  let result = 0;
  if (arr.length >= 2) {
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length - 1; i++) {
      let next = arr[i + 1]
      let prev = arr[i]
      if (next - prev > result) {
        result = arr[i + 1] - arr[i]
      }
    }
  }
  return result;
}

// 方法二:在排序的时候就进行最大差值比较
const sort3 = (arr) => {
  let result = 0;
  if (arr.length >= 2) {
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0, temp; j < i; j++) {
        if (arr[j + 1] < arr[j]) {
          temp = arr[j + 1]
          arr[j + 1] = arr[j]
          arr[j] = temp
        }
      }
      if (arr[i] - arr[i - 1] > result && (arr.length === 2)) {
        result = arr[i] - arr[i - 1]
      } else if (arr[i + 1] - arr[i] > result) {
        result = arr[i + 1] - arr[i]
      }
    }
  }
  return result
}