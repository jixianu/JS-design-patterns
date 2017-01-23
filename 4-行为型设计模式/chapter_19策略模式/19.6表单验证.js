// 表单正则验证策略对象
var InputStrategy = function () {
    var strategy = {
    //    是否为空
        notNull : function (value) {
            return /\s+/.test(value) ? '请输入内容' : '';
        },
        // 是否是一个数字
        number : function (value) {
            return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' : '请输入数字';
        },
        // 是否是本地电话
        phone : function (value) {
            return /^\d{3}\-\d{8}$|\d{4}\-\d{7}$/.test(value) ? '' : '请输入正确的电话号码格式，如：010-12345678 或 0418-1234567';
        }
    }
    return {
        // 验证接口type算法value表单值
        check : function (type, value) {
            // 去除收尾空白符
            value = value.replace(/^\s+|\s+$/g, '');
            return strategy[type] ? strategy[type][value] : '没有该类型的检测方法'
        },
        // 添加策略
        addStrategy : function (type, fn) {
            strategy[type] = fn;
        }
    }
}
