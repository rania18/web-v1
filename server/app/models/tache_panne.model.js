module.exports = (sequelize, DataTypes) => {
  const Tache  = sequelize.define("tache", {
    etat: {
      type: DataTypes.STRING
    },
    avancement: {
      type: DataTypes.STRING
    }
  });

  return Tache;
};
