function bindIEEvent(dom, type, fn, data) {
    var data = data || {};
    dom.attachEvent('on' + type, function (e) {
        fn.call(dom, e, data);
    });
}

function $(id) {
    return document.getElementById(id);
}

bindIEEvent($('btn'), 'click', function (e, d) {
    $('test').innerHTML = e.type + d.text + this.tagName;
}, {text : 'test demo'});