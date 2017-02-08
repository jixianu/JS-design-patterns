// 模块实现模块
var viewCommand = (function () {
    var tpl = {
        // 展示图片结构模板
        product : [
            '<div>',
                '<img src="{#src#}"/>',
                '<p>{#text#}</p>',
            '</div>'
        ].join(''),
        // 展示标题结构模板
        title : [
            '<div class="title">',
                '<div class="main">',
                    '<h2>{#title#}</h2>',
                    '<p>{#tips#}</p>',
                '</div>',
            '</div>'
        ].join('')
    },
    // 格式化字符串缓存字符串
    html = '';
    //格式化字符串
    function formateString(str, obj){
        // 替换'{#与#}'之间的字符串
        return str.replace(/\{#(\w+)#\}/g, function (match, key) {
            return obj[key];
        })
    }
//    方法集合
    var Action = {
        // 创建方法
        create : function(data, view){
            // 解析数据 如果数据时一个数组
            if (data.length) {
                // 遍历数组
                for(var i = 0, len = data.length; i < len; i++){
                    // 将格式化之后的字符串缓存到html中
                    html += formateString(tpl[view], data[i]);
                }
            } else {
                // 直接格式化字符串缓存到html中
                html += formateString(tpl[view], data);
            }
        },
        // 展示方法
        display : function(container, data, view){
            // 如果传入数据
            if (data) {
                // 根据给定数据创建视图
                this.create(data, view);
            }
            // 展示模块
            document.getElementById(container).innerHTML = html;
            // 展示后清空缓存的字符串
            html = '';
        }
    }
    // 命令接口
    return function excute(msg){
        // 解析命令,如果msg.param不是数组则将转化为数组（apply方法要求第二个参数为数组）
        msg.param = Object.prototype.toString.call(msg.param) === "[object Array]" ? msg.param : [msg.param];
        // Action内部调用的方法引用this，所以此处为保证作用域this执行传入Action
        Action[msg.command].apply(Action, msg.param);
    };
})();

