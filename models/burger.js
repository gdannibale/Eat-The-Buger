module.exports = function(sequelize, DataTypes) {
    let Burgers = sequelize.define("Burgers", {
      name: DataTypes.STRING,
      burger: DataTypes.STRING,
    });
    return Burgers;
  };