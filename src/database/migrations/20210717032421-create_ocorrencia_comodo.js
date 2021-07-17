'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('ocorrencias_comodos', { 
      id_ocorrencia: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: { model: 'ocorrencias', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_espaco_aberto: {
        type:  Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'comodos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('ocorrencias_comodos');

  }
};
