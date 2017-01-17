/** 应用适配器模式来为函数提供默认参数，以保证函数传参的完整性 */
function doSomeThing(obj) {
    var _adapter = {
        name: "雨夜清河",
        title: "设计模式",
        age: 24,
        color: "pink",
        size: 100,
        prize: 50
    };
    for (var variable in _adapter) {
        _adapter[i] = obj[i] || _adapter[i];
    }
    // 或者 extend(_adapter, obj) 注：此时可能会多添加属性
    // do things
}
