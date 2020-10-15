const express = require("express");
const routes = express.Router();

const VehicleController = require("./controllers/VehicleController");

//Routes
routes.get("/veiculos", VehicleController.index);
routes.get("/veiculos/:id", VehicleController.show);
routes.post("/veiculos", VehicleController.store);
routes.put("/veiculos/:id", VehicleController.update);
routes.delete("/veiculos/:id", VehicleController.destroy);

module.exports = routes;