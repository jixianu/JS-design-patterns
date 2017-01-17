/**
 * 基于已经存在的模板对象克隆出新对象的模式
 * arguments[0]，arguments[1]，arguments[2]：参数1，参数2，参数3 表示模板对象
 * 注意。这里对模板引用类型的属性实际上进行了浅复制（引用类型属性共享），当然根据需求也可以进行深复制（引用类型属性赋值）
 **/

function prototypeExtend() {
    var F = function() {}, // 缓存类，为实例化返回对象临时创建
        args = arguments,
        i = 0,
        len = args.length;
    for (; i < len; i++) {
        // 遍历每个模板对象中的属性
        for (var j in args[i]) {
            // 将这些属性复制到缓存类原型中
            F.prototype[j] = args[i][j];
        }
    }
    // 返回缓存类的一个实例
    return new F();
}

var penguin = prototypeExtend({
    speed: 20,
    swim: function() {
        console.log("游泳速度 " + this.speed);
    }
}, {
    run: function(speed) {
        console.log("奔跑速度 " + speed);
    }
}, {
    jump: function() {
        console.log("跳跃动作");
    }
});

penguin.swim();
penguin.run(10);
penguin.jump();
