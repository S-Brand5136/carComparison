import dotenv from "dotenv";
import connectDb from "./config/db.js";
import Vehicle from "./models/Vehicle.js";
import carData from "./data/carData.js";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await Vehicle.deleteMany();

    await Vehicle.insertMany(carData);

    console.log("Data Imported");
    process.exit(1);
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
