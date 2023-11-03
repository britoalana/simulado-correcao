const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const User = require("../models/users");
const Publication = require("../models/publication");

const Likes = db.define("likes", {
  id: {
    type: DataTypes.STRING,
    require: true,
    primaryKey: true,
  },
});

User.belongsToMany(Publication, { through: "likes" });
Publication.belongsToMany(User, { through: "likes" });

module.exports = Likes;
