require("dotenv").config()
const express = require("express");

const app = express();

//Database connection
require("./database");

//global middlewares
app.use(express.json());



app.listen(process.env.API_PORT, () => { 
  console.log(`Server is running on http://localhost:${process.env.API_PORT}`);
})