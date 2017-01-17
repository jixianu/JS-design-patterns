/** 这种类式继承有两个缺点。其一，由于子类听过其原型prototype对父类实例化，继承了父类。所以说父类中的公有属性要是有引用属性。就会在子类中被所有实例共用，因此一个子类的实例更改子类原型从父类构造函数继承来的共有属性就会直接影响到其他子类 */

function SuperClass() {
    this.books = ["JavaScript", "html", "css"];
}

function SubClass() {}
SubClass.prototype = new SuperClass();
var instance1 = new SubClass();
var instance2 = new SubClass();
console.log(instance2.books); // ["JavaScript", "html", "css"]
instance1.books.push("设计模式");
console.log(instance2.books); // ["JavaScript", "html", "css", "设计模式"]

/** 其二，由于子类实现的的继承是靠其原型prototype对父类的实例化实现的，因此在创建父类的时候，是无法向父类传递参数的，因而在实例化父类的时候也无法对父类构造函数内的属性进行初始化 */
