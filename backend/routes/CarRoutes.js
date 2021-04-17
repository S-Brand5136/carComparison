import express from "express";
import {
  getVehicles,
  getVehicleByModel,
  getVehiclesByManufacturer,
  updateVehicle,
  deleteVehicle,
} from "../controllers/carController";
import admin from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").get(getVehicles);
router.route("/:model").get(getVehicleByModel);
router.route("/:manufacturer").get(getVehiclesByManufacturer);
router.route("/:id").put(admin, updateVehicle).delete(admin, deleteVehicle);

export default router;
