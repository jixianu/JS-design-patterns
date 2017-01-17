// 私有属性与私有方法，对象公有属性和对象公有方法，构造器
var Book = function(id, name, price) {
    // 私有属性
    var num = 1;
    // 私有方法
    function checkId() {}
    // 特权方法
    this.getName = function() {};
    this.getPrice = function() {};
    this.setName = function() {};
    this.setPrice = function() {};
    // 对象公有属性
    this.id = id;
    this.copy = function() {};
    // 构造器
    this.setName(name);
    this.setPrice(price);
};

// 类静态公有属性（对象不能访问）
Book.isChinese = true;
// 类静态公有方法（对象不能访问）
Book.resetTime = function() {
    console.log("new Time");
};
Book.prototype = {
    // 公有属性
    isJSBook: false,
    // 公有方法
    display: function() {}
};

var b = new Book(11, "JavaScript设计模式", 50);
console.log(b.num); // undefined
console.log(b.isJSBook);  // false
console.log(b.id);  // 11
console.log(b.isChinese); // undefined

console.log(Book.isChinese);  // true
Book.resetTime(); // new Time
