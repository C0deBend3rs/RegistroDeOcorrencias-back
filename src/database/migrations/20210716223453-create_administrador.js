'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('administradores', { 
      username: {
        type:  Sequelize.STRING(20),
        primaryKey: true,
        allowNull: false,
      },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('administradores');

  }
};
