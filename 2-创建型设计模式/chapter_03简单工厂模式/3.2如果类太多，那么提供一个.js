/** 简单工厂模式 */

// 篮球基类
var Basketball = function() {
    this.intro = "篮球盛行于美国。";
};
Basketball.prototype = {
    getMember: function() {
        console.log("每个队伍中需要5名队员。");
    },
    getBallSize: function() {
        console.log("篮球很大。");
    }
};

// 足球基类
var Football = function() {
    this.intro = "足球在世界范围内很流行。";
};
Football.prototype = {
    getMember: function() {
        console.log("每个队伍需要11名队员。");
    },
    getBallSize: function() {
        console.log("足球很大");
    }
};

// 网球基类
var Tennis = function() {
    this.intro = "每年有很多网球系列赛。";
};
Tennis.prototype = {
    geMember: function() {
        console.log("每个队伍需要一名队员");
    },
    getBallSize: function() {
        console.log("网球很小。");
    }
};

// 运动工厂
var SportsFactory = function(name) {
    switch (name) {
        case "NBA":
            return new Basketball();
        case "wordCup":
            return new Football();
        case "FrenchOpen":
            return new Tennis();
    }
};

// 调用：创建一个足球
var football = SportsFactory("wordCup");
console.log(football);
console.log(football.intro);
football.getMember();
