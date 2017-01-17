var Book = function(id, bookname, price) {
    this.id = id;
    this.name = bookname;
    this.price = price;
};

/** 在类的原型上添加属性和方法，有两种方式，一种是一一为源性对象属性赋值，另一种则是将一个对象赋值给类的原型对象。但这两种不要混用 */
Book.prototype.display = function() {
    // 展示这本书
};

// 或者
Book.prototype = {
    display: function() {}
};

var book = new Book(10, "JavaScript设计模式", 50);
console.log(book.bookname);
