// 统计代理
var Count = (function(){
    // 缓存图片
    var img= new Image();
    // 返回统计函数
    return function(param){
        // 统计请求字符串
        var str = "http://www.count.com/a.gif?";
        // 拼接请求字符串
        for(var i in param){
            str += i + "=" + param[i];
        }
        // 发送统计请求
        img.src = str;
    };
})();

// 测试用例：统计num
Count({num: 10});
