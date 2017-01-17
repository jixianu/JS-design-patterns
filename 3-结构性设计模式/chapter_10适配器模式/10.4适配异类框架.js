// 定义框架
var A = A || {};
// 通过ID获取元素
A.g = function(id) {
    return document.getElementById(id);
};
// 为元素绑定事件
A.on = function(id, type, fn) {
    // 如果传递参数是字符串则以id处理，否则以元素对象处理
    var dom = typeof id === "string" ? this.g(id) : id;
    // 标准DOM2级添加事件方式
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
    } else if (dom.attachEvent) {
        dom.attachEvent("on" + type, fn);
    } else {
        // 简易添加事件方式
        dom["on" + type] = fn;
    }
};
/** 测试 */
A.on(window, "load", function() {
    // 按钮点击事件
    A.on("mybutton", "click", function() {
        // do something;
    });
});

/** 应用适配器模式调用jquery */
A.g = function(id) {
    // 通过jQuery获取jQuery对象，然后返回第一个成员
    return $(id).get(0);
};

A.on = function(id, type, fn) {
    // 如果传递参数是字符串则以id处理，否则以元素对象处理
    var dom = typeof id === "string" ? $("#" + id) : $(id);
    dom.on(type, fn);
};
