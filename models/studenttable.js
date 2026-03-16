'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.studentTable.belongsTo(models.departmentTable, {
        foreignKey: 'departmentId',
        as: 'department'
      }),
      models.studentTable.hasMany(models.studentcourseTable, {
        foreignKey: 'studentId',
        as: 'courseInfo'
      })
    }
  }
  studentTable.init({
      studentId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
    matricNumber: DataTypes.STRING,
    studentName: DataTypes.STRING,
    age: DataTypes.STRING,
    gender: DataTypes.ENUM('Male', 'Female', 'Non-binary'),
    departmentId: DataTypes.UUID,
    dateJoined: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'studentTable',
  });
  return studentTable;
};