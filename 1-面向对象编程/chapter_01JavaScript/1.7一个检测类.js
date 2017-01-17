var CheckObject = function() {};
CheckObject.prototype.checkName = function() {
    // 验证姓名
};
CheckObject.prototype.checkEmail = function() {
    // 验证邮箱
};
CheckObject.prototype.checkPassword = function() {
    // 验证密码
};

/** 也可以这样做 */
var CheckObject = function() {};
CheckObject.prototype = {
    checkName: function() {
        // 验证姓名
    },
    checkEmail: function() {
        // 验证邮箱
    },
    checkPassword: function() {
        // 验证密码
    }
};

/** 注意：这两种方式不能混用，否则一旦混用，如在后面为对象的原型对象复制新对象时，那么他将会覆盖掉之前对prototype对象赋值的方法 */

// 调用
var a = new CheckObject();
a.checkName();
a.checkEmail();
a.checkPassword();
