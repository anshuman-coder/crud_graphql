require("dotenv").config();
const crypto = require("crypto");
const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.getUserByEmail = async (email) => { 
  let user = await User.findOne({ email });

  if (!user) { 
    return false
  }

  user = user.toObject();
  return user;
}

exports.registerUser = async (fullName, email, password) => { 
  const hashPass = crypto.createHash("md5").update(password).digest("hex");

  const newUser = new User({
    fullName,
    email,
    password: hashPass
  });

  const data = await newUser.save();

  return data.toObject();
}

exports.createAuthToken = (data) => { 
  delete data.password;
  const token = jwt.sign({ ...data },
    process.env.AUTH_SECRET_KEY, {
    expiresIn: '24h'
  });

  return token
}

exports.checkPassword = (user, password) => { 
  const hassPass = crypto.createHash("md5").update(password).digest("hex");

  if (hassPass == user.password) { 
    return true
  }

  return false;
}

exports.getUserById = async (id) => { 
  const data = await User.findById(id);

  if (!data) { 
    false
  }

  return data.toObject();
}