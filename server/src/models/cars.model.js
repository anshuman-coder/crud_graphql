require("dotenv").config();
const { Schema, default: mongoose } = require("mongoose")

//defining the car schema
const CarSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: false
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  isActive: {
    type: Boolean,
    required: false,
    default: true
  }
}, {
  timestamps: true
});

const Cars = mongoose.model("cars", CarSchema);

module.exports = { Cars, CarSchema };