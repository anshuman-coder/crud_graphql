require("dotenv").config();
const { Schema, default: mongoose } = require("mongoose");

//defining the user schema
const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: false
  },
  isActive: {
    type: Boolean,
    required: false,
    default: true
  }
}, {
  // this will enable the timestamps on each creation/updation of the document
  timestamps: true
});


const User = mongoose.model("users", UserSchema);

module.exports = { User, UserSchema };