'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('ocorrencias', { 
      id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      descricao: {
        type:  Sequelize.STRING(500),
        allowNull: true,
      },
      status: {
        type:  Sequelize.STRING(16),
        allowNull: true,
      },
      prioridade: {
        type:  Sequelize.STRING(16),
        allowNull: true,
      },
      username: {
        type:  Sequelize.STRING(20),
        allowNull: false,
        references: { model: 'usuarios', key: 'username'},
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
      },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('ocorrencias');

  }
};
