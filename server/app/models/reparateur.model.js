module.exports = (sequelize, DataTypes) => {
  const Reparateur= sequelize.define("reparateur", {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  });

  return Reparateur;
};
