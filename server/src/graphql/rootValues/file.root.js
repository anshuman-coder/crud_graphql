const fileFuncs = require("../../funcs/file.funcs");

module.exports = {
  uploadFile: async (_, { file }) => { 
    try {
      const result = await fileFuncs.uploadFile(file);

      return result;
    } catch (error) {
      return error;
    }
  }
}