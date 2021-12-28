module.exports = (sequelize, DataTypes) => {
  const schema = {
    name: DataTypes.STRING,
    clinic: DataTypes.STRING,
    patient: DataTypes.INTEGER,
  }
  const modelOptions = {
    tableName: 'exams',
  }

  const Exam = sequelize.define('Exams', schema, modelOptions)

  Exam.associate = models => {
    Exam.hasMany(models.User, {
      foreignKey: 'patient', as: 'patient',
    })
  }
  return Exam
}
