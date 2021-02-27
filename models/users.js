module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    helper: DataTypes.BOOLEAN,
  });

  return User;
};
