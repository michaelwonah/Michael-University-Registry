'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courseTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.courseTable.belongsTo(models.staffTable, {
        foreignKey: 'staffId',
        as: 'lecturer'
      }),
      models.courseTable.belongsTo(models.departmentTable, {
        foreignKey: 'departmentId',
        as: 'Department'
      }),
      models.courseTable.hasMany(models.studentcourseTable, {
        foreignKey: 'courseCode',
        as: 'studentCourseInfo'
      })
    }
  }
  courseTable.init({
    courseId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUID
      },
      courseName: {
        type: DataTypes.STRING,
        allowNull:false
      },
      courseCode: {
        type: DataTypes.STRING,
        allowNull:false
      },
      departmentId: {
        allowNull: false,
        type: DataTypes.UUID,
        foreignKey: true,
        references: {
          model: 'departmentTables',
          key: 'departmentId'
        }
      },
       department: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lecturerId: {
        allowNull: false,
        type: DataTypes.UUID,
        foreignKey: true,
        references: {
          model: 'staffTables',
          key: 'staffId'
        }
      },
      lecturerName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
  }, {
    sequelize,
    modelName: 'courseTable',
  });
  return courseTable;
};