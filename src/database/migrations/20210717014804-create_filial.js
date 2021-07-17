'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('filiais', { 
      id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_instituicao: {
        type:  Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'instituicoes', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nome: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      data_fund: {
        type: Sequelize.DATE,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }, 
      cidade: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      estado: {
        type: Sequelize.STRING(2),
        allowNull: true,
      },
      rua: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      cep: {
        type: Sequelize.STRING(8),
        allowNull: true,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      nome_diretor: {
        type: Sequelize.STRING(64),
        allowNull: true,
      },
      tel_fixo: {
        type: Sequelize.STRING(16),
        allowNull: true,
      },
      tel_cel: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(20),
        allowNull: false,
        references: { model: 'administradores', key: 'username'},
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
      },

    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('filiais');

  }
};
