// 数组去重
// var arr = [4, 3, 23, 4, 4, 5, 23]

// var newArr = []

// arr.map(function (item) {
//     // -1表示没有
//     if (newArr.indexOf(item) === -1) {
//         newArr.push(item)
//     }
// })

// console.log(newArr)

// 封装
var arr = [4, 3, 23, 4, 4, 5, 23]
function duplicate(arr) {
    var newArr = []

    arr.map(function (item) {
        // -1表示没有
        if (newArr.indexOf(item) === -1) {
            newArr.push(item)
        }
    })
    return newArr
}

console.log(duplicate(arr))