var arrList = [3, 23, 1, 23, 42, 13, 56, 34]

// 从小到大排序
for (var i=0; i<arrList.length-1; i++) {
    for(var j=0; j<arrList.length-1-i; j++) {
        if(arrList[j] > arrList[j+1]) {
            var temp = arrList[j+1]
            arrList[j+1] = arrList[j]
            arrList[j] = temp
        }
    }
}
console.log(arrList)

// 从大到小排序
for (var i=0; i<arrList.length-1; i++) {
    for(var j=0; j<arrList.length-1-i; j++) {
        if(arrList[j] < arrList[j+1]) {
            var temp = arrList[j+1]
            arrList[j+1] = arrList[j]
            arrList[j] = temp
        }
    }
}
console.log(arrList)