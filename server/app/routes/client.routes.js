module.exports = app => {
  const clients = require("../controllers/client.controller");

  var router = require("express").Router();

  // Create a new Panne
  // router.post("/", clients.create);
  router.post("/", clients.create);


  // Retrieve all clients
  router.get("/", clients.findAll);

  // Retrieve a single clients with id
  router.get("/:id", clients.findOne);

  // Retrieve all status clients
  router.get("/status", clients.findAllStatus);

  // Update a clients with id
  router.put("/:id", clients.update);

  // Delete a clients with id
  router.delete("/:id", clients.delete);

  // Delete all clients
  router.delete("/", clients.deleteAll);

  app.use("/api/clients", router);
};
