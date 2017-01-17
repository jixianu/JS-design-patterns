var CheckObject = {
    checkName: function() {
        // 验证姓名
        return this;
    },
    checkEmail: function() {
        // 验证邮箱
        return this;
    },
    checkPassword: function() {
        // 验证密码
        return this;
    }
};

// 调用
CheckObject.checkName().checkEmail().checkPassword();

/** 同样的方式也可以放到类的原型对象中 */
var CheckObject = function() {};
CheckObject.prototype = {
    checkName: function() {
        // 验证姓名
        return this;
    },
    checkEmail: function() {
        // 验证邮箱
        return this;
    },
    checkPassword: function() {
        // 验证密码
        return this;
    }
};

// 调用的时候需要先创建一下
var a = new CheckObject();
a.checkName().checkEmail().checkPassword();
