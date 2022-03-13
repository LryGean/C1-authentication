// 字母频率分析
// 方法一
// var str = 'Python knows the usual control flow statements that other languages speak — if, for, while and range — with some of its own twists, of course. More control flow tools in Python 3. Python is a programming language that lets you work quickly and integrate systems more effectively.'

// var strArr = str.split('')

// console.log(strArr)

// var obj = {}

// for (var i=0; i<strArr.length; i++) {
//     // 如果对象没有该属性值，进行初始化
//     if (obj[strArr[i]] === undefined) {
//         obj[strArr[i]] = 1
//     }
//     else {
//         obj[strArr[i]] += 1
//     }
// }

// console.log(obj)


// 方法二

var str = 'Python knows the usual control flow statements that other languages speak — if, for, while and range — with some of its own twists, of course. More control flow tools in Python 3. Python is a programming language that lets you work quickly and integrate systems more effectively.'

var strArr = str.split('')

var obj = {}

// 回调函数
strArr.map(function (item) {
    // 如果对象没有该属性值，进行初始化
    if (obj[item] === undefined) {
        obj[item] = 1
    }
    else {
        obj[item] += 1
    }
})

console.log(obj)