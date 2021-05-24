module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("client", {
    nom: {
      type: DataTypes.STRING
    },
    prenom: {
      type: DataTypes.STRING
    },
    code: {
      type: DataTypes.STRING
    },
    adresse: {
      type: DataTypes.STRING
    },
    contact: {
      type: DataTypes.STRING
    },
    tel: {
      type: DataTypes.STRING
    },
    fax: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    published: {
      type: DataTypes.BOOLEAN
    }
  });

  return Client;
};
