module.exports = (sequelize, DataTypes) => {
  const Vehicule = sequelize.define("vehicule", {
    immatricule : {
      type: DataTypes.STRING
    },
    marque: {
      type: DataTypes.STRING
    },
    PMC : {
      type: DataTypes.STRING
    },
    nChassis: {
      type: DataTypes.STRING
    },
    modele: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    Kilometrage : {
      type: DataTypes.STRING
    },
    carburant : {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    photoMat: {
      type: DataTypes.STRING
    }
  });

  return Vehicule;
};
