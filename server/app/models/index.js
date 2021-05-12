const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.reponses= require("./reponse.model")(sequelize, Sequelize);
db.questions = require("./question.model")(sequelize, Sequelize);
db.enquetes = require("./enquete.model")(sequelize, Sequelize);
db.vehicules = require("./vehicule.model")(sequelize, Sequelize);
db.pannes = require("./pannes.model")(sequelize, Sequelize);
db.reparateurs = require("./reparateur.model")(sequelize, Sequelize);
db.clients = require("./client.model")(sequelize, Sequelize);

db.reponses.hasMany(db.questions, { as: "questions" });
db.questions.belongsTo(db.reponses, {
  foreignKey: "reponseId",
  as: "reponse",
});

db.questions.hasMany(db.enquetes, { as: "enquetes" });
db.enquetes.belongsTo(db.questions, {
  foreignKey: "questionId",
  as: "question",
});

db.vehicules.hasMany(db.pannes, { as: "pannes" });
db.pannes.belongsTo(db.vehicules, {
  foreignKey: "vehiculeId",
  as: "vehicule",
});

db.reparateurs.hasMany(db.pannes, { as: "pannes" });
db.pannes.belongsTo(db.reparateurs, {
  foreignKey: "reparateurId",
  as: "reparateur",
});

db.clients.hasMany(db.vehicules, { as: "vehicules" });
db.vehicules.belongsTo(db.clients, {
  foreignKey: "clientId",
  as: "client",
});

db.clients.hasMany(db.reponses, { as: "comments" });
db.reponses.belongsTo(db.clients, {
  foreignKey: "clientId",
  as: "client",
});

module.exports = db;
