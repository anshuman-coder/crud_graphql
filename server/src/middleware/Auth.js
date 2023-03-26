require("dotenv").config();
const jwt = require("jsonwebtoken");
const { errorName, getError } = require("../helper/response");
const userFuncs = require("../funcs/user.funcs");

exports.authentication = async (req, res, next) => { 
  try {
    const auth = req.headers["authorization"];

    if (auth) {
      token = auth.split(" ")[1];
      jwt.verify(token, process.env.AUTH_SECRET_KEY, async (err, AuthData) => {
        if (err) {
          throw new Error(getError(errorName.UNAUTHORIZED));
        }
        // console.log(AuthData);
        const checkUser = await userFuncs.getUserById(AuthData._id);

        if (!checkUser) {
          throw new Error(getError(errorName.UNAUTHORIZED));
        }

        req.user = checkUser;
        return next();
      })
    } else { 
      throw new Error(getError(errorName.UNAUTHORIZED));
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json(error.message)
  }
}