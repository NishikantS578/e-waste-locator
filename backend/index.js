const http = require('http');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');

dotenv.config();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

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

const uri = process.env.URI 

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
