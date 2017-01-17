/** 应用适配器模式将数组转换为对象形式 */

var arr = ["JavaScript", "book", "前端编程语言", "8月1日"];

// 目标格式
var obj = {
    name: "",
    type: "",
    title: "",
    time: ""
};

function arrToObjAdapter(arr) {
    return {
        name: arr[0],
        type: arr[1],
        title: arr[2],
        time: arr[3]
    };
}

var adapterData = arrToObjAdapter(arr);
console.log(adapterData); // Object {name: "JavaScript", type: "book", title: "前端编程语言", time: "8月1日"}
