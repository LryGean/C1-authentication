// 判断偶数
// function checkOdd(num) {
//     return num % 2 === 0
// }


function genRandomNum(start, end) {
    return start + Math.floor(Math.random() * (end - start))
}

// 生成某一个范围的偶数
function genRandomOdd(start,end) {
    for(var i=0; i<10; i--) {
        var num = genRandomNum(start, end)
        if (num % 2 === 0) {
            break
        }
    }
    return num
}

console.log(genRandomOdd(50,120))