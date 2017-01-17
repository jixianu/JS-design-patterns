/** 工厂模式 */

function createBook(name, time, type) {
    // 创建一个对象，并对对象拓展属性和方法
    var o = {};
    o.name = name;
    o.type = type;
    o.time = time;
    o.getName = function() {
        console.log(this.name);
    };
    // 将对象返回
    return o;
}

var book1 = createBook("js book", 2014, "js");
var book2 = createBook("css book", 2013, "css");

book1.getName();
book2.getName();
