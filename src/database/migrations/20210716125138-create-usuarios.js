'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('usuarios', { 
      username: {
        type:  Sequelize.STRING(20),
        primaryKey: true,
        allowNull: false,
      },
      username_criador: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }, 
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('usuarios');

  }
};
