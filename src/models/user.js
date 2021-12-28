module.exports = (sequelize, DataTypes) => {
  const schema = {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    permission: DataTypes.INTEGER,
  }
  const modelOptions = {
    tableName: 'users',
  }
  const User = sequelize.define('User', schema, modelOptions)

  User.associate = models => {
    User.belongsTo(models.Exam, {
      foreignKey: 'patient', as: 'patient',
    })
  }
  return User
}
