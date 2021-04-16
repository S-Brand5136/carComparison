import mongoose from "mongoose";

const { Schema } = mongoose;

const carSchema = new Schema(
  {
    manufacturer: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    engineSize: {
      type: String,
      required: true,
    },
    numSeats: {
      type: Number,
      required: true,
    },
    milesPerGallon: {
      type: Number,
      required: true,
    },
    safetyRating: {
      type: Number,
      required: true,
    },
    specialFeatures: [
      {
        heatedSeats: {
          type: Boolean,
          default: false,
        },
        sunRoof: {
          type: Boolean,
          default: false,
        },
        remoteStart: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);

export default Car;
