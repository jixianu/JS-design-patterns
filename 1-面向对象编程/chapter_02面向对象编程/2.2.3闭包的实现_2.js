/** 在闭包外部添加原型属性和方法看上去像似脱离了闭包这个类，所以在有时候在闭包内部实现一个完整的类然后将其返回 */
var Book = (function() {
    // 静态私有变量
    var bookNum = 0;
    // 静态私有方法
    function checkBook(name) {}
    // 创建类
    function _book(newId, newName, newPrice) {
        // 私有变量
        var name, price;
        // 私有方法
        function checkID(id) {}
        // 特权方法
        this.getName = function() {};
        this.getPrice = function() {};
        this.setName = function() {};
        this.setPrice = function() {};
        // 公有属性
        this.id = newId;
        // 公有方法
        this.copy = function() {};
        bookNum++;
        if (bookNum > 100) {
            throw new Error("我们仅出版100本书。");
        }
        // 构造器
        this.setName(name);
        this.setPrice(price);
    }
    // 构造原型
    _book.prototype = {
        // 静态公有属性
        isJSBook: false,
        display: function() {}
    };
})();
