var http = require('http');
var imp=require('./first_module');
var imp1=require('./hello_node');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
   res.write(imp.myDate());
   res.write(imp.hw1());
   res.write(imp1.hw());
    res.end('hii guys');
}).listen(3030);