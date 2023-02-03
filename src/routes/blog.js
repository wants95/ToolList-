
const handleBlogRoute=(request,response) => {
    const method=request.method;
    

    if(method==='GET' && request.path==='/api/blog/list')
    {
        return{
            message:'获取博客列表的接口'
        }
    }

    if(method==='GET' && request.path==='/api/blog/detail')
    {
        return{
            message:'获取博客详情的接口'
        }
    }
    
    if(method==='POST' && request.path==='/api/blog/new')
    {
        return{
            message:'新建博客的接口'
        }
    }
    
    if(method==='POST' && request.path==='/api/blog/update')
    {
        return{
            message:'更新博客的接口'
        }
    }
    
    if(method==='POST' && request.path==='/api/blog/delete')
    {
        return{
            message:'删除博客的接口'
        }
    }
    
}
module.exports=handleBlogRoute;