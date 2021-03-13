module.exports = (sequelize, DataTypes) => {
  const Appointments = sequelize.define("Appointments", {
    // Giving the Author model a name of type STRING
    title: { type: DataTypes.STRING, allowNull: false },
    startDate: { type: DataTypes.STRING, allowNull: false },
    endDate: DataTypes.STRING,
    // time: { type: DataTypes.STRING, allowNull: false }, do we need to separate date and time?
    description: DataTypes.STRING,
    member: { type: DataTypes.STRING, allowNull: false }, //we can set this to a default value if we want, and option to change
    rRule: DataTypes.STRING,
  });

  return Appointments;
};
