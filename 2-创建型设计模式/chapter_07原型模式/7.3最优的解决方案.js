// 图片轮播类
var LoopImages = function(imgArr, container) {
    this.imagesArray = imgArr;
    this.container = container;
};

LoopImages.prototype = {
    // 创建轮播图片
    createImage: function() {
        console.log("LoopImages createImage function");
    },
    // 切换下一张图片
    changeImage: function() {
        console.log("LoopImages changeImage function");
    }
};

// 上下滑动切换类
var SliderLoopImg = function(imgArr, container) {
    // 构造函数继承图片轮播类
    LoopImages.call(this, imgArr, container);
};
SliderLoopImg.prototype = new LoopImages();
// 重写继承的“切换下一张图片”方法
SliderLoopImg.prototype.changeImage = function() {
    console.log("SliderLoopImg changeImage function");
};

// 渐隐切换类
var FadeLoopImg = function(imgArr, container, arrow) {
    LoopImages.call(this, imgArr, container);
    // 切换箭头私有变量
    this.arrow = arrow;
};
FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function() {
    console.log("FadeLoopImg changeImage function");
};
LoopImages.prototype.getImageLength = function() {
    return this.imagesArray.length;
};
FadeLoopImg.prototype.getContainer = function(){
    return this.container;
};
/** 测试用例 */
var fadeImg = new FadeLoopImg(["001.jpg", "002.jpg", "003.jpg"], "slide", ["left.jpg", "right.jpg"]);
console.log(fadeImg.container); // slide
fadeImg.changeImage(); // FadeLoopImg changeImage function
console.log(fadeImg.getImageLength());  // 3
console.log(fadeImg.getContainer());  // slide
