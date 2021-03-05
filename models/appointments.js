module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("Appointment", {
    // Giving the Author model a name of type STRING
    apptName: DataTypes.STRING,
    apptDate: DataTypes.DATE,
    apptDesc: DataTypes.STRING,
  });

  return Appointment;
};
