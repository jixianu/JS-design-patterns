/** 单继承 属性复制 */
var extend = function(target, source) {
    for (var property in source) {
        // 将对象中的属性复制到目标对象中
        target[property] = source[property];
    }
    // 返回目标对象
    return target;
};

// 测试用例
var book = {
    name: "JavaScript设计模式",
    alike: ["css", "html", "JavaScript"]
};
var anotherBook = {
    color: "blue"
};
extend(anotherBook, book);
console.log(anotherBook.name); // JavaScript设计模式
console.log(anotherBook.alike); // ["css", "html", "JavaScript"]

anotherBook.alike.push("ajax");
anotherBook.name = "设计模式";
console.log(anotherBook.name);  // 设计模式
console.log(anotherBook.alike); // ["css", "html", "JavaScript", "ajax"]
console.log(book.name); // JavaScript设计模式
console.log(book.alike);  // ["css", "html", "JavaScript", "ajax"]
