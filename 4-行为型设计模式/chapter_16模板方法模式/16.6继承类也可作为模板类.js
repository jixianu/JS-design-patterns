// 带有取消按钮的弹出框
var CancelAlert = function (data) {
    // 继承标题提示框构造函数
    TitleAlert.call(this, data);
    // 取消按钮文案
    this.cancel = data.cancel;
    // 创建取消按钮
    this.cancelBtn = document.createElement('span');
    // 为取消按钮添加类
    this.cancelBtn.className = 'cancel';
    // 设置取消按钮内容
    this.cancelBtn.innerHTML = this.cancel || '取消';
}
// 继承标题提示框原型方法
CancelAlert.prototype = new Alert();
CancelAlert.prototype.init = function () {
    // 继承标题提示框创建方法
    TitleAlert.prototype.init.call(this);
    // 由于取消按钮要添加在末尾，所以在创建完其他组价后添加
    this.panel.appendChild(this.cancelBtn);
}
CancelAlert.prototype.bindEvent = function () {
    var me = this;
    // 标题提示框绑定事件方法继承
    TitleAlert.prototype.bindEvent.call(me);
    this.cancelBtn.onclick = function () {
        // 执行取消回调函数
        me.fail();
        // 隐藏弹出层
        me.hide();
    }
}
