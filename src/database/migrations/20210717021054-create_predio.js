'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('predios', { 
      id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_filial: {
        type:  Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'filiais', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nome: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }, 
      email: {
        type: Sequelize.STRING(80),
        allowNull: false,
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

    await queryInterface.dropTable('predios');

  }
};
