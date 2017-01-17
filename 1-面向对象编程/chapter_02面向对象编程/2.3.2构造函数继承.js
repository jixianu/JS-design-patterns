/** 构造函数式继承 */
// 声明父类
function SuperClass(id) {
    // 引用类型公有属性
    this.books = ["JavaScript", "html", "css"];
    // 值类型公有属性
    this.id = id;
}

// 父类声明原型方法
SuperClass.prototype.showBooks = function() {
    console.log(this.books);
};

// 声明子类
function SubClass(id) {
    // 继承父类
    SuperClass.call(this, id);
}

// 创建第一个子类的示例
var instance1 = new SubClass(10);
var instance2 = new SubClass(11);

instance1.books.push("设计模式");
console.log(instance1.books); // ["JavaScript", "html", "css", "设计模式"];
console.log(instance1.id); // 10
console.log(instance2.books); // ["JavaScript", "html", "css"]
console.log(instance2.id); // 11

instance1.showBooks(); // TypeError

/** 由于这类继承没有涉及原型prototype，所以父类的原型的方法自然不会被子类继承。 */
