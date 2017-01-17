var paper = 0,
    num = 5,
    len = article.length;
// 添加5条新闻
for(var i = 0; i < 5; i++ ){
    if(article[i])
        // 通过享元类获取创建的元素并写入新闻内容
        Flyweight.getDiv().innerHTML = article[i];
}
// 下一页按钮绑定事件
document.getElementById('next_page').onclick = function() {
    // 如果新闻内容不足5条则返回
    if (article.length < 5)
        return ;
    var n = ++paper * num % len, // 获取当前页的第一条新闻索引
        j = 0;  // 循环变量
    // 插入5条新闻
    for(;j < 5; j++) {
        // 如果存在第n+j条则插入
        if(article[n + j]){
            Flyweight.getDiv().innerHTML = article[n + j];
        // 否则插入起始位置第 n + j -len 条
        } else if (article[n + j -len]) {
            Flyweight.getDiv().innerHTML = article[n + j - len];
        } else {
            Flyweight.getDiv().innerHTML = "";
        }

    }
}
