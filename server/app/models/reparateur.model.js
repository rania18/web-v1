module.exports = (sequelize, DataTypes) => {
  const Reparateur= sequelize.define("reparateur", {
    nom: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  });

  return Reparateur;
};
