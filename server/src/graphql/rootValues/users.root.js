const { errorName, getError } = require("../../helper/response");
const userFuncs = require("../../funcs/user.funcs");

module.exports = {
  user: async ({ id }) => { 
    try {
      const user = await userFuncs.getUserById(id);
      if (!user) { 
        throw new Error(getError(errorName.NOT_FOUND));
      }

      return user;
    } catch (error) {
      return error;
    }
  },
  editProfile: async ({ id, data }) => { 
    try {
      if (!id) { 
        throw new Error(getError(errorName.VALIDATION_ERROR));
      }
      const result = await userFuncs.updateUser(id, data);

      return result;
    } catch (error) {
      console.log(error)
      return error
    }
  },
  deleteProfile: async ({ id }) => { 
    try {
      if (!id) { 
        throw new Error(getError(errorName.VALIDATION_ERROR));
      }

      const result = await userFuncs.deleteUser(id);
      return result;
    } catch (error) {
      console.log(error)
      return error;
    }
  }
}