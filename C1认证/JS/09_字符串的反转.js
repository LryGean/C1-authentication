// var str = "abcdef"

// "fedcba"

// var strArr = str.split("")
// console.log(strArr.reverse().join(""))


// 封装
var str = "abcdef"
function reverseStr(str) {
    return str.split("").reverse().join("")
}

console.log(reverseStr(str))