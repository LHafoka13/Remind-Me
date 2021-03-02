module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    helper: DataTypes.BOOLEAN,
  });
  return Users;
};
