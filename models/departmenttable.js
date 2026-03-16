'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class departmentTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.departmentTable.belongsTo(models.facultyTable,{
        foreignKey: 'facultyId',
        as: 'faculty'
      }),

      models.departmentTable.hasMany(models.studentTable, {
        foreignKey: 'departmentId',
        as: 'students'
      })
    }
  }
  departmentTable.init({
    departmentId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      departmentName: DataTypes.STRING,
      departmentCode: DataTypes.STRING,
      facultyId: DataTypes.UUID,
      hod: DataTypes.STRING,
      dateCreated: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'departmentTable',
  });
  return departmentTable;
};