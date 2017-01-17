Function.prototype.addMethod = function(name, fn) {
    this.prototype[name] = fn;
    return this;
};

// 此时我们还可以按照上一种方式添加方法
var Methods = function() {};
Methods.addMethod("checkName", function() {
    // 验证姓名
}).addMethod("checkEmail", function() {
    // 验证邮箱
});

// 但是我们现在使用的时候需要注意了，不能直接使用，要通过new关键字来创建新对象想。
var m = new Methods();
m.checkEmail();
