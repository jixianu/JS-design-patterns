MarryState()
    .change('jump', 'shoot')
    .goes()
    .goes()
    .change('shoot')
    .goes();

// 创建一个超级玛丽
var marry = new MarryState();
marry
    .change('jump', 'shoot')
    .goes()
    .goes()
    .change('shoot')
    .goes();