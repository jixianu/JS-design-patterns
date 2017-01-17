/** 在JavaScript创建对象时有一种安全模式就可以安全解决忘记使用new关键字而引发的错误 */
/** 反面示例 */
var Book = function(title, time, type) {
    this.title = title;
    this.time = time;
    this.type = type;
};

// 实例化一本书
var book = Book("JavaScript", "2014", "js");
console.log(book); // undefined
console.log(window.title); // JavaScript
console.log(window.time); // 2014
console.log(window.type); // js

/** 图书安全类 */
var Book = function(title, time, type) {
    // 判断执行过程中this是否是当前这个对象（如果是用new创建的）
    if (this instanceof Book) {
        this.title = title;
        this.time = time;
        this.type = type;
    } else {
        // 否则重新创建这个对象
        return new Book(title, time, type);
    }
};

var book = Book("javaScript", "2014", "js");

// 测试
console.log(book); // Book
console.log(book.title); // JavaScript
console.log(book.time); // 2014
console.log(book.type); // js
console.log(window.title); // undefined
console.log(window.type); // undefined
console.log(window.time); // undefined
