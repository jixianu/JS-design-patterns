/** 有时候对于单例对象需要延迟创建，所以在单例中还存在一种延迟创建的形式，有人也称之为“惰性单例” */

// 惰性单例模式
var LarySingle = (function() {
    // 单例实例引用
    var _instance = null;
    // 单例
    function Single() {
        // 这里定义私有属性和方法
        return {
            publicMethod: function() {},
            publicProperty: "1.0"
        };
    }
    // 获取单例对象接口
    return function() {
        // 如果未创建单例将创建单例
        if(!_instance){
            _instance = Single();
        }
        // 返回单例
        return _instance;
    };
})();
