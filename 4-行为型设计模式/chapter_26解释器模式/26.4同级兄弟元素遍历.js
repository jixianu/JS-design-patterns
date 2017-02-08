// 获取兄弟元素名称
function getSublingName(node) {
    // 如果存在兄弟元素
    if (node.previousSibling) {
        var name = '',
            count = 1,
            nodeName = node.nodeName,
            sibling = node.previousSibling;
        // 如果存在前一个兄弟元素
        while (sibling){
            // 如果节点为元素 并且节点类型与前一个兄弟元素类型相同，并且前一个兄弟元素名称存在
            if (sibling.nodeType == 1 && sibling.nodeType === node.nodeType && sibling.nodeName) {
                // 如果节点名称和前一个兄弟元素名称相同
                if (nodeName == sibling.nodeName) {
                    // 节点名称后面添加计数
                    name += ++count;
                } else {
                    // 重置相同紧邻几点名称节点个数
                    count = 1;
                    // 追加新的节点名称
                    name += '|' + sibling.nodeName.toUpperCase();
                }
            }
            // 向前获取前一个兄弟元素
            sibling = sibling.previousSibling;
        }
        return name;
    } else {
        return '';
    }
}
