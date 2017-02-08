/**
 * 显隐导航小组件
 * 参数mod 模块
 * 参数tag 处理的标签（消息提醒b，网址span）
 * 参数showOrHide 显示还是隐藏
 */
var showHideNavWidget = function (mod, tag, showOrHide) {
    // 获取导航模块
    var mod = document.getElementById(mod),
        // 获取下面的标签名为tag的元素
        tag = mod.getElementsByTagName(tag),
        // 如果设置为false或者为hide则值为hidden,否则为visible
        showOrHide = (!showOrHide || showOrHide == 'hide') ? 'hidden' : 'visible';
    // 占位隐藏这些标签
    for(var i = tag.length - 1; i >= 0; i--){
        tag.style.visibility = showOrHide;
    }
}

// 用户收藏导航模块
(function () {
    // ..其他交互逻辑
    // 订阅隐藏用户收藏导航消息提醒消息
    Mediator.regist('hideAllNavNum', function () {
        showHideNavWidget('collection_nav', 'b', false);
    });
    // 订阅显示用户收藏导航消息提醒消息
    Mediator.regist('hideAllNavNum', function () {
        showHideNavWidget('collection_nav', 'b', true);
    });
    // 订阅隐藏用户收藏导航网址消息
    Mediator.regist('hideAllNavUrl', function () {
        showHideNavWidget('collection_nav', 'span', false);
    });
    // 订阅显示用户收藏导航网址消息
    Mediator.regist('hideAllNavUrl', function () {
        showHideNavWidget('collection_nav', 'span', true);
    });
})();

// 推荐用户导航
(function () {
    // ..其他交互逻辑
    // 订阅隐藏推荐用户导航消息提醒消息
    Mediator.regist('hideAllNavNum', function () {
        showHideNavWidget('recommend_nav', 'b', false);
    });
    // 订阅显示推荐用户导航消息提醒消息
    Mediator.regist('hideAllNavNum', function () {
        showHideNavWidget('recommend_nav', 'b', true);
    });
})()

// 最近常用导航
(function () {
    // ..其他交互逻辑
    // 订阅隐藏用户收藏导航网址消息
    Mediator.regist('hideAllNavUrl', function () {
        showHideNavWidget('recently_nav', 'span', false);
    });
    // 订阅显示用户收藏导航网址消息
    Mediator.regist('hideAllNavNum', function () {
        showHideNavWidget('recently_nav', 'span', true);
    });
})()