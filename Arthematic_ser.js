var http = require('http');
var imp = require('./Arthematic_mod');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(imp.add());
    res.write(imp.sub());
    res.write(imp.mul());
   res.write(imp.div());
    
}).listen(8080);