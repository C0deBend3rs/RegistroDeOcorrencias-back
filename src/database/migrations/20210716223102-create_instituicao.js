'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('instituicoes', { 
      id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type:  Sequelize.STRING(64),
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }, 
      username_criador: {
        type:  Sequelize.STRING(20),
        allowNull: false,
      },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('instituicoes');

  }
};
