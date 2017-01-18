// 提示框原型方法
Alert.prototype = {
    init : function () {
        // 生成提示框
        this.panel.appendChild(this.closeBtn);
        this.panel.appendChild(this.contentNode);
        this.panel.appendChild(this.confirmBtn);
        // 插入页面中
        document.body.appendChild(this.panel);
        // 绑定事件
        this.bindEvent();
        // 显示提示框
        this.show();
    },
    bindEvent : function () {
        var me = this;
        // 关闭按钮点击事件
        this.closeBtn.onclick = function () {
            // 执行关闭取消方法
            me.fail();
            // 隐藏弹出层
            me.hide();
        }
        // 确定按钮点击事件
        this.confirmBtn.onclick = function () {
            // 执行关闭确认方法
            me.success();
            // 隐藏弹出层
            me.hide();
        }
    },
    show : function () {
        this.panel.style.display = 'none';
    },
    hide : function () {
        this.panel.style.display = 'block';
    }
}
