// 显示某页逻辑
function showPage(page, data) {
}

// Page备忘录类
var Page = function () {
    // 信息缓存对象
    var cache = {};
    /**
     * 主函数
     * 参数page页码
     * 参数fn成功回调函数
     */
    return function (page, fn) {
        // 判断该页数据是否在缓存中
        if (cache[page]) {
            // 恢复到该页状态，显示该页内容
            showPage(page, cache[page]);
            // 执行成功回调函数
            fn && fn();
        } else {
            // 若缓存Cache中无该页数据
            $.post('./data/getNewsData.php', {
                // 请求携带的参数
                page : page
            }, function (res) {
                // 成功返回
                if (res.errNo == 0) {
                    // 显示该页数据
                    showPage(page, res.data);
                    // 将该页数据种入缓存中
                    cache[page] = res.data;
                    // 执行回调
                    fn && fn();
                } else {
                    // 处理异常
                }
            })

        }
    }
}();

// 下一页按钮点击事件
$('#next_page').click(function () {
    // 获取新闻内容元素
    var $news = $('#news_content'),
        //获取新闻内容元素当前页数据
        page = $news.data('page');
    // 获取并显示新闻
    Page(page, function () {
        // 修正新闻内容元素当前页内容
        $news.data('page', page + 1);
    })
});
