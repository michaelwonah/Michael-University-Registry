'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class staffTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.staffTable.belongsTo(models.facultyTable, {
        foreignKey: 'facultyId',
        as: 'faculty'
      })
    }
  }
  staffTable.init({
    staffId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
    staffName: DataTypes.STRING,
    staffCode: DataTypes.STRING,
    gender: DataTypes.ENUM('Male', 'Female', 'Non-binary'),
    qualification: DataTypes.STRING,
    facultyId: DataTypes.UUID,
    dateJoined: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'staffTable',
  });
  return staffTable;
};