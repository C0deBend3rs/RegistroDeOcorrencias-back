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
      id_criador: {
        type:  Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'administradores', key: 'id'},
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
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

    await queryInterface.dropTable('instituicoes');

  }
};
