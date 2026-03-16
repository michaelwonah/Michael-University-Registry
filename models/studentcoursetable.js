'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class studentcourseTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.studentcourseTable.belongsTo(models.studentTable, {
        foreignKey: "studentId",
        as: "student"
      }),
      models.studentcourseTable.belongsTo(models.courseTable, {
        foreignKey: "courseCode",
        as: 'course'
      })
    }
  }
  studentcourseTable.init({
    studentCourseId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
      },
      studentName: {
        allowNull:false,
        type: DataTypes.STRING,
      },
      matricNumber: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      courseCode:  {
        allowNull: false,
        type: DataTypes.STRING,
      },
      mark: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      remark: {
        allowNull: false,
        type: DataTypes.STRING
      },
      studentId: {
        allowNull: false,
        type: DataTypes.UUID,
        foreignKey: true,
        references: {
          model: 'studentTables',
          key: 'studentId'
        }
      },
      courseId: {
        allowNull: false,
        type: DataTypes.STRING,
        foreignKey: true,
        references: {
          model: 'courseTables',
          key: 'courseId'
        }
      },
      courseCode: {
        allowNull: false,
        type: DataTypes.STRING,
      }
  }, {
    sequelize,
    modelName: 'studentcourseTable',
  });
  return studentcourseTable;
};