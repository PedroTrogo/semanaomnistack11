const express = require("express");

const routes = express.Router();

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

//sessions
routes.post("/sessions", SessionController.create);

//ongs
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);
routes.delete("/ongs:id", OngController.delete);

//profile
routes.get("/profile", ProfileController.index);

//incidents
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;