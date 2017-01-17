/** 使用安全模式类可以屏蔽创建类的实例时，忽略使用new关键字造成的错误 */

var Demo = function() {};
Demo.prototype = {
    show: function() {
        console.log("成功获取！");
    }
};

var d = new Demo();
d.show(); // 成功获取！
var t = Demo();
t.show(); // Uncaught TypeError: Cannot read property 'show' of undefined

/** 安全模式类 */
var Demo = function() {
    if (!(this instanceof Demo)) {
        return new Demo();
    }
};

var d = Demo();
d.show(); // 成功获取！
