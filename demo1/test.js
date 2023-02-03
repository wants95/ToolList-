const http=require('http');
const querystring=require('querystring');
const server=http.createServer(function(request,response){
    const method=request.method;
    const url=request.url;
    const path=url.split('?')[0];
    const query=querystring.parse(url.split('?')[1]);
 const resGETData={
    method,
    url,
    path,
    query
}
response.setHeader('Content-type','application/json');
if(request.method=='GET')
  {  response.end(JSON.stringify(
        resGETData
    ));
    console.log(resGETData);
}

    if(request.method=='POST')
    {
        let postData='';
        request.on('data',chunk=>{
            postData+=chunk.toString();
        })
        request.on('end',function(){
            resGETData.postData=postData;
            response.end(JSON.stringify(resGETData));
        })
    }
}).listen('5050')
    ;
    console.log("启动成功:http://localhost:5050");


