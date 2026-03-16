'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('courseTables', {
      courseId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUID
      },
      courseName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      courseCode: {
        type: Sequelize.STRING,
        allowNull:false
      },
      departmentId: {
        allowNull: false,
        type: Sequelize.UUID,
        foreignKey: true,
        references: {
          model: 'departmentTables',
          key: 'departmentId'
        }
      },
       department: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lecturerId: {
        allowNull: false,
        type: Sequelize.UUID,
        foreignKey: true,
        references: {
          model: 'staffTables',
          key: 'staffId'
        }
      },
      lecturerName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courseTables');
  }
};