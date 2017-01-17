/** 多继承 属性复制 */
var mix = function() {
    var i = 1, // 从第二个参数开始为被继承的对象
        leng = arguments.length, // 获取参数长度
        target = arguments[0], // 第一个参数为目标对象
        arg; // 缓存参数对象
    // 遍历被继承的对象
    for (; i < len; i++) {
        // 缓存当前对象
        arg = arguments[i];
        // 遍历被继承对象中的属性
        for (var variable in arg) {
            // 将被继承对象中的属性复制到目标对象中
            target[variable] = arg[variable];
        }
    }

    // 返回目标对象
    return target;
};

/** mix方法的作用就是将传入的多个对象的属性复制到源对象中，这样既可实现多个对象的属性的继承 */
/** 也可以将他绑定到原生对象Object上，这样所有的对象就可以拥有这个方法了 */

Object.prototype.mix = function() {
    var i = 0,
        len = arguments.length,
        arg;
    // 遍历被继承的对象
    for (; i < len; i++) {
        // 缓存当前对象
        arg = arguments[i];
        // 遍历被继承对象中的属性
        for (var variable in object) {
            // 将被继承对象中的属性复制到目标对象中
            this[variable] = arg[variable];
        }
    }
};
