module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },

    first_name: { type: DataTypes.TEXT, required: true },
    last_name: { type: DataTypes.TEXT, required: true },
    regno: { type: DataTypes.TEXT, required: true },
    email: { type: DataTypes.TEXT, required: true },
    phone_no: { type: DataTypes.TEXT, required: true },
    year: { type: DataTypes.TEXT, required: true },
    institute: { type: DataTypes.TEXT, required: true },
    club : { type: DataTypes.TEXT, required: true },

    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
  }, {
    underscored: true
  });
  return Users;
};
