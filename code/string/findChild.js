// 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。
// 涉及知识点： KMP算法
// 相关链接：http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html

const S = 'adklajlfajgoewrljl'
const T = 'jlfaj'

let index = -1

// 方法一：使用search
index = S.search(T)

// 方法二：使用match  匹配成功，返回一个数组；匹配失败，返回null
function findIndex(S, T) {
    let result = S.match(T)
    // result: ["sfaf", index: 3, input: "adasfafdsafda", groups: undefined]
    if (result) return result.index
    return -1
}

// 方法三：循环匹配
function findChild(S, T) {
    for (let i = 0; i<S.length - T.length; i++) {
        // if (S.slice(i, i + T.length) === T) return i
        if (S.substr(i, T.length) === T) return i
    }
    return -1
}