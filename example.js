var app = require('./route'),
	http = require('http');
 
app.get({
	path: /\/api\//,
	cb: function(req, res) {
		res.end(JSON.stringify({success: true}));
	}
}, {
	path: /\/home\//,
	cb: function(req, res) {
		res.end("Hello");
	}
}).post({
	path: /\/api\//,
	cb: function(req, res) {
		res.end(JSON.stringify({success: true}));
	}
}).e404(function(req, res) {
	res.end("FAIL");
});
http.createServer(app).listen(8080);