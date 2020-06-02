// 编写一个函数，求取两个数组的交集
//example:

var arr1 = [1,2,3,4,5,6,7]
var arr2 = [4,3,6,9,0,99]
// 取巧方法:调用filter函数的数组为长度较短数组
// 反例：var arr1=[1,1,1]; var arr2 = [1]
arr2.filter(i => arr1.includes(i))

// 正确解法
const intersect = (nums1, nums2) => {
  const map = {}
  const res = []
  for (let n of nums1) {
    if (map[n]) {
      map[n]++
    } else {
      map[n] = 1
    }
  }
  for (let n of nums2) {
    if (map[n] > 0) {
      res.push(n)
      map[n]--
    }
  }
  return res
}
