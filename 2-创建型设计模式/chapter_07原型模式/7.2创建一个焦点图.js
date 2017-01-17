// 图片轮播类
var LoopImages = function(imgArr, container) {
    this.imagesArray = imgArr; // 轮播图片数组
    this.container = container; // 轮播图片容器
    this.createImage = function() {}; // 创建轮播图片
    this.changeImage = function() {}; // 切换下一张图片
};

// 上下滑动切换类
var SliderLoopImg = function(imgArr, container) {
    // 构造函数继承图片轮播类
    LoopImages.call(this, imgArr, container);
    // 重写继承的“切换下一张图片”方法
    this.changeImage = function() {
        console.log("SliderLoopImg changeImage function");
    };
};

// 渐隐切换类
var FadeLoopImg = function(imgArr, container, arrow) {
    LoopImages.call(this, imgArr, container);
    this.arrow = arrow;
    this.changeImage = function() {
        console.log("FadeLoopImg changeImage function");
    };
};

/** 测试用例 */
// 实例化一个渐隐切换图片类
var fadeImg = new FadeLoopImg(["001.jpg", "002.jpg", "003.jpg"], "slide", ["left.jpg", "right.jpg"]);

fadeImg.changeImage();  // FadeLoopImg changeImage function
