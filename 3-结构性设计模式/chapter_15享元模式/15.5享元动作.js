var Flyweight = {
    moveX : function (x) {
        this.x = x;
    },
    moveY : function (y) {
        this.y = y;
    }
}
var Player = function (x, y, c) {
    this.x = x;
    this.y = y;
    this.color = c;
}
Player.prototype = Flyweight;
Player.prototype.changeC = function (c) {
    this.color = c;
}

var Spirit = function (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}
Spirit.prototype = Flyweight;
Spirit.prototype.changeR = function (r) {
    this.r = r;
}
// 创建一个人
var player1 = new Player(5, 6, 'red');
console.log(player1);

// 让人移动
player1.moveX(6);
player1.moveY(7);
player1.changeC('pink');
console.log( player1 );

// 创建一个精灵
var spirit1 = new Spirit(2, 3, 4);
console.log( spirit1 );

// 让精灵移动
spirit1.moveX(3);
spirit1.moveY(4);
spirit1.changeC(5);
console.log( spirit1 );
