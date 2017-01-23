dealData('用户名不正确', 'validate', input[0]);
dealData(123, 'sug', input[1]);
dealData(['爱奇艺', '阿里巴巴', '爱漫画'], 'sug', input[1]);
dealData({
    'iqy' : '爱奇艺',
    'albb' : '阿里巴巴',
    'imh' : '爱漫画'
}, 'sug', input[1]);

var createSug = function (data, dom) {
    console.log(data, dom, 'createSug');
}
var createValidataResult = function (data, dom) {
    console.log( data, dom, 'createValidataResult' );
}