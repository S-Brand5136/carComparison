import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import connectDb from "./config/db.js";
import CarRoutes from "./routes/CarRoutes";

dotenv.config();

connectDb();

const app = express();

app.use(helmet());
app.use(express.json());

app.use("/api/vehicles/", CarRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
