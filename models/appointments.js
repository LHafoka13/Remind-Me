module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("Appointment", {
    // Giving the Author model a name of type STRING
    title: { type: DataTypes.STRING, allowNull: false },
    startDate: { type: DataTypes.STRING, allowNull: false },
    endDate: { type: DataTypes.STRING, allowNull: false },
    // time: { type: DataTypes.STRING, allowNull: false }, do we need to separate date and time?
    description: DataTypes.STRING,
    member: { type: DataTypes.BOOLEAN, allowNull: false }, //we can set this to a default value if we want, and option to change
    rRule: DataTypes.STRING,
  });

  return Appointment;
};
