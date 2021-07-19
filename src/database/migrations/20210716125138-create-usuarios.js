'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('usuarios', { 
      id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type:  Sequelize.STRING(20),
        primaryKey: false,
        unique: true,
        allowNull: false,
      },
      username_criador: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      password: {
        type:  Sequelize.STRING(25),
        primaryKey: false,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }, 
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }, 
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('usuarios');

  }
};
