module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define("question", {
    name: {
      type: DataTypes.STRING
    },
    text: {
      type: DataTypes.STRING
    }
  });

  return Question;
};
