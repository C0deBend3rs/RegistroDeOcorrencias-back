'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('ocorrencias_comodos', { 
      id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_ocorrencia: {
        type:  Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: { model: 'ocorrencias', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_comodo: {
        type:  Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'comodos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type:  Sequelize.DATE,
        primaryKey: false,
        allowNull: false,
      },
      updated_at: {
        type:  Sequelize.DATE,
        primaryKey: false,
        allowNull: false,
      },
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('ocorrencias_comodos');

  }
};
