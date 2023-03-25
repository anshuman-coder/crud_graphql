const { errorName, getError } = require("../../helper/response");
const userFuncs = require("../../funcs/user.funcs");

module.exports = {
  login: async ({ email, password }) => { 
    try {
      const checkUser = await userFuncs.getUserByEmail(email);

      if (!checkUser) { 
        //error code if user doen't exists
        throw new Error(getError(errorName.NOT_FOUND));
      }

      const validatePassword = userFuncs.checkPassword(checkUser, password);

      if (!validatePassword) { 
        //error for incorrect password
        throw new Error(getError(errorName.UNAUTHORIZED));
      }

      checkUser.token = userFuncs.createAuthToken(checkUser);
      return checkUser;
    } catch (error) {
      //console for debugging
      console.log(error);
      return error
    }
  },
  signup: async ({ fullName, email, password }) => { 
    try {
      // check if user already exist
      const checkUser = await userFuncs.getUserByEmail(email);

      if (checkUser) { 
        throw new Error(getError(errorName.USER_EXIST));
      }

      let result = await userFuncs.registerUser(fullName, email, password);

      result.token = userFuncs.createAuthToken(result);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}