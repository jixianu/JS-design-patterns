/** 类式继承是通过子类的原型prototype对父类实例化来实现的，构造函数式继承是通过在子类的构造函数作用环境中执行一次父类的构造函数来实现的，组合继承只要同时做到两点即可 */

/** 组合式继承 */
// 声明父类
function SuperClass() {
    // 值类型公有属性
    this.name = name;
    // 引用类型公有属性
    this.books = ["html", "css", "JavaScript"];
}

// 父类原型公有方法
SuperClass.prototype.getName = function() {
    console.log(this.name);
};

// 声明子类
function SubClass(name, time) {
    // 构造函数式继承父类属性
    SuperClass.call(this, name);
    // 子类中新增公有属性
    this.time = time;
}

// 类式继承 子类原型继承父类
SubClass.prototype = new SuperClass();
// 子类原型方法
SubClass.prototype.getTime = function() {
    console.log(this.time);
};

// 测试
var instance1 = new SubClass("js book", 2014);
instance1.books.push("设计模式");
console.log(instance1.books); // ["html", "css", "JavaScript", "设计模式"]
instance1.getName();  // js book;
instance1.getTime();  // 2014

var instance2 = new SubClass("css book", 2013);
console.log(instance2.books); // ["html", "css", "JavaScript"]
instance1.getName();  // css book;
instance1.getTime();  // 2013

/** 这种继承方式在使用构造函数继承时执行了一遍父类的构造函数，而在实现子类原型的类式继承时又调用了一遍父类构造函数，因此父类构造函数调用了两遍，所以这种继承方式并不是最完美的方式 */
