/** 类式继承 */
// 声明父类
function SuperClass() {
    this.superValue = true;
}
// 为父类添加公有方法
SuperClass.prototype.getSuperValue = function() {
    return this.superValue;
};
// 声明子类
function SubClass() {
    this.SubValue = false;
}

// 继承父类
SubClass.prototype = new SuperClass();
// 为子类添加公有方法
SubClass.prototype.getSubValue = function() {
    return this.SubValue;
};

var instance = new SubClass();
console.log(instance.getSuperValue()); // true
console.log(instance.getSubValue()); // false

console.log(instance instanceof SuperClass); // true
console.log(instance instanceof SubClass); // true
console.log(SubClass instanceof SuperClass); // false
console.log(SubClass.prototype instanceof SuperClass); // true
