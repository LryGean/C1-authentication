// 判断奇数
// function checkOdd(num) {
//     return num % 2 === 1
// }


function genRandomNum(start, end) {
    return start + Math.floor(Math.random() * (end - start))
}

// 生成某一个范围的奇数
function genRandomEven(start,end) {
    for(var i=0; i<10; i--) {
        var num = genRandomNum(start, end)
        if (num % 2 === 1) {
            break
        }
    }
    return num
}

console.log(genRandomEven(50,120))