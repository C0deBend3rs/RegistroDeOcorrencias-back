'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('gerenciadores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: false,
        type: Sequelize.INTEGER
      },
      username: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING(20),
        references: {
          model: "usuarios",
          key: "username"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('gerenciadores');
  }
};