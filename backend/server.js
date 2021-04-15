import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
