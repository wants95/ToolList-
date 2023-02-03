const handleBlogRoute=require('./src/routes/blog');
const serverHandler=function(request,response){
response.setHeader('Content-type','application/json');
// const responseData={
//     name:'hz',
//     age:19
// };
const url=request.url;
    request.path=url.split('?')[0];

const blogData=handleBlogRoute(request,response);
if(blogData){
response.end(
    JSON.stringify(blogData)
);
return;
}

// response.writeHead(404,{'Content-Type':'text/plain'});
// response.write('404 Not Found');
// response.end();


}
module.exports=serverHandler;