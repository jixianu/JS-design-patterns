/** 多态：同一个方法多种调用方式 */

function add() {
    // 获取参数
    var arg = arguments,
        len = arg.length;
    switch (len) {
        // 如果没有参数
        case 0:
            return 10;
        case 1:
            return 10 + arg[0];
        case 2:
            return arg[0] + arg[1];
    }
}

// 测试用例
console.log(add()); // 10
console.log(add(5)); // 15
console.log(add(6, 7)); // 13
