// 设置层模块
(function () {
    // 消息提醒选框
    var hideNum = document.getElementById('hide_num'),
        // 网址选框
        hideUrl = document.getElementById('hide_url');
    // 消息提醒选框事件
    hideNum.onchange = function () {
        // 如果勾选
        if (hideNum.checked) {
            // 中介者发布隐藏消息提醒功能消息
            Mediator.send('hideAllNavNum');
        } else {
            // 中介者发布显示消息提醒功能消息
            Mediator.send('showAllNavNum');
        }
    };
    // 网址选框事件
    hideUrl.onchange = function () {
        // 如果勾选
        if (hideUrl.checked) {
            // 中介者发布隐藏所有网址功能消息
            Mediator.send('hideAllNavUrl');
        } else {
            // 中介者发布显示所有网址功能消息
            Mediator.send('showAllNavUrl');
        }
    };
})()
