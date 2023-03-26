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
  getMyCars: async ({ page }, {request }) => {
    try {
      const { pageIndex, pageSize } = page;
      const userId = request._id;

      const myCars = await carFuncs.getMyCars(userId, pageIndex, pageSize);

      return myCars;
      
    } catch (error) {
      return error
    }
  },
  getCarById: async ({ id }, { request }) => { 
    const userId = request._id;
    console.log(id)
    const carData = await carFuncs.getCarById(id, userId);

    if (!carData) { 
      throw new Error(getError(errorName.NOT_FOUND));
    }
    return carData
  },
  addCar: async ({ name, description, imageURL }, { request }, context) => { 
    try {
      const userId = request._id;

      const createNewCar = await carFuncs.addCar(name, description, imageURL, userId);

      return createNewCar;
    } catch (error) {
      return error;
    }
  },
  editCar: async ({ id, data }) => { 
    try {
      const result = await carFuncs.editCar(id, data);

      return result;
    } catch (error) {
      return error
    }
  }
}