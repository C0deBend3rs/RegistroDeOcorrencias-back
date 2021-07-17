'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('comentarios', { 
      usuario: {
        type:  Sequelize.STRING(20),
        primaryKey: true,
        allowNull: false,
        references: { model: 'usuarios', key: 'username'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ocorrencia: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: { model: 'ocorrencias', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type:  Sequelize.DATE,
        primaryKey: true,
        allowNull: false,
      },
      texto: {
        type:  Sequelize.STRING(500),
        allowNull: true,
      },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('comentarios');

  }
};
