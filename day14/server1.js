var http = require('http');

http.createServer(function(req,res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('I am Lasya');
	res.end();
}).listen(8080);

