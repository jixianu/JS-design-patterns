/** 也可以将多态转化为更易懂的类形式 */
function Add() {
    // 无参数算法
    function zero() {
        return 10;
    }
    // 一个参数算法
    function one(num) {
        return num + 10;
    }
    // 两个参数算法
    function two(num1, num2) {
        return num1 + num2;
    }
    // 相加公有方法
    this.add = function() {
        var arg = arguments,
            len = arg.length;
        switch (len) {
            // 如果没有参数
            case 0:
                return zero();
            case 1:
                return one(arg[0]);
            case 2:
                return two(arg[0], arg[1]);
        }
    };
}

// 实例化类
var A = new Add();
// 测试
console.log(A.add()); // 10
console.log(A.add(5)); // 15
console.log(A.add(6, 7)); // 13
