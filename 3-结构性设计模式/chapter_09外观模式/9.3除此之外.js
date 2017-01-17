// 获取事件对象
var getEvent = function(evnet) {
    // 标准浏览器返回event，IE下window.event
    return event || window.event;
};

// 获取元素
var getTarget = function(event) {
    var event = getEvent(event);
    // 标准浏览器下 event.target，IE下event.srcElement
    return event.target || event.srcElement;
};

// 组织默认行为
var preventDefault = function(event) {
    var event = getEvent(event);
    // 标准浏览器
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        // IE浏览器
        event.returnValue = false;
    }
};
