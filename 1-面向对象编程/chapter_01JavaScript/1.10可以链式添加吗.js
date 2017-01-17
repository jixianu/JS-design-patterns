Function.prototype.addMethod = function(name, fn) {
    this[name] = fn;
    return this;
};

// 添加方法就可以这样做了
var methods = function() {};
Function.addMethod("checkName", function() {
    // 验证姓名
}).addMethod("checkEmail", function() {
    // 验证邮箱
});

/** 同样也可以进行链式调用
 * 既然添加方法的时候可以将this返回实现，那么添加的每个方法将this返回就可以实现链式调用
 */
var metods = function() {};
methods.addMethod("checkName", function() {
    // 验证姓名
    return this;
}).addMethod("checkEmail", function() {
    // 验证邮箱
    return this;
});

// 调用
methods.checkName().checkEmail();
