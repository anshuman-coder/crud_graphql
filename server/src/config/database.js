const mongoose = require("mongoose");

mongoose.connect(process.env.DB_HOST)
  .then(res => {
    console.log(`database connected successfully!`);
  })
  .catch(err => { 
    console.error(err);
  })