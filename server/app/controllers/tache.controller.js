const { taches } = require("../models");
const db = require("../models");
const Tache  = db.taches ;
const Op = db.Sequelize.Op;

// Create and Save a new Tache
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tache
  const tache = {
    name: req.body.name,
    description: req.body.description,
    photo: req.body.photo,
  };

  // Save Tache in the database
  Tache.create(tache)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tache."
      });
    });
};

// Retrieve all Taches from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Tache.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Taches."
      });
    });
};

// Find a single Tache with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tache.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tache with id=" + id
      });
    });
};

// Update a Tache by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tache.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tache was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tache with id=${id}. Maybe Tache was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tache with id=" + id
      });
    });
};

// Delete a Tache with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tache.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tache was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tache with id=${id}. Maybe Tache was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tache with id=" + id
      });
    });
};

// Delete all Taches from the database.
exports.deleteAll = (req, res) => {
  Tache.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Taches were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Taches."
      });
    });
};


