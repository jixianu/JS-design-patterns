/** 简单工厂模式，又叫静态工厂方法，由一个工厂对象决定创建某一种产品对象类的实例。主要用来创建同一类对象 */

// 反面案例
// 用户名输入警示框
var LoginAlert = function(text) {
    this.content = text;
};
LoginAlert.prototype.show = function() {
    // 显示警示框
};
var userNameAlert = new LoginAlert();
userNameAlert.show();

// 在输入密码功能中也调用警示框类
var passwordAlert = new LoginAlert();
passwordAlert.show();

/** 在警示框中添加一个按钮 */
// 重新创建一个类
var loginConfirm = function(text) {
    this.content = text;
};
loginConfirm.prototype.show = function() {
    // 显示确认框
};
var loginFailConfirm = new loginConfirm("您的用户名不存在，请重新输入");
loginFailConfirm.show();

/** 在警示框中添加输入框 */
// 重新创建一个类
var LoginPrompt = function(text) {
    this.content = text;
};
LoginPrompt.prototype.show = function() {
    // 显示提示框
};
