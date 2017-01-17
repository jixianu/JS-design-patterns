/**
 * prototype.js是什么
 * 一款JavaScript框架，里面为我们方便的封装了很多方法，他最大的特点是对原生对象（JavaScript语言为们提供的对象类，如Function、Array、Object等等）的拓展。
 * 例如我们想给每一个函数都添加一个检测邮箱的方法可以这么做
 */

Function.prototype.checkEmail = function() {
    // 验证邮箱
};

// 这时候调用就比较方便了
var f = function() {};
f.checkEmail();

// 如果你习惯类的形式，也可以这么用
var f = new Function();
f.checkEmail();

/** 这样做会无缘原生对象Function，所以别人创建的函数也会被你创建的函数所污染，造成不必要的开销，但是你可以抽象出一个统一添加方法的功能方法 */
Function.prototype.addMethod = function(name, fn) {
    this[name] = fn;
};

// 如果你想添加永祥验证和姓名验证方法你可以这样做
var methods = function() {};
// 或者
var methods = new Function();
methods.addMethod("checkName", function() {});
methods.addMethod("checkEmail", function() {});

// 调用
methods.checkEmail();
methods.checkName();
