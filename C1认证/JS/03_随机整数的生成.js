// 生成[0,1)之间的随机小数
// console.log(Math.random())


// 随机整数
// 去掉小数位：向上取整、向下取整、四舍五入、直接去
// 向下取整
// console.log(Math.floor(Math.random() * 100))      

// 封装
// function genRandomNum() {
//     return Math.floor(Math.random() * 100)
// }
// console.log(genRandomNum())

// 给定范围生成随机整数
function genRandomNum(start, end) {
    return start + Math.floor(Math.random() * (end - start))
}
console.log(genRandomNum(50,120))