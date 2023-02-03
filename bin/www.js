const http=require('http');
const PORT=5000;
const serverHandler=require('../app');
const server=http.createServer(serverHandler);
server.listen(PORT,function(){console.log('server PORT 5000 at running')})
