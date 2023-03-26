const { errorName, getError } = require("../../helper/response");

const carFuncs = require("../../funcs/car.funcs");

module.exports = {
  getAllCars: async ({ page }, { request }) => {
    try {
      const { pageIndex, pageSize } = page;
      const userId = request._id;
      
      const data = await carFuncs.getAllCars(userId, pageIndex, pageSize);

      return data;
    } catch (error) {
      return error
    }
  },
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