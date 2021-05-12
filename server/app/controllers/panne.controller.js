const { pannes } = require("../models");
const db = require("../models");
const Panne = db.pannes;
const Op = db.Sequelize.Op;

// Create and Save a new Panne
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Panne
  const panne = {
    name: req.body.name,
    description: req.body.description,
    photo: req.body.photo,
  };

  // Save panne in the database
  Panne.create(panne)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Panne."
      });
    });
};

// Retrieve all Pannes from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Panne.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Pannes."
      });
    });
};

// Find a single Panne with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Panne.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Panne with id=" + id
      });
    });
};

// Update a Panne by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Panne.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Panne was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Panne with id=${id}. Maybe panne was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Panne with id=" + id
      });
    });
};

// Delete a Panne with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Panne.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Panne was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete panne with id=${id}. Maybe panne was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Panne with id=" + id
      });
    });
};

// Delete all Pannes from the database.
exports.deleteAll = (req, res) => {
  Panne.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Pannes were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all pannes."
      });
    });
};


