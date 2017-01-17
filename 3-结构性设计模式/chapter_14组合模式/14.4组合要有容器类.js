// 寄生组合式继承
function inheritObject(o) {
    // 声明一个过渡函数对象
    function F() {}
    // 过渡对象的原型继承父对象
    F.prototype = o;
    // 返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F();
}

function inheritPrototype(subClass, superClass) {
    // 复制一份父类的原型保存在变量中
    var p = inheritObject(superClass.prototype);
    p.constructor = subClass;
    subClass.prototype = p;
}
var News = function () {
    // 子组件容器
    this.children = [];
    // 当前组件元素
    this.element = null;
}
// 抽象工厂模式
News.prototype = {
    init : function () {
        throw new Error('请重写你的方法');
    },
    add : function () {
        throw new Error('请重写你的方法');
    },
    getElement : function () {
        throw new Error('请重写你的方法');
    }
}

// 容器类构造函数
var Container = function (id, parent) {
    // 构造函数继承父类
    News.call(this);
    // 模块id
    this.id = id;
    // 模块的父容器
    this.parent = parent;
    // 构建方法
    this.init();
}
// 寄生式继承父类原型方法
inheritPrototype(Container, News);
// 构建方法
Container.prototype.init = function () {
    this.element = document.createElement('ul');
    this.element.id = this.id;
    this.element.className = 'new-container';
}
// 添加子元素方法
Container.prototype.add = function (child) {
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}
// 获取当前元素方法
Container.prototype.getElement = function () {
    return this.element;
}
// 显示方法
Container.prototype.show = function () {
    this.parent.appendChild(this.element);
}

// 容器类构造函数
var Item = function (classname) {
    News.call(this);
    this.classname = classname || '';
    this.init();
}
// 寄生式继承父类原型方法
inheritPrototype(Item, News);
// 构建方法
Item.prototype.init = function () {
    this.element = document.createElement('li');
    this.element.className = this.classname;
}
// 添加子元素方法
Item.prototype.add = function (child) {
    // 在子元素容器中插入子元素
    this.children.push(child);
    // 插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;
}
// 获取当前元素方法
Item.prototype.getElement = function () {
    return this.element;
}

var NewsGroup = function (classname) {
    News.call(this);
    this.classname = classname || '';
    this.init();
}
inheritPrototype(NewsGroup, News);
// 构建方法
NewsGroup.prototype.init = function () {
    this.element = document.createElement('div');
    this.element.className = this.classname;
}
NewsGroup.prototype.add = function (child) {
    // 在子元素容器中插入子元素
    this.children.push(child);
    // 插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;
}
NewsGroup.prototype.getElement = function () {
    return this.element;
}