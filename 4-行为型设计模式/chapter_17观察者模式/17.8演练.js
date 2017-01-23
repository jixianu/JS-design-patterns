var student1 = new Student('学生1回答问题');
var student2 = new Student('学生2回答问题');
var student3 = new Student('学生3回答问题');

student1.answer('什么是设计模式');
student1.answer('简述观察者模式');
student2.answer('什么是设计模式');
student3.answer('什么是设计模式');
student3.answer('简述观察者模式');

student3.sleep('简述观察者模式');

var teacher = new Teacher();
teacher.ask('什么是设计模式');
teacher.ask('简述观察者模式');