// 导入模块使用require
const http=require('http');
//创建一个httpserver服务
http.createServer(function(request,response){

    response.writeHead(200, {'Content-Type': 'text/html'})//告诉浏览器以文本的形式解析数据
    //给浏览器输出内容
    response.end("<string>Hello node.js!</string>");
})
.listen(888);//监听端口888
console.log("启动成功:http://localhost:888");
