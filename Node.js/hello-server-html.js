var http = require("http");

http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type" : "text/html"});
	res.write("<!DOCTYPE html>");
	res.write("<html>");
	res.write("<head>");
	res.write("<meta charset='utf-8'>");
	res.write("<title>Hello World en HTML</title>");
	res.write("</head>");
	res.write("<body>");
	
	res.write("<p>Hello World</p>");
	
	res.write("</body>");
	res.write("</html>");
	res.end();
}).listen(3000);