// 模板类 基础提示框 data 渲染数据
var Alert = function (data) {
    // 没有数据则返回
    if (!data) return ;
    // 设置内容
    this.content = data.content;
    // 创建面板、内容、确定按钮、关闭按钮
    this.panel = document.createElement('div');
    this.contentNode = document.createElement('p');
    this.confirmBtn = document.createElement('span');
    this.closeBtn = document.createElement('b');
    // 添加样式类
    this.panel.className = 'alert';
    this.confirmBtn.className = 'a-close';
    this.closeBtn.className = 'a-confirm';
    // 为确定按钮添加文案
    this.confirmBtn.innerHTML = data.confirm || '确认';
    // 为提示内容添加文本
    this.contentNode.innerHTML = this.content;
    // 点击确定按钮执行方法，如果data中有success方法则为success方法，否则为空函数
    this.success = data.success || function(){};
    // 点击关闭按钮执行方法
    this.fail = data.fail || function(){};
}
