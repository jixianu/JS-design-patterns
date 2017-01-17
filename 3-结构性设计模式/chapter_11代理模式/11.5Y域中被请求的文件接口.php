//将从X域过来的请求的数据解析并获取回调函数字段与代理模板路径字段数据，并打包返回，并将自己的Header重定向为X域的代理模板B所在的路径
<?php
    $proxy = $_POST["proxy"];
    $callback = $_POST["callback"];
    header("Location: ".$proxy."?callback=".$callback."$arg=success");
?>
/*
    测试结果
    控制台输出依次是
    成功接收数据 success
*/