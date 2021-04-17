import asyncHandler from "express-async-handler";
import Vehicle from "../models/Vehicle";

// @desc    Fetch All Vehicles
// @route   GET /api/Vehicles
// @access  Public
const getVehicles = asyncHandler(async (req, res) => {
  const vehicles = await Vehicle.find({});
  res.json(vehicles);
});

// @desc    Get Vehicle by model
// @route   GET /api/Vehicles/:model
// @access  Public
const getVehicleByModel = asyncHandler(async (req, res) => {
  const vehicle = Vehicle.find(req.params.model);

  if (vehicle) {
    res.json({ vehicle });
  } else {
    res.status(404);
    throw new Error("Vehicle not found");
  }
});

// @desc    Get all Vehicles by manufacturer
// @route   GET /api/Vehicles/:manufacturer
// @access  Public
const getVehiclesByManufacturer = asyncHandler(async (req, res) => {
  const vehicles = Vehicle.find(req.params.manufacturer);

  if (vehicles) {
    res.json(vehicles);
  } else {
    res.status(404);
    throw new Error("Vehicle not found");
  }
});

// @desc    Edit Vehicle
// @route   GET /api/Vehicles/:id
// @access  Private

// @desc    Delete Vehicle
// @route   GET /api/Vehicles/:id
// @access  Private

// @desc    Fetch All Vehicles
// @route   GET /api/Vehicles
// @access  Public
