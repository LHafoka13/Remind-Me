module.exports = (sequelize, DataTypes) => {
  const Appointments = sequelize.define("Appointments", {
    // Giving the Author model a name of type STRING
    title: { type: DataTypes.STRING, allowNull: false },
    startDate: DataTypes.STRING,
    description: DataTypes.STRING,
    rRule: DataTypes.STRING,
  });

  Appointments.associate = (models) => {
    Appointments.belongsTo(models.User, {
      foreignKey: {
        allowNull: true,
      },
    });
  };

  return Appointments;
};
