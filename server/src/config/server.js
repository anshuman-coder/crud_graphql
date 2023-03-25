//main application setup
require("dotenv").config()
const express = require("express");
const cors = require("cors");
const routes = require("../routes/index");

//initializing the express application
const app = express();
//database connection 
require("./database");

//Global middleware
app.use(cors());
//parsing middleware
app.use(express.json());

//implementing the routes
app.use("/", routes);


//Application port number
const PORT = process.env.API_PORT || 5000;

app.listen(PORT, () => { 
  console.log(`Server is running on http://localhost:${PORT}`);
})