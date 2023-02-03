const http=require('http');
const querystring=require('querystring');
const server=http.createServer(function(request,response){
   if(request.method=='POST')
{
let postData='';
request.on('data',chunk=>{
    postData+=chunk.toString();
})
request.on('end',function(){
    console.log('postData',postData);
    console.log("数据接收完毕");
})
console.log('post data content type',request.headers['content-type']);
console.log(request.method);
}
}
    ).listen('8080')
    ;
    console.log("启动成功:http://localhost:8080");


