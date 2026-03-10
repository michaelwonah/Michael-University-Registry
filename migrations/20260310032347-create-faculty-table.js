'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('facultyTables', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      facultyId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dean: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateCreated: {
        type: Sequelize.DATE,
        allowNull: false
      },
      facultyCode:{
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('facultyTables');
  }
};