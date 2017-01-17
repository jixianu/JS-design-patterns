function createPop(type, text) {
    // 创建一个对象，并对对象拓展属性和方法
    var o = {};
    o.content = text;
    o.show = function() {
        // 显示方法
    };
    if (type == "alert") {
        // 警示框差异部分
    }
    if (type == "prompt") {
        // 提示框差异部分
    }
    if (type == "confirm") {
        // 确认框差异部分
    }
    // 将对象返回
    return o;
}
// 创建警示框
var userNameAlert = createPop("alert", "用户名只能是26个字母和数字");
