const { errorName, getError } = require("../../helper/response");

const carFuncs = require("../../funcs/car.funcs");

module.exports = {
  addCar: async ({ name, description, imageURL }, { request }, context) => { 
    try {
      const userId = request._id;

      const createNewCar = await carFuncs.addCar(name, description, imageURL, userId);

      return createNewCar;
    } catch (error) {
      return error;
    }
  }
}