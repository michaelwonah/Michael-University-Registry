'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class facultyTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.facultyTable.hasMany(models.departmentTable, {
        foreignKey: 'facultyId',
        as: 'departments'
      })
    }
  }
  facultyTable.init({
       facultyId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
       },
       facultyName: DataTypes.STRING,
       dean: DataTypes.STRING,
       dateCreated: DataTypes.DATE,
       facultyCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'facultyTable',
  });
  return facultyTable;
};