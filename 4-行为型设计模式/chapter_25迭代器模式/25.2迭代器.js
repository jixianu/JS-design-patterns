// 迭代器
var Iterator = function (items, container) {
        // 获取父容器，若container参数存在，并且可以获取该元素则获取，否则获取document
    var container = container && document.getElementById(container) || document,
        // 获取元素
        items = container.getElementsByTagName(items),
        // 获取元素长度
        length = items.length,
        // 当前索引值，默认：0
        index = 0,
        // 缓存源生数组splice方法
        splice = [].splice;
    return {
        // 获取第一个元素
        first : function () {
            index = 0;      // 校正当前索引
            return items[index];  //获取第一个元素
        },
        // 获取最后一个元素
        second : function () {
            index = length -1;
            return items[index];
        },
        // 获取前一个元素
        pre : function () {
            if (--index > 0) {
                return items[index];
            } else {
                index = 0;
                return null;
            }
        },
        // 获取后一个元素
        next : function () {
            if (++index < length) {
                return items[index];
            } else {
                index = length -1;
                return null;
            }
        },
        // 获取某一个元素
        get : function (num) {
            // 如果num大于等于0再获取正向获取，否则逆向获取
            index = num >= 0 ? num % length : num % length + length;
            // 返回对应元素
            return items[index];
        },
        // 对每一个元素执行某一个方法
        dealEach : function (fn) {
            // 第二个参数开始为回调函数中参数
            var args = splice.call(arguments, 1);
            // 遍历元素
            for(var i = 0; i < length; i++){
                // 对元素执行回调函数
                fn.apply(items[i], args);
            }
        },
        // 对某一个元素执行某一个方法
        dealItem : function (num, fn) {
            // 对元素执行回调函数，注：1第三个参数开始为回调函数中参数 2通过this.get方法设置index索引值
            fn.apply(this.get(num), splice.call(arguments, 2))
        },
        // 排他方式处理某一个元素
        exclusive : function (num, allFn, numFn) {
            // 对所有元素执行回调函数
            this.dealEach(allFn);
            // 如果num类型为数组
            if (Object.prototype.toString.call(num) === '[object Array]') {
                // 遍历数组
                for(var i = 0, len = num.length; i < len; i++){
                    // 分别处理数组中每一个元素
                    this.dealItem(num[i], numFn);
                }
            } else {
                // 处理第num个元素
                this.dealItem(num, numFn);
            }
        }
    }
};
