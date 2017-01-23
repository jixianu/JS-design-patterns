// 拓展 可以延伸算法
InputStrategy.addStrategy('nickname', function (value) {
    return /^[a-zA-Z]\w{3,7}$/.test(value) ? '' : '请输入4-8位昵称,如YYQH';
});

// 外观模式简化元素的获取
function $tag(tag, context){
    context = context || document;
    return context.getElementsByTagName(tag);
}
// 提交按钮点击
$tag('input')[1].onclick = function () {
    // 获取输入框内容
    var value = $tag('input')[0].value;
    // 获取日期格式验证结果
    $tag('span')[0].innerHTML = InputStrategy.check('nickname', value);
}
