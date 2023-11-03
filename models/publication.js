const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Publication = db.define("publication", {
  publication: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

module.exports = Publication;
