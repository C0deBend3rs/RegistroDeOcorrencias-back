'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: false,
        type: Sequelize.INTEGER
      },
      username: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      usuario_criador: {
        type: Sequelize.STRING(20),
        references: {
          model: "usuarios",
          key: "username"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      nome: {
        type: Sequelize.STRING(64)
      },
      posicao: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};