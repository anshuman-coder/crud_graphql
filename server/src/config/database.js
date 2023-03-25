//database connection code
require("dotenv").config()
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_HOST)
  .then(res => { 
    console.log(`Database connected successfully!`);
  })
  .catch(err => { 
    console.error(err);
  })