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

exports.getAllCars = async (userId, pageIndex, pageSize) => {

  const offset = pageIndex * pageSize;
  const data = await Cars.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user"
      }
    },
    { $skip: offset },
    { $limit: pageSize },
    {
      $addFields: {
        isOwner: { 
          $cond: {
            if: { $eq: ["$userId", userId] },
            then: true,
            else: false
          }
        }
      }
    }
    
  ]);

  return data;
}