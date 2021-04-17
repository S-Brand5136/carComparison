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
  const vehicle = await Vehicle.find(req.params.model);

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
  const vehicles = await Vehicle.find(req.params.manufacturer);

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
const updateVehicle = asyncHandler(async (req, res) => {
  const vehicle = await Vehicle.find(req.params.id);

  if (vehicle) {
    const {
      manufacturer,
      model,
      price,
      engineSize,
      numSeats,
      milesPerGallon,
      safetyRating,
      specialFeatures,
    } = req.body;

    vehicle.manufacturer = manufacturer;
    vehicle.model = model;
    vehicle.price = price;
    vehicle.engineSize = engineSize;
    vehicle.numSetas = numSeats;
    vehicle.milesPerGallon = milesPerGallon;
    vehicle.safetyRating = safetyRating;
    vehicle.specialFeatures = specialFeatures;

    const updatedVehicle = await vehicle.save();
    res.status(201).json(updatedVehicle);
  } else {
    res.status(404);
    throw new Error("Vehicle not found");
  }
});

// @desc    Delete Vehicle
// @route   GET /api/Vehicles/:id
// @access  Private
const deleteVehicle = asyncHandler(async (req, res) => {
  const vehicle = Vehicle.find(req.params.id);

  if (vehicles) {
    await vehicle.remove();
    res.json({ message: "The vehicle has been removed from database" });
  } else {
    res.status(404);
    throw new Error("Vehicle not found");
  }
});
