const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const User = require("../models/users");
const Publication = require("../models/publication");

const Comments = db.define("comments", {
  comments: {
    type: DataTypes.STRING,
    require: true,
    allowNull: false,
  },
});

User.belongsToMany(Publication, { through: "comments" });
Publication.belongsToMany(User, { through: "comments" });

module.exports = Comments;