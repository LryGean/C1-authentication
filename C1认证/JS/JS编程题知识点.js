// 冒泡排序
function bubble(arr) {
    for (var j = 0; j < arr.length - 1; j++) {
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i + 1]
                arr[i + 1] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}

// 随机整数的生成
function genRandomNum(start, end) {
    return start + Math.floor(Math.random() * (end - start))
}

// 判断质数
function checkPrime(num) {
    if (num <= 1 || num % 1 !== 0) {
        return false
    }

    var flag = true
    for (var i = 1; i <= num; i++) {
        if (i == 1 || i == num) {
            continue
        }

        if (num % i === 0) {
            flag = false
            break
        }
    }

    return flag
}


// 判断奇数
function checkOdd(num) {
    return num % 2 === 1
}

// 生成一个奇数（某一个范围内）
function genRandomEven(start, end) {
    for (var i = 0; i < 10; i--) {
        var num = genRandomNum(start, end)
        if (num % 2 === 1) {
            break
        }
    }
    return num
}

// 判断偶数
function checkEven(num) {
    return num % 2 === 0
}

// 生成一个偶数（某一个范围内）
function genRandomOdd(start, end) {
    for (var i = 0; i < 10; i--) {
        var num = genRandomNum(start, end)
        if (num % 2 === 0) {
            break
        }
    }
    return num
}

// 字母频率分析
function foo(str) {
    var arr = str.split("")
    var obj = {}

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
            continue
        }

        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]] += 1
        }
    }

    return obj
}

// 数组去重
function duplicate(arr) {
    var newArr = []

    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

// 字符串反转
function reverseStr(str) {
    return str.split("").reverse().join("")
}