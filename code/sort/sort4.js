// 922. 按奇偶排序数组 II

// 1、常规思路：先筛选出奇/偶数数组，再遍历依次插入新数组
const sort4_1 = (A) => {
  let jiArr = []
  let ouArr = []
  let resultArr = []
  A.sort((a, b) => a - b)
  A.forEach(item => {
    if (item % 2 === 0) {
      ouArr.push(item)
    } else {
      jiArr.push(item)
    }
  })
  for (let i = 0, len = A.length / 2; i < len; i++) {
    resultArr.push(ouArr[i])
    resultArr.push(jiArr[i])
  }
  return resultArr
}

// 2、下标思路(一次遍历)：分别记录奇/偶数下标，插入新数组对应奇偶位置
const sort4_2 = (A) => {
  let ouIndex = 0
  let jiIndex = 1
  let result = []
  A.forEach(item => {
    if (item % 2 === 0) {
      result[ouIndex] = item
      ouIndex += 2
    } else {
      result[jiIndex] = item
      jiIndex += 2
    }
  })
  return result
}