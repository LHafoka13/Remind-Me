module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("Appointment", {
    apptName: DataTypes.STRING,
    apptDate: DataTypes.DATE,
    apptDesc: DataTypes.STRING,
  });

  return Appointment;
};
