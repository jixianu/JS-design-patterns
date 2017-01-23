// 学生类
var Student = function (result) {
    var that = this;
    // 学生回答结果
    that.result = result;
    // 学生回答问题动作
    that.say = function () {
        console.log( that.result );
    };
}
// 回答问题方法
Student.prototype.answer = function (question) {
    // 注册参数问题
    Observer.regist(question, this.say);
}
// 学生睡觉，此时不能回答问题
Student.prototype.sleep = function (question) {
    console.log( this.result + ' ' + question + ' 已被注销' );
    // 取消对老师问题的监听
    Observer.remove(question, this.say);
}

// 教师类
var Teacher = function(){};
// 教师提问问题的方法
Teacher.prototype.ask = function (question) {
    console.log( '问题是：' + question );
    // 发布提问消息
    Observer.fire(question);
}
