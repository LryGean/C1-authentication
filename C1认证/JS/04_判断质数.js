// var num = 211
// var flag= true

// for (var i=2; i<num; i++){
//     if (num % i === 0) {
//         flag = false
//     }
// }

// console.log(flag)


// 优化
var num = 211
function checkP(num) {
    var flag= true

    for (var i=2; i< Math.sqrt(num); i++){
        if (num % i === 0) {
            flag = false
            break
        }
    }
    return flag
}


console.log(checkP(num))