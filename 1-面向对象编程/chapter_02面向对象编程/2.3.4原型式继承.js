/** 原型式继承 */
function inheritObject(o) {
    // 声明一个过渡函数对象
    function F() {}
    // 过渡对象的原型继承符对象
    F.prototype = o;
    // 返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F();
}

// 测试用例
var book = {
    name: "js book",
    alikeBook: ["css book", "html book"]
};

var newBook = inheritObject(book);
newBook.name = "ajax book";
newBook.alikeBook.push("xml book");

var otherBook = inheritObject(book);
otherBook.name = "flash book";
otherBook.alikeBook.push("as book");

console.log(newBook.name); // ajax book
console.log(newBook.alikeBook); // ["css book", "html book", "xml book", "as book"]
console.log(otherBook.name); // flash book
console.log(otherBook.alikeBook); // ["css book", "html book", "xml book", "as book"]
console.log(book.name); // js book
console.log(book.alikeBook); // ["css book", "html book", "xml book", "as book"]

/** 跟类式继承一样，引用类型的属性被共用 */
