// 右侧按钮提示框
var RightAlert = function (data) {
    // 继承基本提示框构造函数
    Alert.call(this, data);
    // 为确认按钮添加right类设置位置居右
    this.confirmBtn.className = this.confirmBtn.className + 'right';
}
// 继承基础提示框方法
RightAlert.prototype = new Alert();

// 标题提示框
var TitleAlert = function (data) {
    // 继承基本提示框构造函数
    Alert.call(this, data);
    // 设置标题内容
    this.title = data.title;
    // 创建标题组件
    this.titleNode = document.createElement('h3');
    // 标题组件中写入标题内容
    this.titleNode.innerHTML = this.title;
}
// 继承基本提示框方法
TitleAlert.prototype = new Alert();
// 对基本提示框创建方法拓展
TitleAlert.prototype.init = function () {
    // 插入主题
    this.panel.insertBefore(this.titleNode, this.panel.firstChild);
    // 继承基本提示框init方法
    Alert.prototype.init.call(this);
}