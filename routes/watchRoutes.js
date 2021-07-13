const express = require("express");
const router = express.Router();

const Controller = require("../controllers/watchController");

router.get("/", Controller.getAllWatch);

router.get("/id/:id", Controller.getOneWatch);

router.post("/", Controller.createWatch);

router.put("/id/:id", Controller.updateWatch); // change all

router.patch("/id/:id", Controller.updateSomeWatch); // change spesific

router.delete("/id/:id", Controller.deleteWatch);

module.exports = router;
