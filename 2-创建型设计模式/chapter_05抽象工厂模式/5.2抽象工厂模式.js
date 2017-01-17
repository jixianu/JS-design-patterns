/** 抽象工厂方法 */

var VehicleFactory = function(subType, superType) {
    // 判断抽象工厂中是否有该抽象类
    if (typeof VehicleFactory[superType] === "function") {
        // 缓存类
        var F = function() {};
        // 继承父类属性和方法
        F.prototype = new VehicleFactory[superType]();
        // 将子类 constructor 指向子类
        subType.constructor = subType;
        // 子类原型继承“父类”
        subType.prototype = new F();
    } else {
        // 不存在该抽象类抛出错误
        throw new Error("未创建该抽象类");
    }
};

// 小汽车抽象类
VehicleFactory.Car = function() {
    this.type = "car";
};
VehicleFactory.Car.prototype = {
    getPrice: function() {
        return new Error("抽象方法不能调用");
    },
    getSpeed: function() {
        return new Error("抽象方法不能调用");
    }
};

// 公交车抽象类
VehicleFactory.Bus = function() {
    this.type = "bus";
};
VehicleFactory.Bus.prototype = {
    getPrice: function() {
        return new Error("抽象方法不能调用");
    },
    getPassengerNum: function() {
        return new Error("抽象方法不能调用");
    }
};

// 货车抽象类
VehicleFactory.Truck = function() {
    this.type = "truck";
};
VehicleFactory.Truck.prototype = {
    getPrice: function() {
        return new Error("抽象方法不能调用");
    },
    getTrainload: function() {
        return new Error("抽象方法不能调用");
    }
};

/** 抽象与实现 */

// 宝马汽车子类
var BMG = function(price, speed) {
    this.price = price;
    this.speed = speed;
};

// 抽象工厂实现对Car抽象类的继承
VehicleFactory(BMG, "Car");
BMG.prototype.getPrice = function() {
    return this.price;
};
BMG.prototype.getSpeed = function() {
    return this.speed;
};

// 兰博基尼汽车子类
var Lamborghini = function(price, speed) {
    this.price = price;
    this.speed = speed;
};
// 抽象工厂实现对Car抽象类的继承
VehicleFactory(Lamborghini, "Car");
Lamborghini.prototype.getPrice = function() {
    return this.price;
};
Lamborghini.prototype.getSpeed = function() {
    return this.speed;
};

// 宇通汽车类
var YUTONG = function(price, passenger) {
    this.price = price;
    this.passenger = passenger;
};
VehicleFactory(YUTONG, "Bus");
YUTONG.prototype.getPrice = function() {
    return this.price;
};
YUTONG.prototype.getPassengerNum = function() {
    return this.getPassengerNum();
};

// 奔驰汽车子类
var BenzTruck = function(price, trainLoad) {
    this.price = price;
    this.trainLoad = trainLoad;
};
// 抽象工厂实现对Truck抽象类的继承
VehicleFactory(BenzTruck, "Truck");
BenzTruck.prototype.getPrice = function() {
    return this.price;
};
BenzTruck.prototype.getTrainload = function() {
    return this.trainLoad;
};

/** 测试 */

var truck = new BenzTruck(1000000,1000);
console.log(truck.getPrice());  // 1000000
console.log(truck.getTrainload());  // 1000
