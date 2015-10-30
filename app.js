var http = require('http');
var koa = require('koa');
var app = koa();
var fs = require('fs');

fs.readFile('HTML/login.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {
        	"Content-Type": "text/html"
        });  

        response.write(html);  
        response.end();  
    }).listen(3000);
});
