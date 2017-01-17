/** 工厂方法模式：通过对产品类的抽象使其创建业务主要负责用于创建多类产品的实例 */

/** 反面示例 */
// 创建Java学科类
var Java = function(content) {
    // 将内容保存在content里面以备以后使用
    this.content = content;
    // 创建对象时，通过闭包，直接执行，将内容按需求的样式插入到页面内
    (function(content) {
        var div = document.createElement("div");
        div.innerHTML = content;
        div.style.color = "green";
        document.getElementById('container').appendChild(div);
    })(content);
};

// 创建PHP学科类
var Php = function(content) {
    this.content = content;
    (function(content) {
        var div = document.createElement("div");
        div.innerHTML = content;
        div.style.color = "yellow";
        document.getElementById('container').appendChild(div);
    })(content);
};

// 创建JavaScript学科类
var JavaScript = function(content) {
    this.content = content;
    (function(content) {
        var div = document.createElement("div");
        div.innerHTML = content;
        div.style.color = "pink";
        document.getElementById('container').appendChild(div);
    })(content);
};

// 学科类工厂
function JobFactory(type, content) {
    switch (type) {
        case "java":
            return new Java(content);
        case "php":
            return new Php(content);
        case "JavaScript":
            return new JavaScript(content);
    }
}

// 测试
JobFactory("JavaScript", "JavaScript哪家强");

/** 如果此时需求追加在添加一个UI学科，再使用简单工厂模式，便不利于扩展 */
