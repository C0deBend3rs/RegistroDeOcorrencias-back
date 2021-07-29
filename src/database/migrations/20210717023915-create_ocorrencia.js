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
      titulo: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      url: {
        type:  Sequelize.STRING(200),
        allowNull: true,
      },
      status: {
        type:  Sequelize.STRING(16),
        defaultValue: 'Aberto',
        allowNull: true,
      },
      prioridade: {
        type:  Sequelize.STRING(16),
        allowNull: true,
      },
      id_criador: {
        type:  Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'usuarios', key: 'id'},
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
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

    await queryInterface.dropTable('ocorrencias');

  }
};
