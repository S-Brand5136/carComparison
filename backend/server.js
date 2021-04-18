import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import connectDb from "./config/db.js";
import CarRoutes from "./routes/CarRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDb();

const app = express();

app.use(helmet());
app.use(express.json());

app.use("/api/vehicles/", CarRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
