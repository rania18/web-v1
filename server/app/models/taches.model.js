module.exports = (sequelize, DataTypes) => {
  const Tache  = sequelize.define("tache", {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    photo: {
      type: DataTypes.STRING
    }
  });

  return Tache;
};
