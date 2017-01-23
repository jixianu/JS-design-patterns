/**
 * 创建提示框组件
 * 参数data 响应适配数据
 * 参数dom 事件源
 */
var createSug = function (data, dom) {
    var i = 0,
        len = data.length,
        html = '';
    // 拼接每一条提示语句
    for(; i < len; i++){
        html += '<li>' + data[i] + '</li>';
    }
    // 显示提示框
    dom.parentNode.getElementsByTagName('ul')[0].innerHTML = html;
}

/**
 * 创建校验组件
 * 参数data 响应适配数据
 * 参数dom 事件源
 */
var createValidataResult = function (data, dom) {
    // 显示校验结果
    dom.parentNode.getElementsByTagName('span')[0].innerHTML = data;
}
