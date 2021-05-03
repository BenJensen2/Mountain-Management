// Express
const express = require("express");
const app = express();

// Read Environment Variables
const dotenv = require('dotenv');
dotenv.config();

// Ports
const port1 = 8000;
const port2 = 8001;

// Cross Origin Resource Sharing: Cross Site Sharing
const cors = require("cors");
app.use(cors());

// Mapbox
const mapBoxAT = process.env.mapBoxAT

app.use(express.json());

require("./server/config/database");
require("./server/config/routes")(app);

// SERVERS

// Express Server
app.listen(port1, () => {
  console.log(`BBSP is running on ${port1}`);
});

// Express Server
app.listen(port2, () => {
  console.log(`BBSP is running on ${port2}`);
});

// FUNCTIONAL SERVER TESTS

// Hello
app.get("/server", (req, res) => {
	res.send("Hello from the Server!");
});

// Headers Log
app.get('/requestHeaders', (req, res) => {
  console.log(req.headers)
  res.send("Headers in Node Log")
})

// Mapbox Key
app.get('/mapboxKey',(req,res)=>{
  res.send(mapBoxAT)
})


// Environmental Variables
app.get("/env", (req, res) => {
	let test_secret_key = process.env.TEST_SECRET_KEY;
	res.send(`The test secret key is: ${test_secret_key}`);
});

// Cookies
// Production: Only send over HTTPS
app.get("/cookie", (req, res) => {
	res.cookie("my test cookie", "cookie data", { httpOnly: true }).json({
		message: "This response is the cookie",
	});
});