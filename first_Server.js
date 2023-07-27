 var  HTTP = require('http');
 HTTP.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.end('hii guys');
}).listen(5050);