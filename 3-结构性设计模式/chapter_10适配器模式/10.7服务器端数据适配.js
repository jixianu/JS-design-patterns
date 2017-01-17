/** 使用适配器模式将后端返回的数据格式化为理想的数据格式 */

// 理想的数据格式是一个一维数组
function ajaxAdapter(data) {
    // 处理数据并返回新数据
    return [data["key1"], data["key2"], data["key3"]];
}

$.ajax({
    url: "someAdress.php",
    success: function(data, status) {
        if (data) {
            // 使用适配后的数据--返回的对象
            doSomething(ajaxAdapter(data));
        }
    }
});
