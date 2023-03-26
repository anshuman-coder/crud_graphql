const { Cars } = require("../models/cars.model");

exports.addCar = async (name, description, imageURL, userId) => { 
  const newCar = new Cars({
    userId: userId,
    name: name,
    description: description,
    imageURL: imageURL
  });

  const data = await newCar.save();

  return data.toObject();
}