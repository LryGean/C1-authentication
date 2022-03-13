var arrList = [1, 9, 0, 2, 1, 6, 8, 11, 0, 5, 18, 1, 26, 11, 8, 2, 3, 5, 18]


var oddRepeat = []   //偶数数组
var evenRepeat = []  //奇数数组
var obj = {}
var list =[]         //去重数组

arrList.map(function (item) {
    if (item % 2 === 1) {
        evenRepeat.push(item)
    }
    else {
        oddRepeat.push(item)
    }

    // 去重
    if (list.indexOf(item) === -1){
        list.push(item)
    }
})

for (var i=0; i<list.length-1; i++) {
    for(var j=0; j<list.length-1-i; j++) {
        if (list[j] > list[j+1]) {
            var temp = list[j+1]
            list[j+1] = list[j]
            list[j] = temp
        }
    }
}

obj.list = list
obj.oddRepeat =oddRepeat
obj.evenRepeat = evenRepeat

console.log(obj)