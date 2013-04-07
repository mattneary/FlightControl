Introduction
============
Micro-Router is a very minimalist regex-based request router for Node.js.

Usage
=====
1. Require `route.js`, as `app`, for example.
		
```javascript	
	var app = require('./route');
```

2. Chain rules onto the `app` object with `.get({...}, ...)`, `.post({...}, ...)`, and `.e404(function(){...})`.
		
```javascript	
	app.get({ path: /^\/api\//, cb: api }, {...}).post({...});
```

3. Create a server with `app` as the handler.

```javascript	
	http.createServer(app).listen(8080);
```