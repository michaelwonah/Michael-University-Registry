'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('studentcourseTables', {
      studentCourseId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      studentName: {
        allowNull:false,
        type: Sequelize.STRING,
      },
      matricNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      courseCode:  {
        allowNull: false,
        type: Sequelize.STRING,
      },
      mark: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      remark: {
        allowNull: false,
        type: Sequelize.STRING
      },
      studentId: {
        allowNull: false,
        type: Sequelize.UUID,
        foreignKey: true,
        references: {
          model: 'studentTables',
          key: 'studentId'
        }
      },
      courseCode: {
        allowNull: false,
        type: Sequelize.STRING,
        
      },
      courseId: {
        allowNull: false,
        type: Sequelize.UUID,
        foreignKey: true,
        references: {
          model: 'courseTables',
          key: 'courseId'
        }
      },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('studentcourseTables');
  }
};