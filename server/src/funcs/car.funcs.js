const { Cars } = require("../models/cars.model");

const { Types: { ObjectId } } = require("mongoose")

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

exports.getMyCars = async (userId, pageIndex, pageSize) => { 

  const offset = pageIndex * pageSize;
  const data = await Cars.aggregate([
    { $match: { userId: userId } },
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

exports.getCarById = async (id, userId) => { 
  
  const data = await Cars.aggregate([
    { $match: { _id: new ObjectId(id) } },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user"
      }
    },
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
    },
    { $limit: 1 }
  ]);

  if (data && data.length > 0) { 
    return data[0];
  }

  return false;
}

exports.editCar = async (id, data) => { 
  let values = {};

  for (const [key, value] of Object.entries(data)) { 
    values[key] = value;
  }

  const update = await Cars.findByIdAndUpdate(id, values);

  const updatedValue = await this.getCarById(id);

  return updatedValue;
}

exports.deleteCar = async (id) => { 
  const result = await Cars.findByIdAndDelete(id);

  return result;
}