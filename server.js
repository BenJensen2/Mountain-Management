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

// Express Server
app.listen(port1, () => {
  console.log(`BBSP is running on ${port1}`);
});

app.get('/mapboxKey',(req,res)=>{
  res.send(mapBoxAT)
})

// Express Server
app.listen(port2, () => {
  console.log(`BBSP is running on ${port2}`);
});