// 简约版属性样式库方法
var A = {
    // 通过id获取元素
    g: function(id) {
        return document.getElementById(id);
    },
    // 设置css属性
    css: function(id, key, value) {
        document.getElementById(id).style[key] = value;
    },
    // 设置元素的属性
    attr: function(id, key, value) {
        document.getElementById(id)[key] = value;
    },
    html: function(id, html) {
        document.getElementById(id).innerHTML = html;
    },
    // 为元素绑定事件
    on: function(id, type, fn) {
        document.getElementById(id)["on" + type] = fn;
    }
};

// 测试
A.css("box", "background", "red"); // 设置css样式
A.attr("box", "className", "box"); // 设置class
A.html("box", "这是新添加的内容"); // 设置内容
A.on("box", "click", function() { // 绑定事件
    A.css("box", "width", "500px");
});
