module.exports = (sequelize, DataTypes) => {
  const Appointments = sequelize.define("Appointments", {
    // Giving the Author model a name of type STRING
    title: { type: DataTypes.STRING, allowNull: false },
    startDate: DataTypes.STRING,
    // endDate: DataTypes.STRING,
    // time: { type: DataTypes.STRING, allowNull: false }, do we need to separate date and time?
    description: DataTypes.STRING,
    rRule: DataTypes.STRING,
  });

  Appointments.associate = (models) => {
    Appointments.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Appointments;
};
