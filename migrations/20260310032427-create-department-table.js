'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('departmentTables', {
      departmentId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      departmentName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      departmentCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hod: {
        type: Sequelize.STRING,
        allowNull: false
      },
      facultyId:{
        type:Sequelize.UUID,
        allowNull: false,
        ForeignKey: true,
        references: {
          model: 'facultyTables',
          key: 'facultyId'
        }
      },
      dateCreated: {
        type: Sequelize.DATE,
        allowNull: false
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
    await queryInterface.dropTable('departmentTables');
  }
};