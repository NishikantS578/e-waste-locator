const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');


	if(req.url==="/")
	{
		res.end('<h1>home</h1>');
	}
	else if(req.url === "/profile") // handle api request for a profile
	{
		res.end('<h1>profile</profile>');
	}
	else if(req.url === "/login") // handle api request for login
	{
		res.end('<h1>login</h1>');
	}
	else if(req.url === "/register") // handle api request for registering new user
	{
		res.end('<h1>register</h1>');
	}
	else if(req.url === "/map") // handle api request for maps
	{
		res.end('<h1>map</h1>');
	}
	else if(req.url === "/e-waste-center") // handle api request to get info about e-waste-center
	{
		res.end('<h1>e-waste-center</h1>');
	}
	else if(req.url === "/device-info") // handle api request to get info about electric devices
	{
		res.end('<h1>device-info</h1>');
	}
	else
	{
		res.end('no response');
	}


});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
